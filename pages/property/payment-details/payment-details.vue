<template>
	<view>
		<view class="top">
            <view class="myBorder cashBox">
                <p>杨凌农业云</p>
                <p>45.00<span class="invmidWz">元</span></p>
            </view>
            <view class="line"></view>
            <view class="num actDistance">账单信息</view>
            <label class="propFlex pwyment-pd">
                <p class="invmidWz">费用类型</p>
                <span class="invmidWz">物业费</span>
            </label>

            <label class="propFlex pwyment-pd">
                <p class="invmidWz">收款方式</p>
                <span class="invmidWz">支付宝微信</span>
            </label>
            <label class="propFlex pwyment-pd">
                <p class="invmidWz">费用时间段</p>
                <span class="invmidWz">2020-01-12-2021-02-12</span>
            </label>
            <view class="line"></view>
            <view class="num actDistance">支付信息</view>
            <label class="propFlex pwyment-pd">
                <p class="invmidWz">订单号</p>
                <span class="invmidWz">20202021012</span>
            </label>

            <label class="propFlex pwyment-pd">
                <p class="invmidWz">缴费时间</p>
                <span class="invmidWz">2020-01-12</span>
            </label>

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
/* 收银台 */
.cashBox p {
    text-align: center;
}

.cashBox p:nth-child(2) {
    margin-bottom: 20px;
    font-size: 32px;
    color: #1e65e2;
}
.actDistance {
    padding: 11px 16px 12px;
}
/* 缴费详情 */
.pwyment-pd {
    padding: 5px 15px;
}

.cashBox p:nth-child(1) {
    font-size: 15px;
    color: #898989;
    margin: 20px auto;

}

.cost-mg {
    margin: 0 15px;
    padding: 15px 0;
    font-size: 14px;
    color: #1e65e2;
    text-align: center;
    position: relative;
}

.cost-bg {
    width: 62px;
    height: 29px;
    line-height: 29px;
    text-align: center;
    color: #fff;
    font-size: 14px;
    background: #2b76fb;
    border-radius: 14px;
}

.cost-bg1 {
    width: 62px;
    height: 29px;
    line-height: 29px;
    text-align: center;
    color: #fff;
    font-size: 14px;
    background: #F8B551;
    border-radius: 14px;
}

</style>
