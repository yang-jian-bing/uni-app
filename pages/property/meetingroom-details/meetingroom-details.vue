<template>
	<view>
		<view class="top">
            <view class="dasanMargin topmid diff">
                <span class="topwz resMin">会议室名称</span>
                <span class="invmidWz proFont">{{details.parkResourcesName}}</span>
            </view>
            <view class="line"></view>
            <view class="list dasanMargin">
                <view class="serindWid">
                    <view class="topmid diff myPadtop">
                        <span class="topwz resMin">会议主题</span>
                        <span class="invmidWz">{{details.meetingTopic}}</span>
                    </view>
                    <view class="topmid diff myPadtop">
                        <span class="topwz resMin">单位名称</span>
                        <span class="invmidWz">{{details.companyName}}</span>
                    </view>
                    <view class="topmid diff myPadtop">
                        <span class="topwz resMin">预定时间</span>
                        <span class="invmidWz">{{details.reserveTime}}</span>
                    </view>
                    <view class="topmid diff myPadtop">
                        <span class="topwz resMin">联系人</span>
                        <span class="invmidWz">{{details.contactMan}}</span>
                    </view>
                    <view class="topmid diff myPadtop">
                        <span class="topwz resMin">联系电话</span>
                        <span class="invmidWz">{{details.contactPhone}}</span>
                    </view>
                    <view class="topmid diff myPadtop">
                        <span class="topwz resMin">会议室地址</span>
                        <span class="invmidWz">{{details.meetingAddress}}</span>
                    </view>
                    <view class="topmid diff myPadtop">
                        <span class="topwz resMin">备注</span>
                        <span class="invmidWz">{{details.remark	}}</span>
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
				details:{}
			};
		},
        onLoad(options){
            console.log(options)
            this.details=options
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
