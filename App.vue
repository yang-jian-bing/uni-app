<script>
export default {
  onLaunch: function () {
    console.log('App Launch');
    // #ifdef APP-PLUS
    // 锁定屏幕方向
    plus.screen.lockOrientation('portrait-primary'); //锁定
    // 检测升级
    uni.request({
      url: 'https://uniapp.dcloud.io/update', //检查更新的服务器地址
      data: {
        appid: plus.runtime.appid,
        version: plus.runtime.version,
        imei: plus.device.imei
      },
      success: (res) => {
        console.log('success', res);
        if (res.statusCode == 200 && res.data.isUpdate) {
          let openUrl = plus.os.name === 'iOS' ? res.data.iOS : res.data.Android;
          // 提醒用户更新
          uni.showModal({
            title: '更新提示',
            content: res.data.note ? res.data.note : '是否选择更新',
            success: (showResult) => {
              if (showResult.confirm) {
                plus.runtime.openURL(openUrl);
              }
            }
          })
        }
      }
    })
    // #endif
  },
  onShow: function () {
    console.log('App Show')
  },
  onHide: function () {
    console.log('App Hide')
  },
  globalData: {
    test: ''
  }
}
</script>

<style>
/* #ifndef APP-PLUS-NVUE */
/* uni.css - 通用组件、模板样式库，可以当作一套ui库应用 */
@import "./common/uni.css";
@import "./common/common.css";
@import "./common/popup.css";

@import url("components/ly-tree/ly-tree.css");

/* 以下样式用于 hello uni-app 演示所需 */
page {
  background-color: #f4f5f6;
  height: 100%;
  font-size: 28upx;
  line-height: 1.8;
}

.uni-header-logo {
  padding: 30upx;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10upx;
}

.uni-header-image {
  width: 100px;
  height: 100px;
}

.uni-hello-text {
  color: #7a7e83;
}

.uni-hello-addfile {
  text-align: center;
  line-height: 300upx;
  background: #fff;
  padding: 50upx;
  margin-top: 10px;
  font-size: 38upx;
  color: #808080;
}

/* #endif*/
* {
  margin: 0;
  padding: 0;
}

/* page{
	background: #eeeeee;
} */
.top image {
  max-width: 100% !important;
  /* height: auto; */
  background-size: cover;
  object-fit: cover;
}

body,
ol,
ul,
li,
h1,
h2,
h3,
h4,
h5,
h6,
p,
th,
td,
dl,
dd,
form,
fieldset,
legend,
input,
textarea,
select,
figure,
figcaption {
  max-width: 100%;
  margin: 0;
  padding: 0;
}

.english-overflow {
  word-break: break-all;
}

.cansaiBox input {
  margin: 0 !important;
  padding: 0 !important;
}

ul,
li {
  list-style: none;
}

.search {
  display: flex;
  align-items: center;
  border-bottom: 3px solid #eeeeee;
  position: relative;
}

.top .mui-input-row .mui-input-clear ~ .mui-icon-clear,
.mui-input-row .mui-input-speech ~ .mui-icon-speech,
.mui-input-row .mui-input-password ~ .mui-icon-eye {
  font-size: 20px;
  position: absolute;
  z-index: 1;
  top: 17px;
  right: 5px;
  width: 38px;
  height: 38px;
  text-align: center;
  color: #999;
}

.search input {
  margin: 10px 10px 10px;
  border: none;
  width: 100%;
  padding-right: 25px;
  height: 33px;
  border-radius: 30px !important;
  border: 1px solid #eeeeee;
  text-decoration: none;
  background: #f6f6f6;
}

.search input::-webkit-input-placeholder {
  color: rgba(137, 137, 137, 1);
  font-size: 17px;
}

.search image {
  width: 21px !important;
  height: 21px !important;
  position: absolute;
  left: 30px;
  top: 16px;
}

.top {
  width: 100%;
  background: #fff;
}

.index-box {
  width: 100%;
  background: #fff;
}

.line {
  width: 100%;
  height: 10px;
  background: #eeeeee;
}

.line1 {
  width: 100%;
  height: 1px;
  background: #eeeeee;
}

.line3 {
  width: 100%;
  height: 2px;
  background: #eeeeee;
}

.toptit {
  font-size: 15px;
  margin: 0px 15px 10px 15px;
  padding-top: 14px;
  color: #333333;
}

.topmid {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px 6px;
}

.topwz {
  font-size: 13px;
  color: #898989;
}

