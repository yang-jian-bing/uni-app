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
  stopPay(data) {                      //日常缴费的终止缴费
    return minRequest.get(
      "/api/propertyManage/feeBill/finish",
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
  stopReserve(data) {                    //弹出框取消预定
    return minRequest.post(
      "/api/propertyManage/meetingReserve/cancelReserve",
      data
    );
  },
  stopEnds(data) {                    //弹出框使用结束
    return minRequest.post(
      "/api/propertyManage/meetingReserve/useFinish",
      data
    );
  }
};
