import MinRequest from "../common/MinRequest";

const minRequest = new MinRequest();

// 请求拦截器
minRequest.interceptors.request(request => {

  console.log(request)
      if(request.method=="POST"){
          // uni.getStorage({
          //     key: "userdata",
          //     success: function(res) {
          //         if (res.data) {
          //             request.data.userAccId = res.data.loginname;
          //         }
          //     }
          // });
          // request.data.channel = 4;
          return request;


      }else  if(request.method=="GET"){

          uni.getStorage({
                   key:"userdata",
                   success:function(res){
                       console.log(res)
                       if(res.data){
                           request.data.accessToken=res.data.accessToken;
                           request.data.userAccId = res.data.loginname;
                       }
                }
              })

            request.data.channel = 4;

            return request;

      }




});

// 响应拦截器
minRequest.interceptors.response(response => {
    return response.data;
});

// 设置默认配置
minRequest.setConfig(config => {
    config.baseURL = "http://www.ylibi.com";
    return config;
});

export default minRequest;
