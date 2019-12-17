<template>
	<view>
		<view class="top">
            <view class="dasanMargin topmid diff">
                <span class="topwz resMin">办公室名称</span>
                <span class="invmidWz proFont">大办公室</span>
            </view>
            <view class="line"></view>
            <view class="list dasanMargin">
                <view class="serindWid">
					 <view class="topmid diff myPadtop">
					    <span class="topwz resMin">租户名称</span>
					    <span class="invmidWz">神舟数码</span>
					</view>
                    <view class="topmid diff myPadtop">
                        <span class="topwz resMin">办公室面积</span>
                        <span class="invmidWz">30^2m</span>
                    </view>
                   
                    <view class="topmid diff myPadtop">
                        <span class="topwz resMin">配套设施</span>
                        <span class="invmidWz">座椅，座椅座椅座椅座椅座椅座椅座椅座椅座椅座椅座椅座椅座椅座椅座椅</span>
                    </view>
					<span class="topwz resMin myPadtop">办公室图片</span>
					<view class='office-box'>
						<image class='picter-size' src="../../../static/property/logo.png" alt="" />
						<image class='picter-size' src="../../../static/property/logo.png" alt="" />
						<image class='picter-size' src="../../../static/property/logo.png" alt="" />
						<image class='picter-size' src="../../../static/property/logo.png" alt="" />
						<image class='picter-size' src="../../../static/property/logo.png" alt="" />
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
.office-box{
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin:5px 10px;
}
.picter-size{
	width:31%;
	height: 102px;
	margin-left:6px;
	margin-bottom:6px;
}
</style>
