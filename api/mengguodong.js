import minRequest from "./minRequest";
export default {
    // 这里统一管理api请求
    // 设被维修
    RepairList(data) {
        return minRequest.get(
            "/api/propertyManage/facilitiesMaintenance/queryList",
            data
        );
    },
    RepairDelete(data) {
        return minRequest.post(
            "/api/propertyManage/facilitiesMaintenance/delete",
            data
        );
    }
};
