<template>
  <view>
    <view class="top">
      <view class="list dasanMargin">
        <view class="serindWid">
          <view class="topmid diff myPadtop">
            <span class="topwz resMin">设施名称</span>
            <span class="invmidWz">{{details.name}}</span>
          </view>
          <view class="topmid diff myPadtop">
            <span class="topwz resMin">维修日期</span>
            <span class="invmidWz">{{details.repairDate}}</span>
          </view>
          <view class="topmid diff myPadtop">
            <span class="topwz resMin">维修人员</span>
            <span class="invmidWz">{{details.repairPersion}}</span>
          </view>
          <view class="topmid diff myPadtop">
            <span class="topwz resMin">维修费用</span>
            <span class="invmidWz">{{details.repairPrice}}</span>
          </view>
          <view class="topmid diff myPadtop">
            <span class="topwz resMin">维修项目</span>
            <span class="invmidWz">{{details.repairProject}}</span>
          </view>
          <view class="topmid diff myPadtop">
            <span class="topwz resMin">维修工时</span>
            <span class="invmidWz">{{details.repairTime}}</span>
          </view>
          <view class="topmid diff myPadtop">
            <span class="topwz resMin">故障情况</span>
            <span class="invmidWz">{{details.failureCondition}}</span>
          </view>
          <view class="topmid diff myPadtop">
            <span class="topwz resMin">处理情况</span>
            <span class="invmidWz">{{details.handlingSituation}}</span>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import {
  timerZero
} from '@/common/util.js';
export default {
  data() {
    return {
      details: []
    };
  },
  onLoad(option) {
    this.$minApi.RepairDetail({
      id: option.id,
    }).then(res => {
      this.details = res.body.data
      this.details.repairDate = timerZero(this.details.repairDate)
    }).catch(err => {
      console.log(err)
    })
  },
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
