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
          <view class="title">所在地点</view>
          <input class="uni-input" v-model="object.address" name="address" placeholder="请输入所在地点" />
        </view>
        <view class="uni-form-item uni-column">
          <view class="title">设施名称(必填)</view>
          <input class="uni-input" v-model="object.name" name="name" placeholder="请输入设施名称" />
        </view>
        <view class="uni-form-item uni-column">
          <view class="title">设施类型(必填)</view>
          <input class="uni-input" v-model="object.type" name="type" placeholder="请输入设施类型" />
        </view>
        <view class="uni-form-item uni-column">
          <view class="title">设施编码(必填)</view>
          <input class="uni-input" v-model="object.code" name="code" placeholder="请输入设施编码" />
        </view>
        <view class="uni-form-item uni-column">
          <view class="title">设施规格(必填)</view>
          <input
            class="uni-input"
            v-model="object.specifications"
            name="specifications"
            placeholder="请输入设施规格"
          />
        </view>
        <view class="uni-form-item uni-column">
          <view class="title">设施状态(必填)</view>
          <view class="uni-list-cell-db">
            <picker
              name="facilitiesStatusCode"
              @change="bindPickerChange"
              :value="index"
              :range="arrayStatus"
              range-key="name"
            >
              <view class="uni-input">{{arrayStatus[index].name}}</view>
            </picker>
          </view>
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
import {
  nowDate
} from "@/common/util.js"
import base from '@/common/app-base.js'
export default {
  data() {
    return {
      object: {

      },
      index: 0,
      parkIndex: 0,
      arrayPark: [],
      arrayStatus: [
        { id: 'FACILITIES_USING', name: '正在使用' },
        { id: 'FACILITIES_MAINTENANCE', name: '维修中' },
        { id: 'FACILITIES_CARE', name: '保养中' },
        { id: 'FACILITIES_SCRAP', name: ' 已报废' }
      ]
    }
  },
  onLoad(option) {
    this.$minApi.ParkInfo({}).then(data => {
      this.arrayPark = data.body.data
    })
    if (option.id) {
      this.$minApi.ParkInfo({}).then(data => {
        this.arrayPark = data.body.data
      })
    }
  },
  methods: {
    formSubmit: function (e) {
      //定义表单规则
      var rule = [
        {
          name: "name",
          checkType: "notnull",
          errorMsg: "设施名称不可为空"
        },
        {
          name: "type",
          checkType: "notnull",
          errorMsg: "设施类型不可为空"
        },
        {
          name: "code",
          checkType: "notnull",
          errorMsg: "设施编码不可为空"
        },
        {
          name: "specifications",
          checkType: "notnull",
          errorMsg: "设施规格不可为空"
        }
      ];
      //进行表单检查
      var formData = e.detail.value;
      var checkRes = graceChecker.check(formData, rule);
      if (checkRes) {
        formData.parkId = this.arrayPark[formData.parkId].id
        formData.facilitiesStatusCode = this.arrayStatus[formData.facilitiesStatusCode].id
        console.log(formData)
        this.$minApi.InfraSave(formData).then(data => {
          uni.showToast({
            title: "设施新增/修改成功!",
            icon: "none"
          });
          setTimeout(() => {
            base.openPage('/pages/property/facilities-manage-list/facilities-manage-list');
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
    },
    bindPickerChange1: function (e) {
      console.log('picker发送选择改变，携带值为：' + e.target.value)
      this.parkIndex = e.target.value
    },
    bindPickerChange: function (e) {
      console.log('picker发送选择改变，携带值为：' + e.target.value)
      this.index = e.target.value
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
