run = ->
  login = new Login('yyyyyy', '123456')
  login.doLogin()
  $('#code_output').text(login.body)

refresh = ->
  window.location.href = window.location.href

get = ->
  jsObj.GET({
    url: 'http://www.baidu.com'
    onSuccess: (headers, body) ->
      alert body
    onError: (msg) ->
      alert msg
    })

post = ->
  jsObj.POST({
    url: 'http://www.baidu.com'
    params: 'name=yyy'
    onSuccess: (headers, body) ->
      alert body
    onError: (msg) ->
      alert msg
    })

if not jsObj?
  jsObj = {}
  jsObj.HTTP = (callback) ->
    callback.onSuccess('success')
