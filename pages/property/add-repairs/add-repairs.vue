<template>
  <view>
    <view class="uni-padding-wrap uni-common-mt uniwrap">
      <form @submit="formSubmit" @reset="formReset">
        <view class="uni-form-item uni-column">
          <view class="title">所属园区(必填)</view>
          <view class="uni-list-cell-db">
            <picker
              @change="bindPickerChange1"
              :value="parkIndex"
              :range="arrayPark"
              range-key="parkName"
              name="parkId"
            >
              <view class="uni-input">{{arrayPark[parkIndex]?arrayPark[parkIndex].parkName:''}}</view>
            </picker>
          </view>
        </view>
        <view class="uni-form-item uni-column">
          <view class="title">报修来源(必填)</view>
          <view class="uni-list-cell-db">
            <picker
              @change="bindPickerChange2"
              :value="SourceIndex"
              :range="sourceList"
              range-key="name"
              name="repairSourceCode"
            >
              <view class="uni-input">{{sourceList[SourceIndex]?sourceList[SourceIndex].name:''}}</view>
            </picker>
          </view>
        </view>
        <view class="uni-form-item uni-column">
          <view class="title">报修类型(必填)</view>
          <view class="uni-list-cell-db">
            <picker
              @change="bindPickerChange3"
              :value="typeIndex"
              :range="typeList"
              range-key="name"
              name="repairTypeCode"
            >
              <view class="uni-input">{{typeList[typeIndex]?typeList[typeIndex].name:''}}</view>
            </picker>
          </view>
        </view>
        <view class="uni-form-item uni-column">
          <view class="title">报修详情(必填)</view>
          <textarea v-model="object.repairDetail" name="repairDetail" placeholder="请输入报修详情" />
        </view>
        <view class="uni-form-item uni-column">
          <view class="title">报修地点</view>
          <input class="uni-input" v-model="object.address" name="address" placeholder="请输入地点" />
        </view>
        <view class="uni-form-item uni-column">
          <view class="title">报修日期(必填)</view>
          <input
            disabled
            class="uni-input"
            v-model="object.repairDate"
            name="repairDate"
            @click="open"
            placeholder="请选择时间"
          />
        </view>
        <view class="uni-form-item uni-column">
          <view class="title">报修人员(必填)</view>
          <input
            class="uni-input"
            v-model="object.repairPersion"
            name="repairPersion"
            placeholder="请输入姓名"
          />
        </view>
        <view class="uni-form-item uni-column">
          <view class="title">联系电话(必填)</view>
          <input
            class="uni-input"
            v-model="object.connectPhone"
            name="connectPhone"
            placeholder="请输入手机号"
          />
        </view>
        <view style="height: 100px;width: 100%;"></view>
        <button form-type="submit" class="btn-submit">提交</button>
        <button type="default" form-type="reset" class="btn-reset">重置</button>
      </form>
    </view>
    <w-picker
      mode="dateTime"
      :level="3"
      :defaultVal="object.repairDate"
      @confirm="confirm"
      ref="picker"
      themeColor="#f00"
    ></w-picker>132
  </view>
</template>
<script>
var graceChecker = require("../../../common/graceChecker.js");
import {
  nowDate
} from "@/common/util.js"
import base from '@/common/app-base.js'
import wPicker from "@/components/w-picker/w-picker.vue";
export default {
  components: {
    wPicker
  },
  data() {
    return {
      object: {
        id: '',
        repairDate: '',
        repairAddress: '',
        repairDetail: '',
        repairPersion: '',
        connectPhone: ''
      },
      parkIndex: 0,
      typeIndex: 0,
      SourceIndex: 0,
      arrayPark: [],
      typeList: [],
      sourceList: [
        { repairSourceCode: 'TELEPHONE_DECLARE', name: '电话报修' },
        { repairSourceCode: 'SCENCE_DECLARE', name: '现场报修' },
        { repairSourceCode: 'OTHER_DECLARE', name: '其他报修' }
      ],
      linkageDval: ['2019', '08', '31', '00', '00', '00']
    }
  },
  onLoad(option) {
    this.$minApi.ParkInfo({}).then(data => {
      this.arrayPark = data.body.data
      if (option.id) {
        this.$minApi.InfraDetail({ id: option.id }).then(data => {
          this.object = data.body.data
          this.index = this.arrayStatus.findIndex(item => item.id === this.object.facilitiesStatusCode)
          this.parkIndex = this.arrayPark.findIndex(item => item.id === this.object.parkId)
        })
      }
    })
    this.$minApi.busData({ type: 'REPAIR_ORDER_TYPE' }).then(data => {
      this.typeList = data.body.data
    })
  },
  methods: {
    formSubmit: function (e) {
      //定义表单规则
      var rule = [
        {
          name: "repairDetail",
          checkType: "notnull",
          errorMsg: "详情不可为空"
        },
        {
          name: "repairPersion",
          checkType: "notnull",
          errorMsg: "姓名不可为空"
        },
        {
          name: "connectPhone",
          checkType: "phoneno",
          errorMsg: "手机号不可为空或者格式错误"
        },
        {
          name: "repairDate",
          checkType: "notnull",
          errorMsg: "日期不可为空"
        }
      ];
      //进行表单检查
      var formData = e.detail.value;
      var checkRes = graceChecker.check(formData, rule);
      if (checkRes) {
        formData.parkId = this.arrayPark[formData.parkId].id
        formData.repairSourceCode = this.sourceList[formData.repairSourceCode].repairSourceCode
        formData.repairTypeCode = this.typeList[formData.repairTypeCode].repairTypeCode
        if (this.object.id) {
          formData.id = this.object.id
        }
        this.$minApi.ReportingSave(formData).then(data => {
          uni.showToast({
            title: "设施新增/修改成功!",
            icon: "none"
          });
          setTimeout(() => {
            base.openPage('/pages/property/repairs-list/repairs-list');
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
      this.object.repairDate = e.result
    },
    bindPickerChange1: function (e) {
      this.parkIndex = e.target.value
    },
    bindPickerChange2: function (e) {
      this.SourceIndex = e.target.value
    },
    bindPickerChange3: function (e) {
      this.typeIndex = e.target.value
    },
    open() {
      this.$refs.picker.show()
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
