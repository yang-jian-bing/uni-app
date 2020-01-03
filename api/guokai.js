import minRequest from "./minRequest";


export default {
    login(data){
        return minRequest.post(`/horizon/horizon/workflow/rest/v0/moible/user/login.wf`,data)
    },

    //缴费记录
    getFinance(data){
        return minRequest.get("/horizon/horizon/workflow/rest/v0/mobile/get.wf",data)
    },
   // 列表
    getParty(data){
         return minRequest.get("/horizon/horizon/workflow/rest/v0/mobile/get.wf",data)
    },
    //加班
    getExtrawork(){
        return minRequest.get("/horizon/horizon/yloa/api/v1/overtimeapply/get.wf")
    },

    //请假
    getLeave(){
         return minRequest.get("/horizon/horizon/yloa/api/v1/askforleave/get.wf")
    }

}
