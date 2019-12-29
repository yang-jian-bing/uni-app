<template>
  <view>
    <view class="top">
      <view class="search mui-input-row">
        <uni-search-bar radius="100" placeholder="请输入设备名称" @confirm="onSearch" style="80%" />
      </view>
      <view v-for="(item,index) in list" :key="index">
        <view class="joiList">
          <view class="serBox serindWid">
            <view class="chouList">
              <view class="propFlex">
                <span class="actWz proFont">{{item.repairTypeName}}</span>
                <span class="invmidWz">{{item.repairDate}}</span>
              </view>
              <div class="infotit serwz">
                <image class="no-width" src="../../../static/property/No.png" alt />
                {{item.orderNo}}
              </div>
            </view>
            <view class="weWzpad">
              <p class="font14">报修人信息：{{item.repairPersion}} {{item.connectPhone}}</p>
              <p class="font14">报修人地点：{{item.repairAddress}}</p>
              <p class="font14">报修来源：{{item.repairSourceName}}</p>
            </view>
            <view class="label projectBox flex-end">
              <text
                v-if="!['APP_DECLARE','ONLINE_DECLARE'].includes(item.repairSourceCode)"
                @tap="update(item.id)"
              >编辑</text>
            </view>
          </view>
        </view>
        <view class="line"></view>
      </view>
      <view class="example-body">
        <uni-load-more :status="status" />
      </view>
    </view>
    <uni-fab
      ref="fab"
      @tapLink="trigger"
      horizontal="right"
      vertical="bottom"
      :pattern="{buttonColor:'#007aff'}"
    />
  </view>
</template>

<script>
import uniSearchBar from '@/components/uni-search-bar/uni-search-bar.vue'
import uniSection from '@/components/uni-section/uni-section.vue'
import {
  timerZero
} from '@/common/util.js';
import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue'
import base from '@/common/app-base.js'
import uniFab from '@/components/uni-fab/uni-fab.vue'
export default {
  data() {
    return {
      list: [],
      obj: {
        repairTypeName: '',
        limit: 3,
        page: 1
      },
      status: 'more'
    };
  },
  components: {
    uniLoadMore,
    uniSearchBar,
    uniSection,
    uniFab
  },
  onLoad() {
    this.init()
  },
  onReachBottom() {
    if (this.status === 'more') {
      this.init()
    }
  },
  onNavigationBarSearchInputConfirmed(val) {
    alert(val, 123)
  },
  methods: {
    init() {
      this.$minApi.ReportingList(this.obj).then(data => {
        const list = data.body
        const totalNum = list.totalNum
        if (totalNum) {
          for (let s of list.data) {
            s.careDate = timerZero(s.careDate)
            this.list.push(s)
          }
          if (this.obj.page * 3 > totalNum) {
            this.status = 'noMore'
          } else {
            this.obj.page++
          }
        } else {
          this.status = 'noMore'
        }

      })
    },
    onSearch(val) {
      this.obj = {
        repairTypeName: val.value,
        limit: 3,
        page: 1
      }
      this.status = 'more'
      this.list = []
      this.init()
    },
    update(id) {
      uni.navigateTo({
        url: '/pages/property/add-repairs/add-repairs?id=' + id + '&update=1'
      });
    },
    trigger() {
      base.openPage('/pages/property/add-repairs/add-repairs');
    }
  }
}
</script>

<style scoped>
</style>
