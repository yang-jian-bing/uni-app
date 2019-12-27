import minRequest from "./minRequest";
export default {
    // 这里统一管理api请求
    officePlanList(data) {
        return minRequest.get(
            "/api/propertyManage/parkInfo/queryParkTreeInfo",
            data
        );
    },
    getOfficeList(data) {
        return minRequest.get(
            "/api/propertyManage/planSummary/queryList",
            data
        );
    },
    getOfficeDetails(data) {
        return minRequest.get(
            "/api/propertyManage/planSummary/queryDetail",
            data
        );
    },
    getMeetingList(data) {
        return minRequest.get(
            "/api/propertyManage/planSummary/queryMeetingList",
            data
        );
    },
    getMeetingDetails(data) {
        return minRequest.get(
            "/api/propertyManage/meetingReserve/queryDetail",
            data
        );
    },
    queryReserveManInfo(data) {
        return minRequest.get(
            "/api/propertyManage/planSummary/queryReserveManInfo",
            data
        );
    }
};
