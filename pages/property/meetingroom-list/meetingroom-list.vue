<template>
  <view>
    <view class="top">
      <view class="search mui-input-row">
        <uni-search-bar radius="100" placeholder="请输入" @confirm="onSearch" style="80%" />
      </view>

      <!-- 待使用 -->
      <view class="joiList" v-for="(item, index) in details" :key="index">
        <view class="serBox serindWid">
          <view class="propFlex serDrop">
            <p class="comWaiting">
              {{
              item.useStatus == 0
              ? "待使用"
              : item.useStatus == 1
              ? "已使用"
              : item.useStatus == 2
              ? "已取消"
              : ""
              }}
            </p>
            <span class="invmidWz">
              预计时长：{{ item.planHours }}h&nbsp;&nbsp;预计收费：￥{{
              item.originalMoney
              }}
            </span>
          </view>
          <navigator
            :url="
              '/pages/property/meetingroom-details/meetingroom-details?id=' +
                item.id
            "
            hover-class="navigator-hover"
          >
            <span class="actWz proFont">{{ item.parkResourcesName }}</span>
            <view class="weWzpad">
              <p class="font14">会议主题：{{ item.meetingTopic }}</p>
              <p class="font14">预定时间：{{ item.reserveTime }}</p>
              <p class="font14">联系人信息：{{ item.contactMan }} {{ item.contactPhone }}</p>
            </view>
          </navigator>
          <!-- 弹出框 -->
          <view class="example-body">
            <view v-if="item.useStatus == 0">
              <view
                class="stopMeet"
                hover-class="word-btn--hover"
                :hover-start-time="20"
                :hover-stay-time="70"
                @click="show('left1',item.id)"
              >取消会议</view>
            </view>
            <view v-if="item.useStatus == 1 && item.feeBillNo == null">
              <view
                class="stopMeet"
                hover-class="word-btn--hover"
                :hover-start-time="20"
                :hover-stay-time="70"
                @click="show('left2',item.id)"
              >使用结束</view>
            </view>
            <view v-if="item.useStatus == 1 && item.feeBillNo">
              <view
                class="stopMeet"
                hover-class="word-btn--hover"
                :hover-start-time="20"
                :hover-stay-time="70"
                @click="show('left3',item.feeBillNo,item.remark)"
              >关联缴费单</view>
            </view>
            <view v-if="item.useStatus == 2">
              <view
                class="stopMeet"
                hover-class="word-btn--hover"
                :hover-start-time="20"
                :hover-stay-time="70"
                @click="show('left4',item.finishRemark)"
              >取消原因</view>
            </view>
            <!-- <view class="word-btn draw-cotrol-btn" hover-class="word-btn--hover" :hover-start-time="20"
            :hover-stay-time="70" @click="show('left')"><text class="word-btn-white">取消会议</text></view>-->
          </view>
        </view>
      </view>
      <view class="example-body1">
        <uni-load-more :status="status" />
      </view>
      <uni-popup ref="showLeft1" :mask-click="true">
        <view class="uni-tip">
          <text class="uni-tip-title">提示</text>
          <view>请输入取消会议的原因</view>
          <view class="uni-textarea">
            <textarea @blur="bindTextAreaBlur" auto-height />
          </view>
          <view class="uni-tip-group-button">
            <text class="uni-tip-button" @click="cancel('left1')">取消</text>
            <text class="uni-tip-button" @click="stopMeet()">确定</text>
          </view>
        </view>
      </uni-popup>
      <uni-popup ref="showLeft2" :mask-click="true">
        <view class="uni-tip">
          <text class="uni-tip-title">提示</text>
          <view class="uni-form-item uni-column">
            <view>应收金额</view>
            <input class="uni-input" style="border:1px solid #3b4144" v-model="moneys" />
          </view>
          <view class="uni-textarea">
            <view>备注信息</view>
            <textarea @blur="bindTextAreaBlur2" auto-height style="border:1px solid #3b4144" />
          </view>
          <view class="uni-tip-group-button">
            <text class="uni-tip-button" @click="cancel('left2')">取消</text>
            <text class="uni-tip-button" @click="stopEnd()">确定</text>
          </view>
        </view>
      </uni-popup>
      <uni-popup ref="showLeft3" :mask-click="true">
        <view class="uni-tip">
          <text class="uni-tip-title">提示</text>
          <view class="uni-form-item uni-column">
            <view>缴费单编号：{{payList.feeBillNo}}</view>
          </view>
          <view class="uni-textarea">
            <view>备注信息：{{payList.remark}}</view>
          </view>
          <view class="uni-tip-group-button">
            <text class="uni-tip-button" @click="cancel('left3')">我知道了</text>
            <!-- <text class="uni-tip-button" @click="stopMeet()">确定</text> -->
          </view>
        </view>
      </uni-popup>
      <uni-popup ref="showLeft4" :mask-click="true">
        <view class="uni-tip">
          <text class="uni-tip-title">提示</text>
          <view class="uni-form-item uni-column">
            <view>取消原因：{{why.finishRemark}}</view>
          </view>
          <view class="uni-tip-group-button">
            <text class="uni-tip-button" @click="cancel('left4')">我知道了</text>
            <!-- <text class="uni-tip-button" @click="stopMeet()">确定</text> -->
          </view>
        </view>
      </uni-popup>
    </view>
  </view>
