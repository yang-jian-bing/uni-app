import minRequest from "./minRequest";
export default {
    // 这里统一管理api请求
    uniapp(data) {
        return minRequest.get(
            "/api/propertyManage/customerFiles/queryList",
            data
        );
    },
    post1(data) {
        return minRequest.post(
            "/api/propertyManage/facilitiesMaintenance/delete",
            data
        );
    }
};
