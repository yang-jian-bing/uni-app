import common from "./common";
import yangjianbing from "./yangjianbing";
import zhanghaiqi from "./zhanghaiqi";
import mengguodong from "./mengguodong";
import zhenghao from "./zhenghao";
import lihao from "./lihao";
import guokai from "./guokai.js"

let object = Object.assign(
    {},
    common,
    yangjianbing,
    zhanghaiqi,
    mengguodong,
    zhenghao,
    lihao,
    guokai
);
export default {
    // 这里统一管理api请求
    apis: object
};
