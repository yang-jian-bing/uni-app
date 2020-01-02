<template>
	<view>

		 <view class="top">
		     <view class="topImg-t">
		         <image class="teachtopImg" src="../../static/logo.jpg" alt="" />
		     </view>
		     <view class="loginBox">
		         <span>用户名</span>
		         <input type="text" placeholder="请输入用户名或电话号码"  v-model="username"/>
		     </view>
		     <view class="loginBox">
		         <span>密码</span>
		         <input type="password" placeholder="请输入密码" v-model="password"/>
		     </view>
		     <view class="login"  @click="login">
		         登录
		     </view>
		     <p class="loginP">忘记密码?</p>
		 </view>
	</view>
</template>

<script>
    import {postHandle} from "../../common/api.js"

	export default {
		data() {
			return {
				username:"",
				password:''
			}
		},
		methods: {
			 login(){

				 let that=this;

				postHandle(`workflow/rest/v0/moible/user/login.wf?username=${this.username}&password=${this.password}`

                ).then((res)=>{
				      console.log(res)
                      if(res[1].statusCode==500){
                          uni.showToast({
                            	    title: "登录失败",
                           	         duration: 2000,
                                     icon:"none"
                           	})

                      }else if(res[1].statusCode==200){
                          uni.showToast({
                            	    title: "登录成功",
                           	         duration: 2000,

                           	})
                             var data= JSON.parse(res[1].data.data)
                             uni.setStorage({
                                 key: 'userdata',
                                 data: data,
                                 success: function () {
                                     console.log('success');
                                 }
                             });
                           uni.switchTab({
                           	url:"/pages/index/index"
                           })
                      }




					// if (res.data.indexOf(";") > -1){

					// 	var message = res.data.split(";");
					//  	uni.showToast({
					//  	    title: message,
					// 	    duration: 2000
					// 	})
					// 	uni.hideToast()
					// }else{
					// 	uni.showToast({
					// 	    title: '登录成功',
					// 	    duration: 2000
					// 	})
					// 	uni.switchTab({
					// 		url:"/pages/index/index"
					// 	})
					// }



				})



			 }
		}
	}
</script>

<style>
.top {
    width: 100%;
    background: #fff;
}
.topImg-t {
    display: flex;
    justify-content: center;
    padding: 72px 0 13px;
    background-size: cover;
}
.teachtopImg {
    width: 65px;
    height: 65px;
    border-radius: 50%;
}
.loginBox {
    height: 70px;
    margin: 0 15px;
    border-bottom: 1px solid #eee;
    display: flex;
    align-items: center;
}

.loginBox input {
    border: none;
    margin-bottom: 0;
    background: #fff;
}

.loginBox input::-webkit-input-placeholder {
    color: rgba(137, 137, 137, 1);
    font-size: 15px;
}

.loginBox span {
    margin-right: 15px;
    width: 25%;
    font-size: 16px;
}

.login {
    text-align: center;
    height: 50px;
    line-height: 50px;
    background: #1e65e2;
    color: #fff;
    font-size: 17px;
    width: 95%;
    margin: 80px auto 0;
    border-radius: 20px;
}

.loginP {
    text-align: right;
    margin-right: 15px;
    font-size: 15px;
    color: #898989;
    padding: 10px;
}
</style>
