/*
container container-fluid
row
col-xs-12 col-sm-12 col-md-12
col-xs-offset-4 col-sm-offset-4 col-md-offset-4
bg-info bg-primary bg-success bg-warning bg-danger
text-left text-center text-right text-justify text-nowrap
text-muted text-muted text-primary text-success text-info text-warning text-danger
img-responsive img-rounded img-circle img-thumbnail
pull-left pull-right
center-block clearfix
show hidden
text-lowercase text-uppercase text-capitalize
dl-horizontal
*/

var BookChapterList, BookList, CourseList;

function initEvent() {
    var input = $('#input_json_text')[0];
    input.onchange = onChange;
    input.onkeyup = onChange;
    $('#mode-option-group input, #gen-option-group input').click(function () {
        onChange();
    });
    onChange();
}

function onChange() {
    saveConfig();
    var json = $('#input_json_text').val();
    var mode = parseInt($('#mode-option-group input[name="genMode"]:checked').val());

    var result;
    try {
      switch (mode) {
        case 1: result = js_beautify(json, {}); break;
        case 2: result = new BookList(json).html(); break;
        case 3: result = getCourseListHtml(json); break;
        case 4: result = new BookChapterList(json).html(); break;
      }
    } catch (e) {
      result = e.stack;
      mode = 1;
    }
    switch (mode) {
      case 1:
        $('#result_content').html('');
        $('pre code').text(result);
        $('pre code').each(function (i, block) {
            hljs.highlightBlock(block);
        });
        break;
      case 2:
      case 3:
      case 4:
        $('pre code').text('');
        $('#result_content').html(result);
        break;
      default:
    }
}

BookList = (function () {
  function BookList(json) {
    this.json = json;
    this.html = function () {
      return getBookListHtml(json);
    }
    function getBookListHtml(json) {
      var bookTempl = `
        <div class="container">
          <div class="row bg-info">
            <div class="col-md-2 col-sm-2 col-xs-2">
              <img class="img-responsive img-rounded" src="{img_url.viewurl}" alt="">
            </div>
            <div class="col-md-8 col-sm-8 col-xs-8 bg-success">
              <div class="row">
                <dl class="dl-horizontal">
                  <dt>book_name</dt> <dd>{book_name}</dd>
                  <dt>book_id</dt> <dd>{book_id}</dd>
                  <dt>zipfile_url</dt> <dd>{zipfile_url.viewurl}</dd>
                </dl>
              </div>
              <div class="row">
                <div class="col-xs-6 col-sm-6 col-md-6 bg-success text-danger">
                  <dl class="dl-horizontal">
                    <dt>price</dt> <dd>{price}</dd>
                    <dt>packType</dt> <dd>{packType}</dd>
                    <dt>version</dt> <dd>{version}</dd>
                  </dl>
                </div>
                <div class="col-xs-6 col-sm-6 col-md-6 bg-danger text-info">
                  <dl class="dl-horizontal">
                    <dt>flag</dt> <dd>{flag}</dd>
                    <dt>valid</dt> <dd>{valid}</dd>
                    <dt>end_date</dt> <dd>{end_date}</dd>
                  </dl>
                </div>
              </div>
            </div>
            <div class="col-md-2 col-sm-2 col-xs-2">
              col-md-2
            </div>
          </div>
        </div>
        `;
      var books = JSON.parse(json);
      if(typeof books.data != "undefined") books = books.data;
      var results = [];
      books.forEach(function (book) {
        castEndDate(book);
        castBookType(book);
        castFlag(book);
        castValid(book);
        results.push(bookTempl.format(book));
      });
      return results.join('<br>');
    }

    function castEndDate(book) {
      var endDate = book.end_date;
      if(endDate < 1000) return;
      book.end_date = new Date(endDate).Format("yyyy-MM-dd hh:mm:ss");
    }
    function castBookType(book) {
      var packType = book.packType;
      switch (packType) {
        case 1: book.packType =  "1 - 听力风暴"; break;
        case 2: book.packType =  "2 - 同步视听说"; break;
        case 3: book.packType =  "3 - 语音风暴"; break;
        case 4: book.packType =  "4 - 李大侠"; break;
        case 5: book.packType =  "5 - 听说风暴"; break;
        case 6: book.packType =  "6 - 2016版"; break;
        default: book.packType =  packType + " - 未知的打包类型"; break;
      }
    }
    function castFlag(book) {
      var flag = book.flag;
      switch (flag) {
        case 1: book.flag = "1 - 已购买"; break;
        case 2: book.flag = "2 - 已授权"; break;
        case 3: book.flag = "3 - 未购买"; break;
        default: book.flag = flag + " - 未知的购买类型"; break;
      }
    }
    function castValid(book) {
      var valid = book.valid;
      switch (valid) {
        case 0: book.valid = "0 - 已过期"; break;
        case 1: book.valid = "1 - 未过期"; break;
        default: book.valid = valid + " - 未知类型"; break;
      }
    }
  }
  return BookList;
})();

