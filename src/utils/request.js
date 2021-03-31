import axios from "axios";

const ins = axios.create({
  baseURL: "/api",
  // 超时时间
  timeout: 20000,
});
// 请求头信息是为post请求设置
ins.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded;charset=UTF-8";

// 请求拦截器
ins.interceptors.request.use(
  (config) => {
    // 每次发送请求之前判断是否存在token
    // 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况，此处token一般是用户完成登录后储存到localstorage里的
    // todo: 我这里的登录注册的信息是放在   localStorage里面的,所以要了解下其他的登录注册是怎么做的
    // todo: 这里要写获取token的代码
    // token && (config.headers.Authorization = token);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
ins.interceptors.response.use(
  (response) => {
    // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
    // 否则的话抛出错误
    if (response.status === 200) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
  (error) => {
    // 我们可以在这里对异常状态作统一处理
    if (error.response.status) {
      // 处理请求失败的情况
      // 对不同返回码对相应处理
      return Promise.reject(error.response);
    }
  }
);

// 封装方法
// todo: 这里还涉及到一个面试点，http请求方式，虽然说基本上了解的差不多了，但是还是要多看看
function request(options) {
  const { url, data, method = "get" } = options;
  let requestFn;
  switch (method) {
    case "get":
      // requestFn = ins.get(url, { params: data });
      requestFn = new Promise((resolve, reject) => {
        ins
          .get(url, { params: data })
          .then((res) => resolve(res))
          .catch((err) => reject(err));
      });
      return;
    case "post":
      requestFn = new Promise((resolve, reject) => {
        ins
          .post(url, data)
          .then((res) => resolve(res))
          .catch((err) => reject(err));
      });
      return;
    default:
      break;
  }
  return requestFn;
}
export default request;
