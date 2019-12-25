<template>
  <view>
    <view class="top">
      <view class="search mui-input-row">
        <uni-search-bar radius="100" placeholder="请输入" @confirm="onSearch" style="80%" />
      </view>
      <view v-for="(item,index) in list" :key="index">
        <view class="joiList">
          <view class="serBox serindWid">
            <view class="chouList">
              <view class="propFlex">
                <span class="actWz proFont">{{item.name}}</span>
                <span class="invmidWz">保养次数：{{item.careNum}} 维修次数：{{item.repairNum}}</span>
              </view>
              <div class="infotit serwz">
                <!-- <image class='no-width' src="../../../static/property/No.png" alt=""> -->
                {{item.code}}
              </div>
            </view>
            <view class="weWzpad">
              <p class="font14">所属园区：{{item.parkName}}</p>
              <p class="font14">已用时长：{{item.useTime}}</p>
            </view>
            <view class="label projectBox flex-end">
              <text @tap="update(item.id)">编辑</text>
              <text @tap="deleteHandle(item)">删除</text>
              <text>添加保养记录</text>
              <text @tap="repairLink(item.id)">添加维修记录</text>
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
        name: '',
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
      this.$minApi.InfraList(this.obj).then(data => {
        const list = data.body
        const totalNum = list.totalNum
        if (totalNum) {
          for (let s of list.data) {
            s.repairDate = timerZero(s.repairDate)
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
    deleteHandle(item) {
      this.$minApi.InfraDelete({
        id: item.id
      }).then(data => {
        this.list.splice(this.list.indexOf(item), 1)
        uni.showModal({
          content: '删除成功',
          showCancel: false
        });
        if (this.list.length < 3) {
          this.init()
        }
      })
    },
    onSearch(val) {
      this.obj = {
        name: val.value,
        limit: 3,
        page: 1
      }
      this.status = 'more'
      this.list = []
      this.init()
    },
    // 跳转添加维修
    repairLink(id) {
      base.openPage('/pages/property/add-facilities-maintain1/add-facilities-maintain1', { id });
    },
    trigger() {
      base.openPage('/pages/property/add-facilities/add-facilities');
    },
    update(id) {
      base.openPage('/pages/property/add-facilities/add-facilities', { id });
    }
  }
}
</script>

<style scoped>
</style>
