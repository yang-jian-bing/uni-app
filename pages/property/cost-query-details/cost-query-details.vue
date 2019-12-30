<template>
	<view>
		<view class="top">
            <view class="dasanMargin topmid diff">
                <span class="topwz resMin">租户</span>
                <span class="invmidWz proFont">{{details.lesseeName}}</span>
            </view>
            <view class="line"></view>
            <view class="list dasanMargin">
                <view class="serindWid">
                    <view class="topmid diff myPadtop">
                        <span class="topwz resMin">资源</span>
                        <span class="invmidWz">{{details.resourceName}}</span>
                    </view>
                    <view class="topmid diff myPadtop">
                        <span class="topwz resMin">费用类型</span>
                        <span class="invmidWz" v-if="details.feeType">{{details.feeType.name}}</span>
                    </view>
                    <view class="topmid diff myPadtop">
                        <span class="topwz resMin">应收金额</span>
                        <span class="invmidWz">￥{{details.originalMoney}}</span>
                    </view>
                    <view class="topmid diff myPadtop">
                        <span class="topwz resMin">费用开始时间</span>
                        <span class="invmidWz">{{details.startTime}}</span>
                    </view>
                    <view class="topmid diff myPadtop">
                        <span class="topwz resMin">费用结束时间</span>
                        <span class="invmidWz">{{details.endTime}}</span>
                    </view>
                    <view class="topmid diff myPadtop">
                        <span class="topwz resMin">备注</span>
                        <span class="invmidWz">{{details.remark}}</span>
                    </view>
                </view>
            </view>
            <view class="line"></view>
            <view class='cost-mg'>
                去缴费
                <image class='resmoreImg' src="../../../static/property/moreright.png" alt="">
            </view>
        </view>
	</view>
</template>

<script>
    import {
        costDetails
    } from '@/api/lihao.js'
    import {
        timerZero
    } from '@/common/util.js';
	export default {
		data() {
			return {
                details:[],
                ids:""
			};
		},
        onLoad(options){
          this.ids=options.id
            this.init()
        },
        methods:{
           init() {
               this.$minApi.costDetails({
                   id: this.ids,
               }).then(res => {

                   this.details=res.body.data
                   this.details.startTime = timerZero(this.details.startTime)
                   this.details.endTime = timerZero(this.details.endTime)

                   console.log(this.details)

               }).catch(err => {
                   console.log(err)
               })
           },
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
