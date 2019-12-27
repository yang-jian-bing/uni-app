<template>
	<view>
		<view class="top">
			<view class='index-bg'>
				<view class='topmid pdt50'>
					<view class='index-flex'>
						<p>李晓霞</p>
						<span>物业管理人员</span>
					</view>
					<view class="outlogin">
						退出登录
					</view>
				</view>
				<p class='index-login'>欢迎登录物业管理系统</p>
			</view>
			<!-- 客户信息 -->
			<view class='index-body'  @click="open('customer-archives/customer-archives')">
				<view class='index-box'>
					<view class="topmid serindPad wePosition">
						<view class="indexnewBor"></view>
						<view class="serindexWz index-padleft">
							客户信息
						</view>
					</view>
					<view class="topmid">
						<view class="index-flex index-pdt">
							<image class="index-img" src="../../../static/property/custom.png" />
							<view class="serindexWz1 index-padleft">
								客户档案管理
							</view>
						</view>
						<image class='index-right' src="../../../static/property/indexsele.png" alt="">
					</view>
				</view>
			</view>
			<!-- 园区平面图资源管理 -->
			<view class='index-body'>
				<view class='index-box'>
					<view class="topmid serindPad wePosition">
						<view class="indexnewBor"></view>
						<view class="serindexWz index-padleft">
							园区平面图资源管理
						</view>
					</view>
					<view class="dropdone">
						<view class="drop1 serDrop index-width"  @click="open('resource-manage/office-list')">
							<img class="index-img" src="../../../static/property/office.png" />
							<span class="serteachWz projectBox"> 独立办公室</span>
						</view>
						<view class="drop1 serDrop" @click="open('resource-manage/station-list')">
							<img class="index-img" src="../../../static/property/gongwei.png" />
							<span class="serteachWz projectBox"> 开放工位</span>
						</view>
						<view class="drop1 serDrop index-width"  @click="open('resource-manage/meeting-room-list')">
							<img class="index-img" src="../../../static/property/meetingroom.png" />
							<span class="serteachWz projectBox"> 会议室</span>
						</view>

					</view>

				</view>
			</view>
			<!-- 收费管理 -->
			<view class='index-body'>
				<view class='index-box'>
					<view class="topmid serindPad wePosition">
						<view class="indexnewBor"></view>
						<view class="serindexWz index-padleft">
							收费管理
						</view>
					</view>
					<view class="dropdone">
						<view class="drop1 serDrop index-width"  @click="open('daily-charge/daily-charge')">
							<img class="index-img" src="../../../static/property/shoufei1.png" />
							<span class="serteachWz projectBox"> 日常收费</span>
						</view>
						<view class="drop1 serDrop" @click="open('meetingroom-list/meetingroom-list')">
							<img class="index-img" src="../../../static/property/shoufei2.png" />
							<span class="serteachWz projectBox"> 会议室预定信息</span>
						</view>
						<view class="drop1 serDrop index-width" @click="open('add-meetingroom/add-meetingroom')">
							<img class="index-img" src="../../../static/property/shoufei3.png" />
							<span class="serteachWz projectBox"> 预定会议室</span>
						</view>

					</view>

				</view>
			</view>
			<!-- 报事报修 -->
			<view class='index-body' @click="open('repairs-list/repairs-list')">
				<view class='index-box'>
					<view class="topmid serindPad wePosition">
						<view class="indexnewBor"></view>
						<view class="serindexWz index-padleft">
							报事报修
						</view>
					</view>
					<view class="topmid">
						<view class="index-flex index-pdt">
							<image class="index-img" src="../../../static/property/repairs.png" />
							<view class="serindexWz1 index-padleft">
								报事报修
							</view>
						</view>
						<image class='index-right' src="../../../static/property/indexsele.png" alt="">
					</view>
				</view>
			</view>
			<!-- 设施管理 -->
			<view class='index-body'>
				<view class='index-box'>
					<view class="topmid serindPad wePosition">
						<view class="indexnewBor"></view>
						<view class="serindexWz index-padleft">
							设施管理
						</view>
					</view>
					<view class="dropdone">
						<view class="drop1 serDrop"  @click="open('facilities-manage-list/facilities-manage-list')">
							<img class="index-img" src="../../../static/property/sheshi.png" />
							<span class="serteachWz projectBox"> 设施档案</span>
						</view>
						<view class="drop1 serDrop" @click="open('facilities-maintain-list/facilities-maintain-list')">
							<img class="index-img" src="../../../static/property/weixiu.png" />
							<span class="serteachWz projectBox"> 维修记录</span>
						</view>
						<view class="drop1 serDrop" @click="open('keep-list/keep-list')">
							<img class="index-img" src="../../../static/property/baoyang.png" />
							<span class="serteachWz projectBox"> 保养记录</span>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import base from '@/common/app-base.js'
export default {
  data () {
    return {

    };
  },
  methods: {
    open (url) {
      base.openPage('/pages/property/' + url);
    }
  }
}
</script>

<style>
.topmid {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px 6px 25px;
}
.index-width {
  width: 65px;
}
.wePosition {
  position: relative;
}

.serindPad {
  padding-top: 12px;
  padding-right: 15px;
  padding-left: 15px;
  padding-bottom: 0px;
}

.indexnewBor {
  width: 5px;
  height: 20px;
  background: #1e65e2;
  position: absolute;
}

.index-bg {
  height: 145px;
  position: relative;
  background: url(~@/static//property/index-bg.png);
  background-size: cover;
}

.serindexWz {
  font-size: 15px;
  font-weight: 600;
  color: #000;
  position: relative;
  z-index: 6;
}
.serindexWz1 {
  font-size: 15px;
  color: #000;
}

.index-padleft {
  padding-left: 10px;
}

.index-flex {
  display: flex;
  align-items: center;
}

.index-flex p {
  font-size: 19px;
  color: rgba(255, 255, 255, 1);
}

.index-flex span {
  font-size: 12px;
  color: rgba(255, 255, 255, 1);
  margin-left: 10px;
}

.outlogin {
  width: 76px;
  height: 25px;
  line-height: 23px;
  text-align: center;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(247, 247, 247, 1);
  opacity: 0.8;
  border-radius: 14px;
  font-size: 13px;
  font-weight: 400;
  color: rgba(65, 120, 255, 1);
}

.pdt50 {
  padding-top: 50px;
}

.index-login {
  font-size: 19px;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  padding-left: 15px;
}

.index-box {
  /* width: 346px; */
  width: 95%;
  box-shadow: 0px 6px 9px 0px rgba(194, 194, 194, 0.67);
  border-radius: 13px;
  margin-bottom: 10px;
  margin: 15px auto;
}

.index-body {
  width: 100%;
}

.index-pdt {
  padding: 15px 0;
}

.index-img {
  width: 42px;
  height: 42px;
}

.index-right {
  width: 11px;
  height: 20px;
}

.dropdone {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 15px 6px;
}

.drop1 {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #333333;
  font-size: 17px;
  background: #fff;
}

.serteachWz {
  font-size: 13px;
  color: #000;
  text-align: center;
}
</style>
