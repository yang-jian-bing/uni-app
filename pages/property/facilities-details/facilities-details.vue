<template>
	<view>
		<view class="top">
            <view class="list dasanMargin">
                <view class="serindWid">
					<div class="myTit1">基本信息</div>
                    <view class="topmid diff myPadtop">
                        <span class="topwz resMin">所属园区</span>
                        <span class="invmidWz">创业大厦</span>
                    </view>
                    <view class="topmid diff myPadtop">
                        <span class="topwz resMin">所在地点</span>
                        <span class="invmidWz">A座101</span>
                    </view>
					<div class="myTit1">使用情况</div>
					<view class="topmid diff myPadtop">
					    <span class="topwz resMin">所属园区</span>
					    <span class="invmidWz">创业大厦</span>
					</view>
					<view class="topmid diff myPadtop">
					    <span class="topwz resMin">所在地点</span>
					    <span class="invmidWz">A座101</span>
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
.myTit1 {
    font-size: 14px;
    color: #1b1b1b;
    font-weight: 600;
    padding: 5px 0;
    border-bottom: 1px solid #eee;
}
</style>
