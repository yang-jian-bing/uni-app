import minRequest from "./minRequest";
export default {
  // 这里统一管理api请求 
  // 获取预订信息 /api/propertyManage/meetingReserve/queryReserveInfo
  ReserveInfo(data) {
    return minRequest.get(
      "/api/propertyManage/meetingReserve/queryReserveInfo",
      data
    );
  },
  // 获取树状图 /api/propertyManage/meetingReserve/queryReserveTreeInfo
  TreeInfo(data) {
    return minRequest.get(
      "/api/propertyManage/meetingReserve/queryReserveTreeInfo",
      data
    );
  },
  // 提交会议室预定 /api/propertyManage/meetingReserve/save
  MeetingSave(data) {
    return minRequest.post(
      "/api/propertyManage/meetingReserve/save",
      data
    );
  },
  // 保修种类 /api/propertyManage/busData/queryList
  busData(data) {
    return minRequest.get(
      "/api/propertyManage/busData/queryList",
      data
    );
  },
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
  facilityDetail(data) {
    return minRequest.get(
      "/api/propertyManage/facilitiesArchives/queryDetail",
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
  },
  InfraDetail(data) {
    return minRequest.get(
      "/api/propertyManage/facilitiesArchives/queryDetail",
      data
    );
  },

  // 设备保养
  KeepList(data) {
    return minRequest.get(
      "/api/propertyManage/facilitiesCare/queryList",
      data
    );
  },
  KeepDelete(data) {
    return minRequest.post(
      "/api/propertyManage/facilitiesCare/delete",
      data
    );
  },
  KeepSave(data) {
    return minRequest.post(
      "/api/propertyManage/facilitiesCare/save",
      data
    );
  },
  KeepDetail(data) {
    return minRequest.get(
      "/api/propertyManage/facilitiesCare/queryDetail",
      data
    );
  },
  //报事报修
  ReportingDetail(data) {
    return minRequest.get(
      "/api/propertyManage/reportingForRepairs/queryDetail",
      data
    );
  },
  ReportingSave(data) {
    return minRequest.post(
      "/api/propertyManage/reportingForRepairs/save",
      data
    );
  },
  ReportingList(data) {
    return minRequest.get(
      "/api/propertyManage/reportingForRepairs/queryList",
      data
    );
  },
};