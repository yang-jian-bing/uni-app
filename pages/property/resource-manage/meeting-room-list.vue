<template>
	<view>
		<view class="top">
        <view class="actMid myBorder">
            <span class="invmidWz">{{pickerText}}</span>
            <view class="topmid diff"  @click="showMulLinkageTwoPicker">
                <image class='seleRight' src="../../../static/property/sele.png" alt="">
            </view>
        </view>
        <view class="uni-form-item uni-column">
            <input disabled class="uni-input text-center" v-model="date" name="repairDate" @click="open" placeholder="请选择时间" />
            <uni-calendar ref="calendar" :date="info.date" :insert="info.insert" :lunar="info.lunar" :startDate="info.startDate"
                :endDate="info.endDate" :range="info.range" @confirm="confirm" />
        </view>
        <mpvue-picker :themeColor="themeColor" ref="mpvuePicker" :mode="mode" :deepLength="deepLength" 
        :pickerValueDefault="pickerValueDefault" @onConfirm="onConfirm" @onCancel="onCancel" 
        :pickerValueArray="pickerValueArray"></mpvue-picker>
        <view class="line"></view>
        <view class="title meet-mrl">
            <view class="ansBox num"><span class="color-dotted cd1"></span>可预订</view>
            <view class="ansBox num"><span class="color-dotted cd4"></span>已预订</view>
            <view class="ansBox num"><span class="color-dotted cd5"></span>不可预定</view>
        </view>
        <view class='invdiff' v-for="item in meetingList" :key="item.id">
            <p class="meet-p" @click="officeDetails(item)" >{{item.name}}</p>
            <view class='office-box'>
                <span   
                 v-if="name !== 'id' && name !== 'name'"
                 v-for="(value,name) in item" :key="name"
                 @click="officeBookDetails(item.id, name, value)"
                  >
                  <div class='office-room' :style="boxStyle" :class="{'cd1': value == 0, 'cd4': value == 1, 'cd5': value == 2 }"></div>
                  <div class='office-room m-t-5' :style="boxStyle" v-if='name.split("key")[1]%2===0'> {{name.split('key')[1]}}</div>
                  <div class='office-room m-t-5 no-show' :style="boxStyle" v-else>0</div>
               </span>
            </view>
        </view>
        <uni-popup ref="showLeft1" :mask-click="true">
          <view class="uni-tip">
            <text class="uni-tip-title">提示</text>
            <view class="uni-form-item uni-column">
              <view>联系人：{{details.contactMan}}</view>
            </view>
            <view class="uni-textarea">
              <view>联系电话：{{details.contactMan}}</view>
            </view>
             <view class="uni-textarea">
              <view>单位名称：{{details.contactMan}}</view>
            </view>
            <view class="uni-tip-group-button">
              <text class="uni-tip-button" @click="cancel()">取消</text>
            </view>
          </view>
        </uni-popup>
  		</view>
	</view>
  
</template>

