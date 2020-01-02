<template>
  <view>
    <view class="uni-padding-wrap uni-common-mt uniwrap">
      <form @submit="formSubmit" @reset="formReset">
        <view class="uni-form-item uni-column">
          <view class="title">资源(必填)</view>
          <ly-tree
            node-key="id"
            :tree-data="options"
            :props="{children: 'children',label: 'label'}"
            accordion
            :highlight-current="true"
            @node-click="handleNodeClick"
            emptyText="正在加载资源信息..."
          ></ly-tree>
        </view>
        <view class="uni-form-item uni-column">
          <view class="uni-title uni-common-pl">预定日期(必填)</view>
          <view class="uni-list">
            <view class="uni-list-cell">
              <view class="uni-list-cell-db">
                <picker
                  mode="date"
                  :value="date"
                  :start="startDate"
                  :end="endDate"
                  @change="bindDateChange"
                >
                  <input disabled class="uni-input" name="reserveDate" :value="date" />
                </picker>
              </view>
            </view>
            <view v-if="!isString" class="c-r d-f" style="width:100%">
              已预约时间：
              <span v-for="item in reserveData" :key="item" style="margin: 0 6px">{{item}}</span>
            </view>
            <view v-else class="c-r">{{reserveData}}</view>
          </view>
        </view>
        <view v-if="key">
          <view class="uni-form-item uni-column">
            <view class="title">开始时间(必填)</view>
            <view class="uni-list">
              <view class="uni-list-cell">
                <view class="uni-list-cell-db">
                  <picker
                    mode="selector"
                    :value="startTime"
                    :range="timeArray"
                    @change="bindTimeChange"
                    :minuteShow="false"
                  >
                    <input disabled class="uni-input" name="startTime" :value="time + ':00'" />
                  </picker>
                </view>
              </view>
            </view>
          </view>
          <view class="uni-form-item uni-column">
            <view class="title">结束时间(必填)</view>
            <view class="uni-list">
              <view class="uni-list-cell">
                <view class="uni-list-cell-db">
                  <picker
                    mode="selector"
                    :value="endTime"
                    :range="timeArray"
                    @change="bindTimeChange2"
                    :minuteShow="false"
                  >
                    <input disabled class="uni-input" name="endTime" :value="time2 + ':00'" />
                  </picker>
                </view>
              </view>
            </view>
          </view>
        </view>
        <view class="uni-form-item uni-column">
          <view class="title">联系人(必填)</view>
          <input class="uni-input" name="contactMan" placeholder="请输入联系人" />
        </view>
        <view class="uni-form-item uni-column">
          <view class="title">联系电话(必填)</view>
          <input class="uni-input" name="contactPhone" placeholder="请输入联系电话" />
        </view>
        <view class="uni-form-item uni-column">
          <view class="title">会议主题</view>
          <input class="uni-input" name="meetingTopic" placeholder="请输入会议主题" />
        </view>
        <view class="uni-form-item uni-column">
          <view class="title">单位名称</view>
          <input class="uni-input" name="companyName" placeholder="请输入单位名称" />
        </view>
        <view class="uni-form-item uni-column">
          <view class="title">备注</view>
          <textarea name="remark" placeholder="如果有额外需求,请备注在这里" />
        </view>
        <view style="height: 100px;width: 100%;"></view>
        <button form-type="submit" class="btn-submit">提交</button>
        <button type="default" form-type="reset" class="btn-reset">重置</button>
      </form>
    </view>
  </view>
