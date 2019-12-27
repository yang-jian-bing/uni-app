<template>
  <view>
    <view class="uni-padding-wrap uni-common-mt uniwrap">
      <form @submit="formSubmit" @reset="formReset">
           <view class="uni-form-item uni-column">
          <view class="uni-title uni-common-pl">预定日期</view>
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
                  <view class="uni-input">{{ date }}</view>
                </picker>
              </view>
            </view>
          </view>
          </view>
           <view class="uni-form-item uni-column">
          <view class="title">开始时间</view>
          <view class="uni-list">
            <view class="uni-list-cell">
              <view class="uni-list-cell-db">
                <picker
                  mode="time"
                  :value="time"
                  start="09:01"
                  end="21:01"
                  @change="bindTimeChange"
                >
                  <view class="uni-input">{{ time }}</view>
                </picker>
              </view>
            </view>
          </view>
         </view>
         <view class="uni-form-item uni-column">
          <view class="title">结束时间</view>
          <view class="uni-list">
            <view class="uni-list-cell">
              <view class="uni-list-cell-db">
                <picker
                  mode="time"
                  :value="time2"
                  start="09:01"
                  end="21:01"
                  @change="bindTimeChange2"
                >
                  <view class="uni-input">{{ time2 }}</view>
                </picker>
              </view>
            </view>
          </view>
         </view>
          <!-- ///////////////////////// -->
        <!-- <view class="uni-form-item uni-column">
          <view class="title">预定日期</view>
          <input
            disabled
            class="uni-input"
            v-model="object.repairDate"
            name="repairDate"
            @click="open"
            placeholder="请选择时间"
          />
          <uni-calendar
            ref="calendar"
            :date="info.date"
            :insert="info.insert"
            :lunar="info.lunar"
            :startDate="info.startDate"
            :endDate="info.endDate"
            :range="info.range"
            @confirm="confirm"
          />
        </view> -->
        <view class="uni-form-item uni-column">
          <view class="title">联系人</view>
          <input
            class="uni-input"
            v-model="object.repairPersion"
            name="repairPersion"
            placeholder="请输入联系人"
          />
        </view>
        <view class="uni-form-item uni-column">
          <view class="title">联系电话</view>
          <input
            class="uni-input"
            v-model="object.repairPrice"
            name="repairPrice"
            placeholder="请输入联系电话"
          />
        </view>
        <view class="uni-form-item uni-column">
          <view class="title">会议主题</view>
          <input
            class="uni-input"
            v-model="object.repairProject"
            name="repairProject"
            placeholder="请输入会议主题"
          />
        </view>
        <view class="uni-form-item uni-column">
          <view class="title">单位名称</view>
          <input
            class="uni-input"
            v-model="object.repairTime"
            name="repairTime"
            placeholder="请输入单位名称"
          />
        </view>
        <view class="uni-form-item uni-column">
          <view class="title">备注</view>
          <textarea
            v-model="object.handlingSituation"
            name="handlingSituation"
            placeholder="如果有额外需求,请备注在这里"
          />
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
import {
  nowDate
} from "@/common/util.js"
import base from '@/common/app-base.js'
function getDate (type) {
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

  data () {
    return {
         time: '12:01',
         time2: '12:01',
         date: getDate({
           format: true
         }),
         startDate: getDate('start'),
         endDate: getDate('end'),
         pickerText:'',
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
      facilitiesArchivesId: ''
    }
  },
  components: {
    uniCalendar,
  },
  onLoad (option) {
    if (option.update == 1) {
      this.$minApi.RepairDetail({ id: option.id }).then(data => {
        this.object = data.body.data
        this.object.repairDate = timerZero(this.object.repairDate)
      })
    } else {
      this.facilitiesArchivesId = option.id
    }
  },
  methods: {
    open () {
      this.$refs.calendar.open()
    },
    formSubmit: function (e) {
      //定义表单规则
      var rule = [{
        name: "repairDate",
        checkType: "date",
        errorMsg: "请选择时间或者确定时间格式(YYYY-MM-DD)"
      },
      {
        name: "repairPersion",
        checkType: "notnull",
        errorMsg: "请输入姓名"
      },
      {
        name: "repairPrice",
        checkType: "float",
        errorMsg: "请输入价格或者查看格式是否正确(允许保留两位小数点的数字)"
      },
      {
        name: "repairTime",
        checkType: "notnull",
        errorMsg: "请输入工时"
      },
      {
        name: "repairProject",
        checkType: "notnull",
        errorMsg: "请输入项目"
      }
      ];
      //进行表单检查
      var formData = e.detail.value;
      var checkRes = graceChecker.check(formData, rule);
      if (checkRes) {
        formData.facilitiesArchivesId = this.facilitiesArchivesId || this.object.facilitiesArchivesId
        if (this.object.id) {
          formData.id = this.object.id
        }
        this.$minApi.RepairSave(formData).then(data => {
          uni.showToast({
            title: "设施维修信息新增/修改成功!",
            icon: "none"
          });
          setTimeout(() => {
            base.openPage('/pages/property/facilities-maintain-list/facilities-maintain-list');
          }, 1100)

        })
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
    confirm (e) {
      this.object.repairDate = e.fulldate
    },
    //时间选择器
    bindTimeChange: function (e) {
      this.time = e.target.value
      console.log(this.time)
    },
    bindTimeChange2: function (e) {
      this.time2 = e.target.value
      console.log(this.time2)
    },
    //日期选择器
    bindDateChange: function (e) {
      this.date = e.target.value
    },
    //树状
    showMulLinkageTwoPicker () {
      this.pickerValueArray = this.mulLinkageTwoPicker
      this.mode = 'multiLinkageSelector'
      this.deepLength = 2
      this.pickerValueDefault = [0, 0]
      this.$refs.mpvuePicker.show()
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
</style>
