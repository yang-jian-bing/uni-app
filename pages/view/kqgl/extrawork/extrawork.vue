<template>
	<view>
		<view class="content">
            <view class="add"  @click="work">
                +
            </view>
			<view class="joiList" v-for="item in datalist" :key="item.id"  @click="goto(item.workid)" >



			        <view class='weWzpad' >
			            <p class='font14'>用户名：{{item.username}}</p>
			            <p class='font14'>申请开始时间：{{item.sdate}}</p>
			            <p class='font14'>请假结束时间：{{item.edate}}</p>
						 <p class='font14'>请假缘由: {{item.reason}}</p>

			        </view>


			</view>
		</view>
		<!-- <uni-load-more :status="state" :content-text="contentText" color="#007aff" @clickLoadMore="addExtra"></uni-load-more> -->
	</view>
</template>

<script>

    import {getExtrawork} from "../../../../api/guokai.js"

	export default {

		data() {
			return {
				datalist:[],


			}
		},
		methods: {
           goto(id){
                 uni.navigateTo({
                     url:"../extraworkdetail/extraworkdetail?workid="+id
                 })
           },
           work(){
               uni.navigateTo({
                   url:"../addExtraWork/addExtraWork"
               })
           },
           init(){
              this.$minApi.getExtrawork().then(res=>{
                             console.log(res)
                                let result=JSON.parse(res.data)
                                console.log(result)
                                for (let  i in result) {

                                              this.datalist.push(result[i]);

                                                	 		}



                           })
           }
		},

		onLoad() {

             this.init()


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
.add{
     width: 80upx;height: 80upx;background:#007AFF;position: fixed;bottom:50upx;right:30upx;
     border: 1px solid #fff;border-radius: 50%;font-size:35px;text-align: center;line-height:70upx;color: #fff;
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