<script>
import mpvuePicker from '../../../components/mpvue-picker/mpvuePicker.vue';
import base from '@/common/app-base.js'
import uniCalendar from '@/components/uni-calendar/uni-calendar.vue'
import uniPopup from '@/components/uni-popup/uni-popup.vue'
import {
  nowDate
} from "@/common/util.js"
export default {
  components: {
    mpvuePicker,
    uniCalendar,
    uniPopup
  },
  data () {
    return {
      mulLinkageTwoPicker: [],
      cityPickerValueDefault: [0, 0, 1],
      themeColor: '#007AFF',
      pickerText: '',
      boxStyle: {
        height: '20px',
        width: '20px',
      },
      details: {},
      buildingInfoId: '',
      mode: '',
      meetingList: [],
      deepLength: 1,
      pickerValueDefault: [0],
      pickerValueArray: [],
      total: 0,
      rentalNum: 0,
      vacantNum: 0,
      vacantRate: 0,
      officeSummary: [],
      info: {
        date: nowDate(),
        lunar: true,
        range: true,
        insert: false,
        selected: []
      },
      date: this.formatDate()
    };
  },
  onShow () {
    this.officePlanList()
  },
  methods: {
    open () {
      this.$refs.calendar.open()
    },
    cancel () {
      this.$refs['showLeft1'].close()
    },
    officeBookDetails (id, name, value) {
      if (value == 1) {
        this.$minApi.queryReserveManInfo({
          id: id,
          date: this.date,
          time: name.split("key")[1] + ':00'
        }).then(res => {
          this.details = res.body.data
        }).catch(err => {
          console.log(err)
        })
        this.$refs['showLeft1'].open()
      }
    },
    formatDate () {
      let date = new Date()
      let y = date.getFullYear();
      let m = date.getMonth() + 1;
      m = m < 10 ? '0' + m : m;
      let d = date.getDate();
      d = d < 10 ? ('0' + d) : d;
      return y + '-' + m + '-' + d;//这里可以写格式
    },
    showMulLinkageTwoPicker () {
      this.pickerValueArray = this.mulLinkageTwoPicker
      this.mode = 'multiLinkageSelector'
      this.deepLength = 2
      this.pickerValueDefault = [0, 0]
      this.$refs.mpvuePicker.show()
    },
    confirm (e) {
      this.date = e.fulldate
      this.getMeetingList()
    },
    onConfirm (e) {
      this.pickerText = e.label
      this.buildingInfoId = e.value[1]
      this.getMeetingList()
    },
    officeDetails (data) {
      let condition = {
        id: data.id
      }
      let url = '/pages/property/resource-manage/meeting-room-details'
      base.openPage(url, condition);
    },
    getMeetingList () {
      let condition = {
        buildingInfoId: this.buildingInfoId,
        date: this.date
      }
      this.$minApi.getMeetingList(condition).then(res => {
        let width = (document.body.offsetWidth - 20) / (Object.keys(res.body.data[0]).length - 2)
        this.meetingList = res.body.data
        console.log(width)
        this.boxStyle.height = width + 'px'
        this.boxStyle.width = width + 'px'
      }).catch(err => {
        console.log(err)
      })
    },
    officePlanList () {
      let condition = {}
      this.$minApi.officePlanList(condition).then(res => {
        this.mulLinkageTwoPicker = res.body.data[0].children.map((item, index) => {
          item.value = item.id
          if (item.children.length > 0) {
            item.children.map(build => {
              build.value = build.id
              return build
            })
          }
          return item
        })
        this.pickerText = this.mulLinkageTwoPicker[0].label + '-' + this.mulLinkageTwoPicker[0].children[0].label
        this.buildingInfoId = this.mulLinkageTwoPicker[0].children[0].value
        this.getMeetingList()
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style>
/* 办公室平面图 */
.title {
  display: flex;
  line-height: 40px;
  align-items: center;
  justify-content: space-around;
}
.seleRight {
  width: 16px;
  height: 10px;
  margin-left: 10px;
}
.meet-mrl {
  margin: 0 45px;
}
.meet-p {
  text-align: center;
  font-weight: 600;
  color: #1b1b1b;
  font-size: 16px;
}
.ansBox {
  align-items: center;
  display: flex;
}
.cd1 {
  background: rgba(179, 212, 101, 0.2);
}
.cd2 {
  background: rgba(179, 212, 101, 1);
}
.cd3 {
  background: rgba(220, 220, 220, 1);
}
.cd4 {
  background: rgba(250, 205, 137, 1);
}
.cd5 {
  background: rgba(234, 89, 93, 1);
}
.color-dotted {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-right: 10px;
}
.office-box {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 5px 10px;
}
.office-room {
  line-height: 10px;
  font-size: 15px;
  font-weight: 400;
  text-align: center;
}
.r1 {
  background: rgba(154, 197, 49, 0.2);
  color: rgba(154, 197, 49, 1);
}
.r2 {
  background: rgba(250, 205, 137, 1);
  color: rgba(180, 125, 42, 1);
}
.r3 {
  background: rgba(234, 89, 93, 1);
  color: rgba(138, 53, 6, 1);
}
.bottom-box {
  display: flex;
  justify-content: space-around;
  margin: 0px 10px;
  padding-bottom: 10px;
}
.bottom-b1 {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* width: 82px; */
  width: 23%;
  height: 68px;
  background: rgba(238, 238, 238, 1);
  border-radius: 5px;
}
.bottom-box p {
  text-align: center;
  font-size: 14px;
  color: #1b1b1b;
}
.bottom-box p:nth-child(2) {
  font-weight: 600;
}
.no-show {
  opacity: 0;
}
</style>
