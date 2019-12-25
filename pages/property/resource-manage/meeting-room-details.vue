<template>
  <view>
    <view class="top">
      <view class="dasanMargin topmid diff">
        <span class="topwz resMin">会议室名称</span>
        <span class="invmidWz proFont">{{ details.name }}</span>
      </view>
      <view class="line"></view>
      <view class="list dasanMargin">
        <view class="serindWid">
          <view class="topmid diff myPadtop">
            <span class="topwz resMin">可预约时间段</span>
            <span class="invmidWz"
              >{{ details.startTime }}~{{ details.endTime }}</span
            >
          </view>
          <view class="topmid diff myPadtop">
            <span class="topwz resMin">会议室面积</span>
            <span class="invmidWz">{{ details.area }}平方米</span>
          </view>
          <view class="topmid diff myPadtop">
            <span class="topwz resMin">可容纳人数</span>
            <span class="invmidWz">{{ details.holdNum }}</span>
          </view>
          <view class="topmid diff myPadtop">
            <span class="topwz resMin">配套设施</span>
            <span class="invmidWz">{{ details.supportingFacility }}</span>
          </view>
          <span class="topwz resMin myPadtop">会议室图片</span>
          <view class="office-box">
            <image
              class="picter-size"
              v-for="(item, index) in fileInfo"
              :key="index"
              :src="item.fileId"
              alt=""
            />
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import { imgPath } from '@/common/app-base.js'
export default {
  data () {
    return {
      details: {},
      fileInfo: []
    };
  },
  onLoad (option) {
    this.getOfficeDetails(option.id)
  },
  methods: {
    getOfficeDetails (id) {
      let condition = {
        id: id,
      }
      this.$minApi.getOfficeDetails(condition).then(res => {
        this.details = res.body.data
        this.fileInfo = res.body.data.fileInfo.map(item => {
          item.fileId = imgPath(item.fileId)
          return item
        })
      }).catch(err => {
        console.log(err)
      })
    }
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
  min-width: 25%;
}
.list {
  padding: 10px 15px;
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
.office-box {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 5px 10px;
}
.picter-size {
  width: 31%;
  height: 102px;
  margin-left: 6px;
  margin-bottom: 6px;
}
</style>