</template>
<script>
var graceChecker = require("../../../common/graceChecker.js");
import uniCalendar from '@/components/uni-calendar/uni-calendar.vue'
import { timerZero } from '@/common/util.js'
import picker from '@/pages/component/picker/picker'
import mpvuePicker from '@/components/mpvue-picker/mpvuePicker.vue';
import LyTree from '@/components/ly-tree/ly-tree.vue'
import {
  nowDate
} from "@/common/util.js"
import base from '@/common/app-base.js'
function getDate(type) {
  const date = new Date();

  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  if (type === 'start') {
    year = year - 60;
  } else if (type === 'end') {
    year = year + 2;
  }
  month = month > 9 ? month : '0' + month;;
  day = day > 9 ? day : '0' + day;

  return `${year}-${month}-${day}`;
}
export default {
    computed:{
        isString(){
            if(typeof this.reserveData ==='string'){
                return true
            }else{
                return false
            }
        }
    },
  components: {
    uniCalendar,
    LyTree
  },
  data() {
    return {
      time: '12:00',
      time2: '12:00',
      date: getDate({
        format: true
      }),
      startDate: getDate('start'),
      endDate: getDate('end'),
      pickerText: '',
      info: {
        date: nowDate(),
        lunar: true,
        range: true,
        insert: false,
        selected: []
      },
      object: {
        data: '',
        repairPersion: '',
        repairPrice: '',
        repairProject: '',
        repairTime: '',
        failureCondition: '',
        handlingSituation: ''
      },
      facilitiesArchivesId: '',
      options: [],
      reserveData: '',
      key: '',
      startTime: '',
      endTime: '',
      timeArray: []
    }
  },
  onLoad(option) {
    this.$minApi.TreeInfo({}).then(data => {
      this.options = data.body.data
    })
  },
  methods: {
    open() {
      this.$refs.calendar.open()
    },
    formSubmit: function (e) {
      //定义表单规则
      var rule = [
        {
          name: "contactMan",
          checkType: "notnull",
          errorMsg: "请输入姓名"
        },
        {
          name: "contactPhone",
          checkType: "phoneno",
          errorMsg: "手机号不可为空或者格式错误"
        }
      ];
      //进行表单检查
      var formData = e.detail.value;
      var checkRes = graceChecker.check(formData, rule);
      if (checkRes && this.key) {
        formData.userSource = 1
        formData.parkResourcesInfoId = this.key
        formData.startTime = formData.startTime.slice(0, 2)
        formData.endTime = formData.endTime.slice(0, 2)
        this.$minApi.MeetingSave(formData).then(data => {
          if (data.header.retCode == 999999) {
            uni.showToast({
              title: data.header.retMsg,
              icon: "none"
            });
          } else {
            uni.showToast({
              title: "会议室预定成功!",
              icon: "none"
            });
            setTimeout(() => {
              uni.navigateTo({url:'/pages/property/meetingroom-list/meetingroom-list'});
            }, 1100)
          }
        })
      } else if (!this.key) {
        uni.showToast({
          title: '请先选择资源',
          icon: "none"
        });
      } else {
        uni.showToast({
          title: graceChecker.error,
          icon: "none"
        });
      }
    },
    formReset: function (e) {
      console.log('清空数据')
    },
    confirm(e) {
      this.object.repairDate = e.fulldate
    },
    //时间选择器
    bindTimeChange: function (e) {
      this.time = this.timeArray[e.target.value]
    },
    bindTimeChange2: function (e) {
      this.time2 = this.timeArray[e.target.value]
    },
    //日期选择器
    bindDateChange: function (e) {
      this.date = e.target.value
      if (this.reserveData) {
        this.reserveHandle(this.key)
      }
    },
    //树状
    showMulLinkageTwoPicker() {
      this.pickerValueArray = this.mulLinkageTwoPicker
      this.mode = 'multiLinkageSelector'
      this.deepLength = 2
      this.pickerValueDefault = [0, 0]
      this.$refs.mpvuePicker.show()
    },
    reserveHandle(key, val) {
      if(val){
      this.timeArray = []
      for (let i = parseInt(val.data.startTime), len = parseInt(val.data.endTime); i <= len; i++) {
        this.timeArray.push(i < 10 ? '0' + i : i + '')
      }
      this.time = this.timeArray[0]
      this.time2 = this.timeArray[this.timeArray.length - 1]
      this.startTime = 0
      this.endTime = this.timeArray.length - 1
      }
      this.$minApi.ReserveInfo({ parkResourcesInfoId: key, reserveDate: this.date }).then(data => {
        const val = data.body.data
        if (val.length === 0) {
          this.reserveData = '暂无预订信息'
        } else {
          this.reserveData = val
        }
      })
    },
    handleNodeClick(val) {
      if (val.level === 5) {
        this.key = val.key
        this.reserveHandle(this.key, val)
      }
    },
  },

}
</script>

<style>
.uni-form-item {
  padding: 5rpx 20rpx 10px;
  margin: 2rpx 0;
  background: #fff;
  box-sizing: border-box;
}

.uni-input,
.uni-textarea-compute {
  background: #eee;
}
.uni-textarea-compute {
  width: 100%;
}
.uni-form-item .title {
  padding: 0 12px;
}

uni-button:after {
  border: none;
}
.uniwrap {
  position: relative;
  padding: 0;
  margin-top: 0px;
  width: 100%;
}
.c-r {
  color: red;
}
.d-f {
  display: flex;
  flex-wrap: wrap;
}
</style>