BookChapterList = (function () {
  function BookChapterList(json) {
    this.json = json;
    this.html = function () {
      return getBookChapterListHtml(json);
    }

    function getBookChapterListHtml(json) {
      var chapters = JSON.parse(json);
      if(typeof chapters.data != "undefined") chapters = chapters.data;

      parseChapterTree(chapters);

      var results = [];
      results.push(`<tr>
          <th>{type}</th>
          <th>{name}</th>
          <th>{id}</th>
          <th>{level}</th>
          <th>{display_order}</th>
          <th>{is_free}</th>
          <th>{version}</th>
          <th>{versionTest}</th>
        </tr>`);
      chapters.forEach(function (chapter) {
        if(!chapter.parent_id){
          results.push(getTableLine(chapter, 0));
          generateTableHtml(chapter.childs, results, 1);
        }
      });
      var chapterTreeTempl = `<table class="table table-bordered table-striped table-hover"> {0} </table>`;
      return chapterTreeTempl.format(results.join(''));
    }

    function generateTableHtml(chapters, results, deep) {
      if(!chapters) return;
      chapters.forEach(function (chapter) {
        results.push(getTableLine(chapter, deep));
        generateTableHtml(chapter.childs, results, deep + 1);
      });
    }

    function getTableLine(chapter, deep) {
      castChapter(chapter, deep);
      var chapterTempl = `<tr title="taskId:{taskId}">
          <td>{type}</td>
          <td>{name}</td>
          <td>{id}</td>
          <td>{level}</td>
          <td>{display_order}</td>
          <td>{is_free}</td>
          <td>{version}</td>
          <td>{versionTest}</td>
        </tr>`;
      return chapterTempl.format(chapter);
    }

    function castChapter(chapter, deep) {
      var name = chapter.name;
      if(!name){
        chapter.name = "-";
      } else {
        chapter.name = "　".repeat(deep) + chapter.name;
      }
      if(!chapter.version) chapter.version = "-";
      if(!chapter.versionTest) chapter.versionTest = "-";
      if(!chapter.taskId) chapter.taskId = "-";
      switch (chapter.type) {
        case 1: chapter.type = "章节"; break;
        case 2: chapter.type = "页面"; break;
        case 3: chapter.type = "TASK"; break;
        default: chapter.type = "未知"; break;
      }
      switch (chapter.is_free) {
        case 0: chapter.is_free = "不免费"; break;
        case 1: chapter.is_free = "免费"; break;
        default : chapter.is_free = "不免费"; break;
      }
    }

    function parseChapterTree(chapters) {
      chapters.sort(function(l, h){ return parseInt(l.orderNo) - parseInt(h.orderNo); });
      chapters.forEach(function (chapter) {
        if(!chapter.parent_id && chapter.id){
          chapter.childs = [];
          parseChapterChilds(chapters, chapter, 0);
        }
      });
    }

    function parseChapterChilds(chapters, chapter_, deep) {
      if(deep > 10) {
        console.error("chapter tree deep > 20");
        return;
      }
      chapters.forEach(function (chapter) {
        if(chapter_.id == chapter.parent_id){
          chapter_.childs.push(chapter);
          chapter.childs = [];
          parseChapterChilds(chapters, chapter, deep + 1);
        }
      });
    }
  }
  return BookChapterList;
})();

CourseList = (function () {
  function CourseList(json) {
    this.json = json;
    this.html = function () {
      return getCourseListHtml(json);
    }
    function getCourseListHtml(json) {
      var courseTempl = `
        <div class="container">
          <div class="row bg-info">
            <div class="col-xs-2 col-sm-2 col-md-2">
              <img class="img-responsive img-rounded" src="{pictureUrl}" alt="">
            </div>
            <div class="col-xs-8 col-sm-8 col-md-8 bg-danger">
              <div class="row">
                <div class="col-xs-6 col-sm-6 col-md-6">
                  <dl class="dl-horizontal">
                    <dt>courseCode</dt> <dd>{courseCode}</dd>
                    <dt>courseName</dt> <dd>{courseName}</dd>
                    <dt>courseId</dt> <dd>{courseId}</dd>
                    <dt>teacherName</dt> <dd>{teacherName}</dd>
                  </dl>
                </div>
                <div class="col-xs-6 col-sm-6 col-md-6">
                  <dl class="dl-horizontal">
                    <dt>createTime</dt> <dd>{createTime}</dd>
                    <dt>joinTime</dt> <dd>{joinTime}</dd>
                    <dt>ownerId</dt> <dd>{ownerId}</dd>
                    <dt>status</dt> <dd>{status}</dd>
                  </dl>
                </div>
              </div>
            </div>
            <div class="col-md-2 col-sm-2 col-xs-2">
              col-md-2
            </div>
          </div>
        </div>
       `;
      var courses = JSON.parse(json);
      if(typeof courses.data != "undefined"
      && typeof courses.data.list != "undefined") courses = courses.data.list;
      var results = [];
      courses.forEach(function (course) {
        castCourseVar(course);
        results.push(courseTempl.format(course));
      });
      return results.join('<br>');
    }
    function castCourseVar(course) {
      var createTime = course.createTime;
      course.createTime = new Date(createTime).Format('yyyy-MM-dd hh:mm:ss');
      var joinTime = course.joinTime;
      course.joinTime = new Date(joinTime).Format('yyyy-MM-dd hh:mm:ss');
      var status = course.status;
      switch (status) {
        case 1: course.status = "1 - 当前课程"; break;
        case 2: course.status = "2 - 以往课程"; break;
        default:  course.status = status + " - ??课程"; break;
      }
    }
  }
  return CourseList;
})();
