<template>
  <view>
    <view class="top">
      <view class="list dasanMargin">
        <view class="serindWid">
          <view>
            <span class="listTit proFont">{{details.parkName}}</span>
          </view>
          <view class="topmid diff myPadtop">
            <span class="topwz resMin">报修分类</span>
            <span class="topwz">{{details.repairTypeName}}</span>
          </view>
          <view class="topmid diff myPadtop">
            <span class="topwz resMin">报修地点</span>
            <span class="topwz">{{details.repairSourceName}}</span>
          </view>
          <view class="topmid diff myPadtop">
            <span class="topwz resMin">联系人</span>
            <span class="topwz">{{details.repairPersion}}</span>
          </view>
          <view class="topmid diff myPadtop">
            <span class="topwz resMin">联系电话</span>
            <span class="topwz">{{details.connectPhone}}</span>
          </view>
          <view class="topmid diff myPadtop">
            <span class="topwz resMin">地址</span>
            <span class="topwz">{{details.repairAddress}}</span>
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

export default {
  data() {
    return {
      details: []
    };
  },
  onLoad(options) {
    this.$minApi.ReportingDetail({
      id: options.id,
    }).then(res => {
      this.details = res.body.data
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
