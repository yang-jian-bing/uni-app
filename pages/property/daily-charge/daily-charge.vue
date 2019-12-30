<template>
  <view>
    <view class="top">
      <view class="search mui-input-row">
        <uni-search-bar radius="100" placeholder="请输入" @confirm="onSearch" style="80%" />
      </view>
      <scroll-view
        id="tab-bar"
        class="scroll-h"
        :scroll-x="true"
        :show-scrollbar="false"
        :scroll-into-view="scrollInto"
      >
        <view
          v-for="(tab,index) in tabBars"
          :key="tab.id"
          class="uni-tab-item"
          :id="tab.id"
          :data-current="index"
          @click="ontabtap"
        >
          <text
            class="uni-tab-item-title"
            :class="tabIndex==index ? 'uni-tab-item-title-active' : ''"
          >{{tab.name}}</text>
        </view>
      </scroll-view>
      <view class="line-h"></view>
      <!-- 待缴费 -->
      <view class="view" v-if="tabIndex==0">
        <view class="joiList" v-for="(item,index) in details" :key="index">
          <view class="serBox serindWid">
            <view class="chouList">
              <view class="propFlex">
                <p class="actWz proFont">{{item.typeName}}</p>
                <span class="invmidWz">应收：￥{{item.originalMoney}}&nbsp;&nbsp;已缴：￥{{item.realMoney}}</span>
              </view>
              <div class="infotit serwz">
                <image class="no-width" src="../../../static/property/No.png" alt />
                <text style="font-size:12px">{{item.feeBillNo}}</text>
              </div>
            </view>
            <navigator :url="'/pages/property/cost-query-details/cost-query-details?id='+item.id">
              <view class="weWzpad">
                <p class="font14">租户：{{item.lesseeName}}</p>
                <p class="font14">
                  费用时间：{{item.startTime}}
                  <span class="invmidWz">&nbsp;~&nbsp;</span>
                  {{item.endTime}}
                </p>
                <p class="font14">资源：{{item.resourceName}}</p>
              </view>
            </navigator>
            <view class="label projectBox flex-end">
              <text href v-if="item.isCanFinish === 1" @click="show('left1',item.id)">终止缴费</text>
              <text href v-if="item.realMoney" @click="payList(item.id)">支付记录</text>
            </view>
          </view>
        </view>
      </view>
      <!-- 欠费 -->
      <view class="view" v-if="tabIndex==1">
        <view class="joiList" v-for="(item,index) in details" :key="index">
          <view class="serBox serindWid">
            <view class="chouList">
              <view class="propFlex">
                <p class="actWz proFont">{{item.typeName}}</p>
                <span class="invmidWz">应收：￥{{item.originalMoney}}&nbsp;&nbsp;已缴：￥{{item.realMoney}}</span>
              </view>
              <div class="infotit serwz">
                <image class="no-width" src="../../../static/property/No.png" alt />
                <text style="font-size:12px">{{item.feeBillNo}}</text>
              </div>
            </view>
            <navigator :url="'/pages/property/cost-query-details/cost-query-details?id='+item.id">
              <view class="weWzpad">
                <p class="font14">租户：{{item.lesseeName}}</p>
                <p class="font14">
                  费用时间：{{item.startTime}}
                  <span class="invmidWz">&nbsp;~&nbsp;</span>
                  {{item.endTime}}
                </p>
                <p class="font14">资源：{{item.resourceName}}</p>
              </view>
            </navigator>
            <view class="label projectBox flex-end">
              <text href @click="show('left1',item.id)">终止缴费</text>
              <text href v-if="item.realMoney" @click="payList(item.id)">支付记录</text>
            </view>
          </view>
        </view>
      </view>
      <!-- 已缴费 -->
      <view class="view" v-if="tabIndex==2">
        <view class="joiList" v-for="(item,index) in details" :key="index">
          <view class="serBox serindWid">
            <view class="chouList">
              <view class="propFlex">
                <p class="actWz proFont">{{item.typeName}}</p>
                <span class="invmidWz">应收：￥{{item.originalMoney}}&nbsp;&nbsp;已缴：￥{{item.realMoney}}</span>
              </view>
              <div class="infotit serwz">
                <image class="no-width" src="../../../static/property/No.png" alt />
                <text style="font-size:12px">{{item.feeBillNo}}</text>
              </div>
            </view>
            <navigator :url="'/pages/property/cost-query-details/cost-query-details?id='+item.id">
              <view class="weWzpad">
                <p class="font14">租户：{{item.lesseeName}}</p>
                <p class="font14">
                  费用时间：{{item.startTime}}
                  <span class="invmidWz">&nbsp;~&nbsp;</span>
                  {{item.endTime}}
                </p>
                <p class="font14">资源：{{item.resourceName}}</p>
              </view>
            </navigator>
            <view class="label projectBox flex-end">
              <text href @click="payList(item.id)">支付记录</text>
            </view>
          </view>
        </view>
      </view>
      <!-- 已终止 -->
      <view class="view" v-if="tabIndex==3">
        <view class="joiList" v-for="(item,index) in details" :key="index">
          <view class="serBox serindWid">
            <view class="chouList">
              <view class="propFlex">
                <p class="actWz proFont">{{item.typeName}}</p>
                <span class="invmidWz">应收：￥{{item.originalMoney}}&nbsp;&nbsp;已缴：￥{{item.realMoney}}</span>
              </view>
              <div class="infotit serwz">
                <image class="no-width" src="../../../static/property/No.png" alt />
                <text style="font-size:12px">{{item.feeBillNo}}</text>
              </div>
            </view>
            <navigator :url="'/pages/property/cost-query-details/cost-query-details?id='+item.id">
              <view class="weWzpad">
                <p class="font14">租户：{{item.lesseeName}}</p>
                <p class="font14">
                  费用时间：{{item.startTime}}
                  <span class="invmidWz">&nbsp;~&nbsp;</span>
                  {{item.endTime}}
                </p>
                <p class="font14">资源：{{item.resourceName}}</p>
              </view>
            </navigator>
            <view class="label projectBox flex-end">
              <text href @click="show('left2',item.finishRemark)">终止原因</text>
              <text href v-if="item.realMoney" @click="payList(item.id)">支付记录</text>
            </view>
          </view>
        </view>
      </view>
      <view class="example-body">
        <uni-load-more :status="status" />
      </view>
    </view>
    <!-- 终止缴费弹窗 -->
    <uni-popup ref="showLeft1" :mask-click="true">
      <view class="uni-tip">
        <text class="uni-tip-title">提示</text>
        <view>请输入终止缴费的原因</view>
        <view class="uni-textarea">
          <textarea @blur="bindTextAreaBlur" auto-height />
        </view>
        <view class="uni-tip-group-button">
          <text class="uni-tip-button" @click="cancel('left1')">取消</text>
          <text class="uni-tip-button" @click="stopEnd">确定</text>
        </view>
      </view>
    </uni-popup>
    <!-- 终止原因 -->
    <uni-popup ref="showLeft2" :mask-click="true">
      <view class="uni-tip">
        <text class="uni-tip-title">提示</text>
        <view class="uni-form-item uni-column">
          <view>终止原因：{{why.finishRemark}}</view>
        </view>
        <view class="uni-tip-group-button">
          <text class="uni-tip-button" @click="cancel('left2')">我知道了</text>
        </view>
      </view>
    </uni-popup>
  </view>
