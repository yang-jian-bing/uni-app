<template>
  <view>
    <view class="top">
      <view class="list dasanMargin">
        <view class="serindWid">
          <view class="topmid diff myPadtop">
            <span class="topwz resMin">设施名称</span>
            <span class="topwz">{{details.name}}</span>
          </view>
          <view class="topmid diff myPadtop">
            <span class="topwz resMin">维修日期</span>
            <span class="topwz">{{details.careDate}}</span>
          </view>
          <view class="topmid diff myPadtop">
            <span class="topwz resMin">维修人员</span>
            <span class="topwz">{{details.carePersion}}</span>
          </view>
          <view class="topmid diff myPadtop">
            <span class="topwz resMin">维修费用</span>
            <span class="topwz">{{details.carePrice}}</span>
          </view>
          <view class="topmid diff myPadtop">
            <span class="topwz resMin">维修项目</span>
            <span class="topwz">{{details.careProject}}</span>
          </view>
          <view class="topmid diff myPadtop">
            <span class="topwz resMin">维修工时 </span>
            <span class="topwz">{{details.careTime}}</span>
          </view>
          <view class="topmid diff myPadtop">
            <span class="topwz resMin">维修情况</span>
            <span class="topwz">{{details.careDetail}}</span>
          </view>
        </view>
      </view>
      <view class="actDistance">
        <p
          class="num"
        >{{details.repairDetail}}</p>
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
  onLoad(options) {
    this.$minApi.KeepDetail({
      id: options.id,
    }).then(res => {
      this.details = res.body.data
      this.details.careDate = timerZero( this.details.careDate)
    }).catch(err => {
      console.log(err)
    })
  },
}
</script>

<style>
.list {
  padding: 14px 18px 16px 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  background: #fff;
  border-bottom: 2px solid #eeeeee;
}
.dasanMargin {
  margin: 0;
  padding: 15px;
}

.listTit {
  font-size: 16px;
  color: #333333;
  line-height: 22px;
}
.actDistance {
  padding: 11px 16px 12px;
}
</style>
