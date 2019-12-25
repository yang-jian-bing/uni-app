<template>
  <view>
    <view class="uni-padding-wrap uni-common-mt uniwrap">
      <form @submit="formSubmit" @reset="formReset">
        <view class="uni-form-item uni-column">
          <view class="title">维修时间(必填)</view>
          <input
            disabled
            class="uni-input"
            v-model="object.repairDate"
            name="repairDate"
            @click="open"
            placeholder="请选择时间"
          />
          <!-- <view class="example-body">
                        <button class="calendar-button" type="button" @click="open">打开日历</button>
          </view>-->
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
        </view>
        <view class="uni-form-item uni-column">
          <view class="title">维修人员(必填)</view>
          <input
            class="uni-input"
            v-model="object.repairPersion"
            name="repairPersion"
            placeholder="请输入姓名"
          />
        </view>
        <view class="uni-form-item uni-column">
          <view class="title">维修费用(必填)</view>
          <input
            class="uni-input"
            v-model="object.repairPrice"
            name="repairPrice"
            placeholder="请输入维修费用"
          />
        </view>
        <view class="uni-form-item uni-column">
          <view class="title">维修项目(必填)</view>
          <input
            class="uni-input"
            v-model="object.repairProject"
            name="repairProject"
            placeholder="请输入项目"
          />
        </view>
        <view class="uni-form-item uni-column">
          <view class="title">维修工时(必填)</view>
          <input
            class="uni-input"
            v-model="object.repairTime"
            name="repairTime"
            placeholder="请输入维修工时"
          />
        </view>
        <view class="uni-form-item uni-column">
          <view class="title">故障情况</view>
          <textarea
            v-model="object.failureCondition"
            name="failureCondition"
            placeholder="请输入故障情况"
          />
        </view>
        <view class="uni-form-item uni-column">
          <view class="title">处理情况</view>
          <textarea
            v-model="object.handlingSituation"
            name="handlingSituation"
            placeholder="请输入处理情况"
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
import {
  nowDate
} from "@/common/util.js"
import base from '@/common/app-base.js'
export default {
  data() {
    return {
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
    uniCalendar
  },
  onLoad(option) {
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
    open() {
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
    confirm(e) {
      this.object.repairDate = e.fulldate
    }
  }
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