</template>

<script>
import {
  meetingList, stopReserve, stopEnds
} from '../../../api/lihao.js'
import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue'
import uniSearchBar from '@/components/uni-search-bar/uni-search-bar.vue'
import {
  timerZero
} from '@/common/util.js';
import uniDrawer from '@/components/uni-drawer/uni-drawer.vue'
import uniSection from '@/components/uni-section/uni-section.vue'
import uniList from '@/components/uni-list/uni-list.vue'
import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
import textarea from '@/pages/component/textarea/textarea.vue'
import input from '@/pages/component/input/input.vue'
import uniPopup from '@/components/uni-popup/uni-popup.vue'
export default {
  components: {
    uniLoadMore,
    uniSearchBar,
    uniDrawer,
    uniSection,
    uniList,
    uniListItem,
    uniPopup
  },
  data() {
    return {
      showLeft1: false,
      showLeft2: false,
      showLeft3: false,
      showLeft4: false,
      details: [],
      searchHeader: '',
      searchVal: "",
      type: '',
      txtValue: '',
      txtValue2: '',
      moneys: '',
      stopId: '',
      meetId: '',
      payList: {
        remark: "",
        feeBillNo: ""
      },
      why: {
        finishRemark: ''
      },
      obj: {
        limit: 3,
        page: 1
      },
      status: 'more'
    };
  },
  onLoad() {
    this.init()
  },
  methods: {
    // 搜索

    cancel(e) {

      if (e === 'left1') {
        this.$refs['showLeft1'].close()
      }
      if (e === 'left2') {
        this.$refs['showLeft2'].close()
      }
      if (e === 'left3') {
        this.$refs['showLeft3'].close()
      }
      if (e === 'left4') {
        this.$refs['showLeft4'].close()
      }
    },


    togglePopup() {
      this.$nextTick(() => {
        this.$refs['showtip'].open()
      })
    },
    onSearch(val) {
      this.details = []
      this.obj = {
        limit: 3,
        page: 1
      }
      this.searchVal = val.value
      this.init()
    },
    // 初始化
    init() {
      this.$minApi.meetingList({
        parkResourcesName: this.searchVal,
        ...this.obj
      }).then(res => {
        const list = res.body
        const totalNum = list.totalNum
        for (let s of list.data) {
          s.reserveTime = timerZero(s.reserveTime)
          this.details.push(s)
        }
        console.log(this.details)
        if (this.obj.page * 3 > totalNum) {
          this.status = 'noMore'
        } else {
          this.obj.page++
        }
      }).catch(err => {
        console.log(err)
      })
    },
    //上拉事件
    onReachBottom() {
      if (this.status === 'more') {
        this.init()
      }
    },
    //抽屉
    show(e, val, val2) {
      if (e === 'left1') {
        this.$refs['showLeft1'].open()
        this.meetId = val
      }
      if (e === 'left2') {
        this.$refs['showLeft2'].open()
        this.stopId = val
      }
      if (e === 'left3') {
        this.$refs['showLeft3'].open()
        this.payList.feeBillNo = val
        this.payList.remark = val2
      }
      if (e === 'left4') {
        this.$refs['showLeft4'].open()
        this.why.finishRemark = val
      }
    },
    hide() {
      this.showLeft1 = false
      this.showLeft2 = false
      this.showLeft3 = false
      this.showLeft4 = false
    },
    closeDrawer(e) {
      if (e === 'left1') {
        this.showLeft1 = false
      }
      if (e === 'left2') {
        this.showLeft2 = false
      }
      if (e === 'left3') {
        this.showLeft3 = false
      }
      if (e === 'left4') {
        this.showLeft4 = false
      }
      console.log(this.showLeft3)
    },
    confirm() { },
    // 输入框内容
    bindTextAreaBlur: function (e) {
      console.log(e.detail.value)
      this.txtValue = e.detail.value
    },
    bindTextAreaBlur2: function (e) {
      console.log(e.detail.value)
      this.txtValue2 = e.detail.value
    },
    //取消会议
    stopMeet() {
      this.$minApi.stopReserve({
        id: this.meetId,
        finishRemark: this.txtValue
      }).then(res => {
        console.log('取消成功')
        this.$refs['showLeft1'].close()
      }).catch(err => {
        console.log(err)
      })
    },
    //使用结束
    stopEnd() {
      this.$minApi.stopEnds({
        id: this.stopId,
        realMoney: this.moneys,
        finishRemark: this.txtValue2
      }).then(res => {
        console.log('结束成功')
        this.$refs['showLeft2'].close()
      }).catch(err => {
        console.log(err)
      })
    }

  },
  onNavigationBarButtonTap(e) {
    this.showRight = !this.showRight
  },
  onBackPress() {
    if (this.showRight) {
      this.hide()
      return true
    }
  }

}
</script>

