<template>
	<view>
		<view class="top">
            <view class="dasanMargin topmid diff">
                <span class="topwz resMin">会议室名称</span>
                <span class="invmidWz proFont">大会议室</span>
            </view>
            <view class="line"></view>
            <view class="list dasanMargin">
                <view class="serindWid">
                    <view class="topmid diff myPadtop">
                        <span class="topwz resMin">会议主题</span>
                        <span class="invmidWz">创业大会</span>
                    </view>
                    <view class="topmid diff myPadtop">
                        <span class="topwz resMin">单位名称</span>
                        <span class="invmidWz">创业大厦306</span>
                    </view>
                    <view class="topmid diff myPadtop">
                        <span class="topwz resMin">预定时间</span>
                        <span class="invmidWz">2020-09-18</span>
                    </view>
                    <view class="topmid diff myPadtop">
                        <span class="topwz resMin">联系人</span>
                        <span class="invmidWz">妮妮</span>
                    </view>
                    <view class="topmid diff myPadtop">
                        <span class="topwz resMin">联系电话</span>
                        <span class="invmidWz">14323454345</span>
                    </view>
                    <view class="topmid diff myPadtop">
                        <span class="topwz resMin">会议室地址</span>
                        <span class="invmidWz">陕西省杨凌示范区创业工场</span>
                    </view>
                    <view class="topmid diff myPadtop">
                        <span class="topwz resMin">备注</span>
                        <span class="invmidWz">备注备注备注备注备注备注备注</span>
                    </view>

                </view>
            </view>

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
/* 费用详情 */
.dasanMargin {
    margin: 0;
    padding: 15px;
}
.resMin {
    min-width: 20%;
}
.list {
    padding: 14px 18px 16px 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    background: #fff;
}
.cost-mg {
    margin: 0 15px;
    padding: 15px 0;
    font-size: 14px;
    color: #1e65e2;
    text-align: center;
    position: relative;
}
.resmoreImg {
    width: 9px;
    height: 16px;
    position: absolute;
    bottom: 15px;
    right: 0;
}

</style>