.diff {
  padding: 0;
}
.infor {
  margin: 0 15px 0px 20px;
  border-bottom: 1px solid #eeeeee;
}
.actMid {
  display: flex;
  padding: 15px 0;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin: 0px 15px;
  border-bottom: 1px solid #eeeeee;
}
.myBorder {
  margin: 0;
  padding: 15px;
}
.invmidWz {
  font-size: 15px;
  color: #1b1b1b;
}

.invmidWz1 {
  font-size: 15px;
  color: #555555;
}
.seleRight {
  width: 13px;
  height: 10px;
  margin-left: 10px;
}
.joiList {
  padding: 17px 15px 9px;
  display: flex;
  border-top: 10px solid #eee;
}

.serBox {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.serindWid {
  width: 100%;
}
.propFlex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.propFlex1 {
  display: flex;
  justify-content: space-between;
}
.num {
  font-size: 15px;
  color: #898989;
}
.invdiff {
  padding-top: 18px;
}
.comWaiting {
  color: #2b76fb;
  font-size: 16px;
}

.joiList {
  padding: 17px 15px 9px;
  display: flex;
}

.joiPad {
  padding: 15px 0;
  border-top: 1px solid #eeeeee;
  flex: 1;
}

.comFin {
  color: #5edba8;
  font-size: 15px;
}

.comNo {
  color: #ea595d;
  font-size: 15px;
}
.serDrop {
  padding-bottom: 10px;
}

.serDrop1 {
  padding-bottom: 5px;
}
.myserveWz {
  font-size: 18px;
  color: #898989;
}

.actWz {
  font-size: 16px;
  color: #333333;
}
.proFont {
  font-weight: 600;
}
.projectBox {
  margin-top: 5px;
}
.weWzpad {
  padding-top: 12px;
}
.font14 {
  font-size: 14px;
  color: #898989;
}
.myPadtop {
  padding-top: 5px;
}
/* 标签 */
.label {
  display: flex;
  flex-wrap: wrap;
  flex: 1;
}

.label text {
  font-size: 14px;
  color: #1b1b1b;
  padding: 4px 12px;
  margin-left: 3px;
  border: 1px solid #b3b3b3;
  border-radius: 15px;
}
.flex-end {
  justify-content: flex-end;
}
.serindWid {
  width: 100%;
}
.serBuy {
  width: 75%;
  background: #1e65e2;
  color: #fff;
  font-size: 16px;
  line-height: 51px;
  text-align: center;
}
.resMin {
  min-width: 25%;
}
.ansPos {
  position: fixed;
  bottom: 0;
}
/* no图片 */
.no-width {
  width: 20px;
  height: 10px;
  margin-right: 3px;
}
.serwz {
  font-size: 14px;
  color: #898989;
  line-height: 25px;
}
/* 省略号 */
.elli {
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.elli1 {
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}

/* textarea样式 */
.uni-textarea-wrapper {
  margin-left: 20px;
}
.myBorder uni-textarea[data-v-6879ed40] {
  height: 45px;
}
/* 单选按钮 */
.top uni-radio .uni-radio-input {
  width: 16px !important;
  height: 16px !important;
  margin-left: 5px !important;
}

.serindWid {
  width: 100%;
}

.serBuy {
  width: 75%;
  background: #1e65e2;
  color: #fff;
  font-size: 16px;
  line-height: 51px;
  text-align: center;
}

.ansPos {
  position: fixed;
  bottom: 0;
}

/* no图片 */
.no-width {
  width: 20px;
  height: 10px;
  margin-right: 3px;
}

.serwz {
  font-size: 14px;
  color: #898989;
  line-height: 25px;
}

/* 省略号 */
.elli {
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.elli1 {
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}

/* textarea样式 */
.uni-textarea-wrapper {
  margin-left: 20px;
}

.myBorder uni-textarea[data-v-6879ed40] {
  height: 45px;
}

/* 单选按钮 */
.top uni-radio .uni-radio-input {
  width: 16px !important;
  height: 16px !important;
  margin-left: 5px !important;
}

// 搜索框默认样式
.uni-searchbar {
  width: 96%;
}

/deep/ .search uni-input {
  padding-left: 0;
}
.btn-submit {
  background: #1e65e2;
  color: #fff;
  border-radius: 0;
  font-size: 16px;
  height: 51px;
  line-height: 51px;
  position: fixed;
  bottom: 0px;
  width: 100%;
  z-index: 200;
}
.btn-reset {
  position: absolute;
  bottom: 50px;
  width: 100%;
  color: #007aff !important;
  font-size: 16px;
}
</style>
