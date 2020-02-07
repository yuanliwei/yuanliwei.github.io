<script>
  import "@material/mwc-radio";
  import "@material/mwc-formfield";
  import "@material/mwc-textfield";
  import "@material/mwc-textarea";
  import "@material/mwc-drawer";
  import "@material/mwc-top-app-bar";
  import Split from "../component/Split.svelte";
  import Editor from "../component/Editor.svelte";
  import { onMount, afterUpdate } from "svelte";
  import insertCSS from "./style.scss";
  //   import echarts from "echarts";
  import * as echarts from "echarts/lib/echarts";
  import "echarts/lib/chart/bar";
  import "echarts/lib/component/tooltip";
  import "echarts/lib/component/dataZoom";

  import elementResizeDetectorMaker from "element-resize-detector";

  const erd = elementResizeDetectorMaker();

  export let load;
  (async () => {
    await load();
  })();

  let chart;
  let data = {
    input: "1 2 3 4 5 6 7 8 9"
  };

  try {
    data = JSON.parse(localStorage.getItem("echart-datas")) || data;
  } catch (e) {}

  function saveData() {
    localStorage.setItem("echart-datas", JSON.stringify(data));
  }

  onMount(() => {
    insertCSS();
    chart = echarts.init(document.querySelector(".chart"));
    // 指定图表的配置项和数据
    var option = {
      tooltip: {},
      xAxis: {
        data: []
      },
      yAxis: {},
      dataZoom: [
        {
          type: "slider",
          xAxisIndex: 0,
          start: 0,
          end: 100
        },
        {
          type: "inside",
          xAxisIndex: 0,
          start: 0,
          end: 100
        },
        {
          type: "slider",
          yAxisIndex: 0,
          start: 0,
          end: 100
        },
        {
          type: "inside",
          yAxisIndex: 0,
          start: 0,
          end: 100
        }
      ],
      series: [
        {
          name: "value",
          type: "bar",
          data: []
        }
      ]
    };

    chart.setOption(option);

    let root = document.querySelector(".echart-container");
    erd.listenTo(root, element => {
      console.log(chart);
      chart.resize();
    });
  });

  afterUpdate(() => {
    if (!chart) return;
    let dataStr = data.input.replace(/[^\d\.]+/g, " ").trim();
    let datas = dataStr.split(" ").map(str => parseFloat(str));
    let i = 0;
    chart.setOption({
      xAxis: {
        data: datas.map(o => i++)
      },
      series: [
        {
          data: datas
        }
      ]
    });
  });
</script>

<style>
  .overhide {
    overflow: hidden;
  }
  .overscroll {
    overflow: auto;
  }
  .h100 {
    height: 100%;
  }
  mwc-textarea {
    width: 100%;
  }
</style>

<Split option={{ direction: 'horizontal' }} key="1">
  <div slot="one" class="overscroll h100">
    <h1>Chart</h1>
    <hr />
    <mwc-textarea
      rows="5"
      label="datas"
      on:keyup={e => ((data.input = e.target.value), saveData())}
      on:change={e => ((data.input = e.target.value), saveData())}
      value={data.input} />
  </div>
  <div slot="two" class="h100 overhide echart-container">
    <div class="chart h100" />
  </div>
</Split>
