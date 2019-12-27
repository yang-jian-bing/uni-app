<template>
  <view>
    <view class="top">
      <view class="search mui-input-row">
        <uni-search-bar radius="100" placeholder="请输入设备名称" @confirm="onSearch" style="80%" />
      </view>
      <view v-for="(item,index) in list" :key="index">
        <view class="joiList">
          <view class="serBox serindWid">
            <view @tap="runDetail(item.id)">
              <p class="actWz proFont">{{item.repairProject}}</p>
              <view class="font14">维修工时：{{item.repairTime}}&nbsp;&nbsp;维修费用：￥{{item.repairPrice}}</view>
              <view class="weWzpad">
                <p class="font14">所属园区：{{item.parkName}}</p>
                <p class="font14">设备名称：{{item.name}}</p>
                <p class="font14">维修信息：{{item.repairPersion}}（{{item.repairDate}}）</p>
              </view>
            </view>
            <view class="label projectBox flex-end">
              <text @tap="update(item.id)">编辑</text>
              <text @tap="deleteHandle(item)">删除</text>
            </view>
          </view>
        </view>
        <view class="line"></view>
      </view>
      <view class="example-body">
        <uni-load-more :status="status" />
      </view>
    </view>
  </view>
</template>

<script>
import uniSearchBar from '@/components/uni-search-bar/uni-search-bar.vue'
import uniSection from '@/components/uni-section/uni-section.vue'
import {
  timerZero
} from '@/common/util.js';
import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue'
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
    uniSection
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
      this.$minApi.RepairList(this.obj).then(data => {
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
      this.$minApi.RepairDelete({
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
    update(id) {
      uni.navigateTo({
        url: '/pages/property/add-facilities-maintain1/add-facilities-maintain1?id=' + id + '&update=1'
      });
    },
    runDetail(val) {
      uni.navigateTo({
        url: "/pages/property/facilities-maintain-details/facilities-maintain-details?id=" + val
      });
    }
  }
}
</script>

<style scoped>
</style>
