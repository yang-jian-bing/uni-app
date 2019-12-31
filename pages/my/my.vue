<template>
	<view>
		<view class="content">
			<view class="joiList" >



			        <view class='weWzpad' >
			            <p class='font14'>用户名：{{username}}</p>
			            <p class='font14'>登录账号：{{loginname}}</p>
                         <p class='font14'>部门id：{{deptid}}</p>
			        </view>


			</view>
		</view>

	</view>
</template>

<script>
   import {getHandle} from "../../common/api.js"

	export default {

		data() {
			return {
                  deptid:"",
                   loginname:"",
                   username:""
			}
		},
		methods: {

		},

		onLoad() {
            let that=this
           uni.getStorage({
               key: 'userdata',
               success: function (res) {

                   that.deptid=res.data.deptid;
                   that.loginname=res.data.loginname;
                   that.username=res.data.username

               }
           });

	   },
	}
</script>

<style  scoped>
.joiList {
     padding:0 17px 15px 9px;
    display: flex;
	/* border: 1px solid red; */
	background: #fff;
    border-top-width:0px;
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
  /*  padding-top: 18px; */
}
.comWaiting {
    color: #2B76FB;
    font-size: 16px;
}



.joiPad {
   /* padding: 15px 0; */
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
   /* padding-top: 12px; */
}
.font14 {
    font-size: 14px;
    color: #898989;
}
.myPadtop {
    padding-top: 5px;
}
</style>
