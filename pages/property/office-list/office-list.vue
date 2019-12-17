<template>
	<view>
		<view class="top">
            <view class="actMid myBorder">
                <span class="invmidWz">创业大赛A座</span>
                <view class="topmid diff">
                    <image class='seleRight' src="../../../static/property/logo.png" alt="">
                </view>
            </view>
            <view class="line"></view>
            <view class="title meet-mrl">
                <view class="ansBox num"><span class="color-dotted cd1"></span>空置</view>
                <view class="ansBox num"><span class="color-dotted cd4"></span>在租</view>
                <view class="ansBox num"><span class="color-dotted cd5"></span>欠费</view>
            </view>
            <view class='invdiff'>
                <p class="meet-p">1层&nbsp;&nbsp;30间</p>
                <view class='office-box'>
                    <span class='office-room r1'>101室</span>
                    <span class='office-room r1'>101室</span>
                    <span class='office-room r1'>101室</span>
                    <span class='office-room r1'>101室</span>
                    <span class='office-room r1'>101室</span>
                    <span class='office-room r1'>101室</span>
                    <span class='office-room r1'>101室</span>
                    <span class='office-room r1'>101室</span>
                    <span class='office-room r2'>101室</span>
                    <span class='office-room r2'>101室</span>
                    <span class='office-room r2'>101室</span>
                    <span class='office-room r3'>101室</span>
                    <span class='office-room r3'>101室</span>
                    <span class='office-room r3'>101室</span>
                </view>
            </view>
            <view class='invdiff'>
                <p class="meet-p">2层&nbsp;&nbsp;30间</p>
                <view class='office-box'>
                    <span class='office-room r1'>101室</span>
                    <span class='office-room r1'>101室</span>
                    <span class='office-room r1'>101室</span>
                    <span class='office-room r1'>101室</span>
                    <span class='office-room r1'>101室</span>
                    <span class='office-room r1'>101室</span>
                    <span class='office-room r1'>101室</span>
                    <span class='office-room r1'>101室</span>
                    <span class='office-room r2'>101室</span>
                    <span class='office-room r2'>101室</span>
                    <span class='office-room r2'>101室</span>
                    <span class='office-room r3'>101室</span>
                    <span class='office-room r3'>101室</span>
                    <span class='office-room r3'>101室</span>
                </view>
            </view>
            <view class='office-bottom'>
                <view class='bottom-box'>
                    <view class='bottom-b1'>
                        <p>总数量</p>
                        <p>20</p>
                    </view>
                    <view class='bottom-b1'>
                        <p>出租数</p>
                        <p>20</p>
                    </view>
                    <view class='bottom-b1'>
                        <p>空置数</p>
                        <p>20</p>
                    </view>
                    <view class='bottom-b1'>
                        <p>空置率</p>
                        <p>11%</p>
                    </view>
                </view>
            </view>
		</view>

	</view>
</template>

<script>
export default {
  data () {
    console.log(this.$minApi)
    return {

    };
  },
  onShow () {
    this.$minApi.uniapp({ type: 'list' }).then(res => {
      this.res = res
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
    this.$minApi.post1({ id: '6196215c-f4d7-446c-9646-f03c7f7b3db5' }).then(res => {
      this.res = res
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
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
  border: 1px solid rgba(154, 197, 49, 1);
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
  width: 82px;
  height: 35px;
  line-height: 35px;
  border-radius: 5px;
  margin-left: 6px;
  margin-bottom: 6px;
  font-size: 15px;
  font-weight: 400;
  text-align: center;
}
.r1 {
  background: rgba(154, 197, 49, 0.2);
  /* border:1px solid rgba(154,197,49,1); */
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
  width: 82px;
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
</style>
