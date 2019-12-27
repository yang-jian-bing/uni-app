<template>
  <view>
    <view class="top">
      <view class="list dasanMargin">
        <view class="serindWid">
          <view class="myTit1">基本信息</view>
          <view class="topmid diff myPadtop">
            <span class="topwz resMin">所属园区</span>
            <span class="invmidWz">{{details.parkName}}</span>
          </view>
          <view class="topmid diff myPadtop">
            <span class="topwz resMin">所在地点</span>
            <span class="invmidWz">{{details.address}}</span>
          </view>
          <view class="topmid diff myPadtop">
            <span class="topwz resMin">设施名称</span>
            <span class="invmidWz">{{details.name}}</span>
          </view>
          <view class="topmid diff myPadtop">
            <span class="topwz resMin">设施类型</span>
            <span class="invmidWz">{{details.type}}</span>
          </view>
          <view class="topmid diff myPadtop">
            <span class="topwz resMin">设施编码</span>
            <span class="invmidWz">{{details.code}}</span>
          </view>
          <view class="topmid diff myPadtop">
            <span class="topwz resMin">设施规格</span>
            <span class="invmidWz">{{details.specifications}}</span>
          </view>
          <view class="topmid diff myPadtop">
            <span class="topwz resMin">设施状态</span>
            <span class="invmidWz">{{details.facilitiesStatusName}}</span>
          </view>
          <view class="myTit1">使用情况</view>
          <view class="topmid diff myPadtop">
            <span class="topwz resMin">安装日期</span>
            <span class="invmidWz">{{details.setDate}}</span>
          </view>
          <view class="topmid diff myPadtop">
            <span class="topwz resMin">报废日期</span>
            <span class="invmidWz">{{details.endDate}}</span>
          </view>
          <view class="topmid diff myPadtop">
            <span class="topwz resMin">使用年限</span>
            <span class="invmidWz">{{details.years}}</span>
          </view>
          <view class="topmid diff myPadtop">
            <span class="topwz resMin">已用时长</span>
            <span class="invmidWz">{{details.useTime}}</span>
          </view>
          <view class="topmid diff myPadtop">
            <span class="topwz resMin">维修次数</span>
            <span class="invmidWz">{{details.repairNum}}</span>
          </view>
          <view class="topmid diff myPadtop">
            <span class="topwz resMin">保养次数</span>
            <span class="invmidWz">{{details.careNum}}</span>
          </view>
          <view class="myTit1">维保单位</view>
          <view class="topmid diff myPadtop">
            <span class="topwz resMin">维保单位</span>
            <span class="invmidWz">{{details.company}}</span>
          </view>
          <view class="topmid diff myPadtop">
            <span class="topwz resMin">维保单位电话</span>
            <span class="invmidWz">{{details.companyPhone }}</span>
          </view>
          <view class="topmid diff myPadtop">
            <span class="topwz resMin">维保单位地址</span>
            <span class="invmidWz">{{details.companyAddress}}</span>
          </view>
          <view class="topmid diff myPadtop">
            <span class="topwz resMin">设施维保人员</span>
            <span class="invmidWz">{{details.companyPersion}}</span>
          </view>
          <view class="topmid diff myPadtop">
            <span class="topwz resMin">生产厂家</span>
            <span class="invmidWz">{{details.manufacturer}}</span>
          </view>

          <view class="topmid diff myPadtop">
            <span class="topwz resMin">厂家地址</span>
            <span class="invmidWz">{{details.factoryAddress}}</span>
          </view>
          <view class="topmid diff myPadtop">
            <span class="topwz resMin">备注</span>
            <span class="invmidWz">{{details.remark}}</span>
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
    this.$minApi.facilityDetail({
      id: option.id,
    }).then(res => {
      this.details = res.body.data
      this.details.setDate = timerZero(this.details.setDate)
      this.details.endDate = timerZero(this.details.endDate)
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
.myTit1 {
  font-size: 14px;
  color: #1b1b1b;
  font-weight: 600;
  padding: 5px 0;
  border-bottom: 1px solid #eee;
}
</style>
