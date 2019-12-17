<template>
	<view>
		<view class="top">
            <view class="topImg-t">
                <img class="teachtopImg" src="../../../../static/property/logo.png" alt="" />
            </view>
            <view class="loginBox">
                <span>用户名</span>
                <input type="text" placeholder="请输入用户名或电话号码" />
            </view>
            <view class="loginBox">
                <span>密码</span>
                <input type="text" placeholder="请输入密码" />
            </view>
            <view class="login">
                登录
            </view>
            <p class="loginP">忘记密码?</p>
        </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
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
