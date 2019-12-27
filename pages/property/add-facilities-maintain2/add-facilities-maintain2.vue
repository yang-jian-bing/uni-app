<template>
  <view>
    <view class="uni-padding-wrap uni-common-mt uniwrap">
      <form @submit="formSubmit" @reset="formReset">
        <view class="uni-form-item uni-column">
          <view class="title">保养日期(必填)</view>
          <input
            disabled
            class="uni-input"
            v-model="object.careDate"
            name="careDate"
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
        </view>
        <view class="uni-form-item uni-column">
          <view class="title">是否外派(必选)</view>
          <view class="uni-list">
            <radio-group @change="radioChange">
              <label
                class="uni-list-cell uni-list-cell-pd"
                v-for="(item, index) in items"
                :key="item.value"
              >
                <radio :value="item.value" :checked="index === current" />
                <view>{{item.name}}</view>
              </label>
            </radio-group>
          </view>
        </view>
        <view class="uni-form-item uni-column">
          <view class="title">外派单位</view>
          <input
            class="uni-input"
            v-model="object.expatriateCompany"
            name="expatriateCompany"
            placeholder="请输入外派单位"
          />
        </view>
        <view class="uni-form-item uni-column">
          <view class="title">联系人</view>
          <input
            class="uni-input"
            v-model="object.connectPersion"
            name="connectPersion"
            placeholder="请输入联系人"
          />
        </view>
        <view class="uni-form-item uni-column">
          <view class="title">联系电话</view>
          <input
            class="uni-input"
            v-model="object.companyPhone"
            name="companyPhone"
            placeholder="请输入联系电话"
          />
        </view>
        <view class="uni-form-item uni-column">
          <view class="title">保养人员(必填)</view>
          <input
            class="uni-input"
            v-model="object.carePersion"
            name="carePersion"
            placeholder="请输入姓名"
          />
        </view>
        <view class="uni-form-item uni-column">
          <view class="title">保养费用(必填)</view>
          <input
            class="uni-input"
            v-model="object.carePrice"
            name="carePrice"
            placeholder="请输入维修费用"
          />
        </view>
        <view class="uni-form-item uni-column">
          <view class="title">保养项目(必填)</view>
          <input
            class="uni-input"
            v-model="object.careProject"
            name="careProject"
            placeholder="请输入项目"
          />
        </view>
        <view class="uni-form-item uni-column">
          <view class="title">保养工时(必填)</view>
          <input class="uni-input" v-model="object.careTime" name="careTime" placeholder="请输入维修工时" />
        </view>
        <view class="uni-form-item uni-column">
          <view class="title">保养情况</view>
          <textarea v-model="object.careDetail" name="careDetail" placeholder="请输入保养情况" />
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
      items: [
        { value: '0', name: '否' },
        { value: '1', name: '是' }
      ],
      object: {
        data: '',
        carePersion: '',
        carePrice: '',
        careProject: '',
        careTime: '',
        careDetail: '',
        handlingSituation: '',
        careDate: '',
        expatriateCompany: '',
        connectPersion: '',
        companyPhone: ''
      },
      facilitiesArchivesId: '',
      current: 0
    }
  },
  components: {
    uniCalendar
  },
  onLoad(option) {
    if (option.update == 1) {
      this.$minApi.KeepDetail({ id: option.id }).then(data => {
        this.object = data.body.data
        this.object.careDate = timerZero(this.object.careDate)
        this.current = this.object.expatriateStatus
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
        name: "careDate",
        checkType: "date",
        errorMsg: "请选择时间或者确定时间格式(YYYY-MM-DD)"
      },
      {
        name: "carePersion",
        checkType: "notnull",
        errorMsg: "请输入姓名"
      },
      {
        name: "carePrice",
        checkType: "float",
        errorMsg: "请输入价格或者查看格式是否正确(允许保留两位小数点的数字)"
      },
      {
        name: "careTime",
        checkType: "notnull",
        errorMsg: "请输入工时"
      },
      {
        name: "careProject",
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
        formData.expatriateStatus = this.current
        this.$minApi.KeepSave(formData).then(data => {
          uni.showToast({
            title: "设施维修信息新增/修改成功!",
            icon: "none"
          });
          setTimeout(() => {
            base.openPage('/pages/property/keep-list/keep-list');
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
      this.object.careDate = e.fulldate
    },
    radioChange(evt) {
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i].value === evt.target.value) {
          this.current = i;
          break;
        }
      }
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
