import yangjianbing from "./yangjianbing";
import zhanghaiqi from "./zhanghaiqi";
import mengguodong from "./mengguodong";
import zhenghao from "./zhenghao";
import lihao from "./lihao";

let object = Object.assign(
    {},
    yangjianbing,
    zhanghaiqi,
    mengguodong,
    zhenghao,
    lihao
);
export default {
    // 这里统一管理api请求
    apis: object
};