</template>

<script>
import uniSearchBar from '@/components/uni-search-bar/uni-search-bar.vue'
import Tabbar from '@/pages/template/tabbar/tabbar.nvue'
import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue'
import uniPopup from '@/components/uni-popup/uni-popup.vue'
import {
  timerZero
} from '@/common/util.js';
export default {
  components: {
    uniSearchBar,
    Tabbar,
    uniLoadMore,
    uniPopup
  },
  data() {
    return {
      tabIndex: 0,
      scrollInto: '',
      details: [],//待缴费
      searchVal: '',//搜索
      showLeft1: false,
      statusNum: '',
      txtValue: '',
      stopId: '',//终止id
      why: {},//终止原因
      obj: {
        limit: 3,
        page: 1
      },
      status: 'more',//加载更多
      tabBars: [{
        name: '待缴费',
        id: '0'
      }, {
        name: '欠费',
        id: '1'
      }, {
        name: '已缴费',
        id: '2'
      }, {
        name: '已终止',
        id: '3'
      }],
    };
  },
  onLoad(options) {
    this.init()
  },
  methods: {
    //搜索
    onSearch(val) {
      this.obj = {
        limit: 3,
        page: 1
      }
      this.details = []
      this.searchVal = val.value
      this.init()
    },
    ontabtap(e) {
      let index = e.target.dataset.current || e.currentTarget.dataset.current;
      this.tabIndex = e.currentTarget.dataset.current
      this.obj = {
        limit: 3,
        page: 1
      }
      this.details = []
      this.init()
    },
    ontabchange(e) { },
    //待缴费接口调用
    init() {
      if (this.tabIndex == 0) {
        this.statusNum = 0
      } else if (this.tabIndex == 1) {
        this.statusNum = 1
      } else if (this.tabIndex == 2) {
        this.statusNum = 2
      } else if (this.tabIndex == 3) {
        this.statusNum = 3
      }
      this.$minApi.dayPay({
        payStatus: this.statusNum,
        ...this.obj,
        lesseeName: this.searchVal
      }).then(res => {
        const list = res.body
        const totalNum = list.totalNum
        for (let s of list.data) {
          s.endTime = timerZero(s.endTime)
          s.startTime = timerZero(s.startTime)
          this.details.push(s)
        }
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
    // 点击时出现弹窗
    show(e, valId) {
      if (e === 'left1') {
        this.$refs['showLeft1'].open()
        this.stopId = valId
      }
      if (e === 'left2') {
        this.$refs['showLeft2'].open()
        this.why.finishRemark = valId
      }
    },
    // 弹窗取消按钮
    cancel(e, val) {
      if (e === 'left1') {
        this.$refs['showLeft1'].close()
      }
      if (e === 'left2') {
        this.$refs['showLeft2'].close()
      }
    },
    // 弹窗input输入的值
    bindTextAreaBlur: function (e) {
      this.txtValue = e.detail.value
    },
    //终止缴费
    stopEnd() {
      this.$minApi.stopPay({
        id: this.stopId,
        finishRemark: this.txtValue
      }).then(res => {
        this.obj = {
          limit: 3,
          page: 1
        }
        this.details = []
        this.init()
        this.$refs['showLeft1'].close()
      }).catch(err => {
        console.log(err)
      })
    },
    payList(ids) {
      uni.navigateTo({
        url: '/pages/property/payment-records/payment-records?id=' + ids
      });
    }
  }
}
</script>

<style>
.no-width {
  width: 20px;
  height: 10px;
  margin-right: 3px;
}

.serwz {
  font-size: 14px;
  color: #898989;
  line-height: 25px;
}

.infotit {
  display: flex;
  align-items: center;
}

/* #ifndef APP-PLUS */
page {
  width: 100%;
  min-height: 100%;
  display: flex;
}

/* #endif */

.tabs {
  flex: 1;
  flex-direction: column;
  overflow: hidden;
  background-color: #ffffff;
  /* #ifdef MP-ALIPAY || MP-BAIDU */
  height: 100vh;
  /* #endif */
}

.scroll-h {
  width: 750upx;
  height: 80upx;
  flex-direction: row;
  /* #ifndef APP-PLUS */
  white-space: nowrap;
  /* #endif */
  /* flex-wrap: nowrap; */
  /* border-color: #cccccc;
    	border-bottom-style: solid;
    	border-bottom-width: 1px; */
}

.line-h {
  height: 1upx;
  background-color: #cccccc;
}

.uni-tab-item {
  /* #ifndef APP-PLUS */
  display: inline-block;
  /* #endif */
  flex-wrap: nowrap;
  padding-left: 34upx;
  padding-right: 34upx;
  margin-right: 50upx;
}

.uni-tab-item-title {
  color: #555;
  font-size: 30upx;
  height: 80upx;
  line-height: 80upx;
  flex-wrap: nowrap;
  /* #ifndef APP-PLUS */
  white-space: nowrap;
  /* #endif */
}

.uni-tab-item-title-active {
  color: #007aff;
}

.swiper-box {
  height: 2300px;
  flex: 1;
}

.swiper-item {
  flex: 1;
  flex-direction: row;
}

.scroll-v {
  flex: 1;
  /* #ifndef MP-ALIPAY */
  flex-direction: column;
  /* #endif */
  width: 750upx;
}

.update-tips {
  position: absolute;
  left: 0;
  top: 41px;
  right: 0;
  padding-top: 5px;
  padding-bottom: 5px;
  background-color: #fddd9b;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.update-tips-text {
  font-size: 14px;
  color: #ffffff;
}

.refresh {
  width: 750upx;
  height: 64px;
  justify-content: center;
}

.refresh-view {
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
}

.refresh-icon {
  width: 30px;
  height: 30px;
  transition-duration: 0.5s;
  transition-property: transform;
  transform: rotate(0deg);
  transform-origin: 15px 15px;
}

.refresh-icon-active {
  transform: rotate(180deg);
}

.loading-icon {
  width: 20px;
  height: 20px;
  margin-right: 5px;
  color: #999999;
}

.loading-text {
  margin-left: 2px;
  font-size: 16px;
  color: #999999;
}

.loading-more {
  align-items: center;
  justify-content: center;
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: center;
}

.loading-more-text {
  font-size: 28upx;
  color: #999;
}
/* 提示窗口 */
.uni-tip {
  /* #ifndef APP-NVUE */
  display: flex;
  flex-direction: column;
  /* #endif */
  padding: 15px;
  width: 300px;
  background-color: #fff;
  border-radius: 10px;
}

.uni-tip-title {
  margin-bottom: 10px;
  text-align: center;
  font-weight: bold;
  font-size: 16px;
  color: #333;
}

.uni-tip-content {
  /* padding: 15px;
    */
  font-size: 14px;
  color: #666;
}

.uni-tip-group-button {
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */
  flex-direction: row;
  margin-top: 20px;
}

.uni-tip-button {
  flex: 1;
  text-align: center;
  font-size: 14px;
  color: #3b4144;
}
.uni-textarea {
  border: 1px solid #eee;
}
</style>
