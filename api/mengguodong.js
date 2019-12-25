import minRequest from "./minRequest";
export default {
  // 这里统一管理api请求
  // 园区列表 /api/propertyManage/parkInfo/queryList
  ParkInfo(data) {
    return minRequest.get(
      "/api/propertyManage/parkInfo/queryList",
      data
    );
  },
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
  },
  RepairSave(data) {
    return minRequest.post(
      "/api/propertyManage/facilitiesMaintenance/save",
      data
    );
  },
  RepairDetail(data) {
    return minRequest.get(
      "/api/propertyManage/facilitiesMaintenance/queryDetail",
      data
    );
  },
  //设施档案
  InfraList(data) {
    return minRequest.get(
      "/api/propertyManage/facilitiesArchives/queryList",
      data
    );
  },
  InfraDelete(data) {
    return minRequest.post(
      "/api/propertyManage/facilitiesArchives/delete",
      data
    );
  },
  InfraSave(data) {
    return minRequest.post(
      "/api/propertyManage/facilitiesArchives/save",
      data
    );
  }
};
