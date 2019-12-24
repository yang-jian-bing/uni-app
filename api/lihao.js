import minRequest from "./minRequest";
export default {
    // 这里统一管理api请求
    userRecord(data) {                      //客户档案
        return minRequest.get(
            "/api/propertyManage/customerFiles/queryList",
            data
        );
    },
    contractList(data) {                      //合同列表
        return minRequest.get(
            "/api/propertyManage/contractInfo/queryList",
            data
        );
    },
    dayPay(data) {                      //日常缴费
        return minRequest.get(
            "/api/propertyManage/feeBill/queryList",
            data
        );
    },
    costDetails(data) {                      //费用详情
        return minRequest.get(
            "/api/propertyManage/feeBill/queryDetail",
            data
        );
    },
    payRecord(data) {                      //缴费记录
        return minRequest.get(
            "/api/propertyManage/payRecord/queryList",
            data
        );
    },
    meetingList(data) {                      //会议室预定列表
        return minRequest.get(
            "/api/propertyManage/meetingReserve/queryList",
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
