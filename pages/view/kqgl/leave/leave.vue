<template>
	<view>
		<view class="content">
			<view class="joiList" v-for="item in datalist" :key="item.id"  @click="goto(item.workid)" >



			        <view class='weWzpad' >
			            <p class='font14'>用户名：{{item.username}}</p>
			            <p class='font14'>申请开始时间：{{item.stime}}</p>
			            <p class='font14'>请假结束时间：{{item.etime}}</p>
						 <p class='font14'>请假缘由: {{item.created}}</p>

			        </view>


			</view>
		</view>
		<!-- <uni-load-more :status="state" :content-text="contentText" color="#007aff" @clickLoadMore="addExtra"></uni-load-more> -->
	</view>
</template>

<script>

import { getLeave } from "../../../../api/guokai.js"

	export default {

		data() {
			return {
				datalist:[],


			}
		},
		methods: {
           goto(id){
                 uni.navigateTo({
                     url:"../leavedetail/leavedetail?workid="+id
                 })
           },
           init(){

                 uni.request({
                   url:"http://www.ylibi.com/horizon/horizon/yloa/api/v1/askforleave/get.wf?accessToken=TUfKbStH79iCdo3J%2f%2bQXz%2f9NrA3ikDYoprzftK8uxVwMFg3Vyw471rSTkaDQ%2bilM",


                    success(res) {
                        console.log(res)
                     }
                 })

                // this.$minApi.getLeave().then(res=>{
                //   console.log(res)
                //     for (let  i in res.data) {

                //                    				  this.datalist.push(res.data[i]);
                //                       	 		}



                // })
           }
		},


		onLoad() {

      // uni.request({
      //   url:"http://www.ylibi.com/horizon/horizon/yloa/api/v1/askforleave/get.wf?accessToken=TUfKbStH79iCdo3J%2f%2bQXz%2f9NrA3ikDYoprzftK8uxVwMFg3Vyw471rSTkaDQ%2bilM",


      //    success(res) {
      //        console.log(res)
      //     }
      // })

   this.$minApi.getLeave().then(res=>{
                  console.log(res)
                     let result=JSON.parse(res.data)
                     console.log(result)
                     for (let  i in result) {

                                   this.datalist.push(result[i]);

                                     	 		}



                })

		}
	}
</script>

<style>
.joiList {
    padding: 17px 15px 9px;
    display: flex;
	/* border: 1px solid red; */
	background: #fff;
	border-bottom: 1px solid #eee;



}

.serBox {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.serindWid {
    width: 100%;
}
.propFlex {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.propFlex1 {
    display: flex;
    justify-content: space-between;
}
.num {
    font-size: 15px;
    color: #898989;
}
.invdiff {
    padding-top: 18px;
}
.comWaiting {
    color: #2B76FB;
    font-size: 16px;
}

.joiList {
    padding: 17px 15px 9px;
    display: flex;
}

.joiPad {
    padding: 15px 0;
    border-top: 1px solid #eeeeee;
    flex: 1;
}

.comFin {
    color: #5edba8;
    font-size: 15px;
}

.comNo {
    color: #ea595d;
    font-size: 15px;
}
.serDrop {
    padding-bottom: 10px;
}

.serDrop1 {
    padding-bottom: 5px;
}
.myserveWz {
    font-size: 18px;
    color: #898989;
}

.actWz {
    font-size: 16px;
    color: #333333;
}
.proFont {
    font-weight: 600;
}
.projectBox {
    margin-top: 5px;
	display: flex;
	justify-content: flex-end;
}
.weWzpad {
    padding-top: 12px;
}
.font14 {
    font-size: 14px;
    color: #898989;
}
.myPadtop {
    padding-top: 5px;
}
</style>
