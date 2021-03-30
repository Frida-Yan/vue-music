// 首页api请求
import request from "../utils/request";

// 获取banner
export const getBannerList = () => {
  return request({
    url: "/banner",
  });
};
