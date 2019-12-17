<template>
	<view>
		<view class="top">
            <view class="search mui-input-row">
                <img src="../../../../static/property/search.png" />
                <input type="text" class="mui-input-clear" placeholder="搜索">
            </view>

            <!-- 待使用 -->
            <view class="joiList">
                <view class="serBox serindWid">
                    <view class="propFlex serDrop">
                        <p class="comWaiting">待使用</p>
                        <span class="invmidWz">预计时长：4h&nbsp;&nbsp;预计收费：￥50.00</span>
                    </view>
                    <span class="actWz proFont">代办企业证照、股权变更</span>
                    <view class='weWzpad'>
                        <p class='font14'>会议主题：民主生活会</p>
                        <p class='font14'>预定时间：2019-10-12<span class='invmidWz'>&nbsp;~&nbsp;</span>2019-12-12</p>
                        <p class='font14'>联系人信息：王佩 15212341234</p>
                    </view>
                    <view class="label projectBox flex-end">
                        <text href="">取消会议</text>
                    </view>
                </view>
            </view>
            <view class="line"></view>
            <view class="joiList">
                <view class="serBox serindWid">
                    <view class="propFlex serDrop">
                        <p class="comWaiting">待使用</p>
                        <span class="invmidWz">预计时长：4h&nbsp;&nbsp;预计收费：￥50.00</span>
                    </view>
                    <span class="actWz proFont">代办企业证照、股权变更</span>
                    <view class='weWzpad'>
                        <p class='font14'>会议主题：民主生活会</p>
                        <p class='font14'>预定时间：2019-10-12<span class='invmidWz'>&nbsp;~&nbsp;</span>2019-12-12</p>
                        <p class='font14'>联系人信息：王佩 15212341234</p>
                    </view>
                    <view class="label projectBox flex-end">
                        <text href="">使用结束</text>
                    </view>
                </view>
            </view>
            <view class="line"></view>
            <view class="joiList">
                <view class="serBox serindWid">
                    <view class="propFlex serDrop">
                        <p class="comWaiting">已使用</p>
                        <span class="invmidWz">预计时长：4h&nbsp;&nbsp;预计收费：￥50.00</span>
                    </view>
                    <span class="actWz proFont">代办企业证照、股权变更</span>
                    <view class='weWzpad'>
                        <p class='font14'>会议主题：民主生活会</p>
                        <p class='font14'>预定时间：2019-10-12<span class='invmidWz'>&nbsp;~&nbsp;</span>2019-12-12</p>
                        <p class='font14'>联系人信息：王佩 15212341234</p>
                    </view>
                    <view class="label projectBox flex-end">
                        <text href="">关闭缴费单</text>
                    </view>
                </view>
            </view>
            <view class="line"></view>

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


.toptit {
    font-size: 15px;
    margin: 0px 15px 10px 15px;
    padding-top: 14px;
    color: #333333;
}

.topmid {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px 6px;
}

.topwz {
    font-size: 13px;
    color: #898989;
}

.diff {
    padding: 0;
}
.infor {
    margin: 0 15px 0px 20px;
    border-bottom: 1px solid #eeeeee;
}
.actMid {
    display: flex;
    padding: 15px 0;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin: 0px 15px;
    border-bottom: 1px solid #eeeeee;
}
.myBorder {
    margin: 0;
    padding: 15px;
}
.invmidWz {
    font-size: 15px;
    color: #1b1b1b;
}

.invmidWz1 {
    font-size: 15px;
    color: #555555;
}
.seleRight {
    width: 7px;
    height: 13px;
    margin-left: 10px;
}
.joiList {
    padding: 17px 15px 9px;
    display: flex;
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