<style>
.stopMeet {
  border: 1px solid #3b4144;
  padding: 5px 15px;
  border-radius: 15px;
}
/*  .poppups{
            display: flex;
            justify-content: flex-end;
        } */
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
  color: #2b76fb;
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

/* 头条小程序组件内不能引入字体 */
/* #ifdef MP-TOUTIAO */
@font-face {
  font-family: uniicons;
  font-weight: normal;
  font-style: normal;
  src: url("~@/static/uni.ttf") format("truetype");
}

/* #endif */

/* #ifndef APP-NVUE */
page {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background-color: #efeff4;
  min-height: 100%;
  height: auto;
}

view {
  font-size: 14px;
  line-height: inherit;
}

.example {
  padding: 0 15px 15px;
}

.example-info {
  padding: 15px;
  color: #3b4144;
  background: #ffffff;
}
.example-body {
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-end;
  padding: 0;
  font-size: 14px;
  background-color: #ffffff;
}
.example-body1 {
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0;
  font-size: 14px;
  background-color: #ffffff;
}

/* #endif */
.example {
  padding: 0 15px;
}

.example-info {
  /* #ifndef APP-NVUE */
  display: block;
  /* #endif */
  padding: 15px;
  color: #3b4144;
  background-color: #ffffff;
  font-size: 14px;
  line-height: 20px;
}

.example-info-text {
  font-size: 14px;
  line-height: 20px;
  color: #3b4144;
}

.example-body {
  flex-direction: column;
  padding: 15px;
  background-color: #ffffff;
}

.word-btn-white {
  font-size: 18px;
  color: #ffffff;
}

.word-btn {
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  height: 48px;
  margin: 15px;
  background-color: #007aff;
}

.word-btn--hover {
  background-color: #4ca2ff;
}

.header {
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */
  flex-direction: row;
  padding: 10px 15px;
  align-items: center;
  border-top-width: 1px;
  border-top-color: #f5f5f5;
  border-top-style: solid;
  background-color: #ffffff;
}

.input-view {
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */
  align-items: center;
  flex-direction: row;
  background-color: #e7e7e7;
  height: 30px;
  border-radius: 15px;
  padding: 0 10px;
  flex: 1;
  background-color: #f5f5f5;
}

.uni-drawer-info {
  background-color: #ffffff;
  padding: 30rpx;
  padding-top: 10rpx;
  color: #3b4144;
}

.uni-padding-wrap {
  padding: 0 15px;
  line-height: 1.8;
}

.input {
  flex: 1;
  padding: 0 5px;
  height: 24px;
  line-height: 24px;
  font-size: 28rpx;
  background-color: transparent;
}

.close {
  padding: 30rpx;
  display: flex;
  justify-content: flex-end;
}

.example-body {
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */
  flex-direction: row;
  padding: 0;
}

.draw-cotrol-btn {
  flex: 1;
}
</style>
