import MinRequest from "../common/MinRequest";

const minRequest = new MinRequest();

// 请求拦截器
minRequest.interceptors.request(request => {
  request.data.userAccId = 1
  request.data.channel = 4
  return request;
});

// 响应拦截器
minRequest.interceptors.response(response => {
  return response.data;
});

// 设置默认配置
minRequest.setConfig(config => {
  config.baseURL = "http://61.150.65.204:9090";
  return config;
});

export default minRequest;
