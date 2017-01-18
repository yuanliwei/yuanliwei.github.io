class Login

  constructor: (@username, @password) ->

    @doLogin = =>
      @GET 'http://www.baidu.com/login', (headers, body)=>
        b = $(body)
        lt = b.find('input[name="lt"]').val()
        execution = b.find('input[name="execution"]').val()
        @POST 'http://www.baidu.com/login',{
          username:@username
          password:@password
          captcha: 9527
          submit:''
          lt:lt
          execution:execution
          _eventId:'submit'
        }, (headers, body)->
          @body = JSON.stringify(headers)

    @GET = (url, onSuccess, onError) =>
      jsObj.GET({
        url: url
        onSuccess: onSuccess
        onError: onError
        })
    @POST = (url, params, onSuccess, onError) =>
      jsObj.POST({
        url: url
        params: @combine params
        onSuccess: onSuccess
        onError: onError
        })

    @combine = (params) =>
      kv = []
      for key, value of params
        kv.push "#{key}=#{value}"
      kv.join('&')
