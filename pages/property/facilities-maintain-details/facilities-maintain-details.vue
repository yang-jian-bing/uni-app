<template>
	<view>
		<view class="top">
            <view class="list dasanMargin">
                <view class="serindWid">
                    <view class="topmid diff myPadtop">
                        <span class="topwz resMin">设施名称</span>
                        <span class="invmidWz">发电机</span>
                    </view>
                    <view class="topmid diff myPadtop">
                        <span class="topwz resMin">维修日期</span>
                        <span class="invmidWz">2019-01-12</span>
                    </view>
                    <view class="topmid diff myPadtop">
                        <span class="topwz resMin">维修人员</span>
                        <span class="invmidWz">小李</span>
                    </view>
                    <view class="topmid diff myPadtop">
                        <span class="topwz resMin">维修费用</span>
                        <span class="invmidWz">200.00</span>
                    </view>
                    <view class="topmid diff myPadtop">
                        <span class="topwz resMin">维修项目</span>
                        <span class="invmidWz">发电机修理</span>
                    </view>
                    <view class="topmid diff myPadtop">
                        <span class="topwz resMin">维修工时</span>
                        <span class="invmidWz">8小时</span>
                    </view>
                    <view class="topmid diff myPadtop">
                        <span class="topwz resMin">故障情况</span>
                        <span class="invmidWz">发电机烧坏</span>
                    </view>
					<view class="topmid diff myPadtop">
					    <span class="topwz resMin">处理情况</span>
					    <span class="invmidWz">发电机更换</span>
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
