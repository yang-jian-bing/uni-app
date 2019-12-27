<template>
	<view>
          <!-- <view class="joiList" >
              <view class="serBox serindWid">


                  <view class='weWzpad'>
                      <p class='font14'>主题：工程建设合同</p>
                      <p class='font14'>合同类型：工程建设合同</p>
                      <p class='font14'>地址：杨凌创业园<span class='invmidWz'>&nbsp;~&nbsp;</span>2019-12-12</p>
                      <p class='font14'>房间号：A园区_A楼宇_1楼层_201房间</p>
                      <p class='font14'>title:</p>
                      <p class='font14'>开始时间：2019-12-15</p>
                       <p class='font14'>签约时间：2019-12-15</p>
                        <p class='font14'>取暖费：</p>
                         <p class='font14'>yi：</p>
                      						 <p class='font14'>取暖费截止时间：</p>
                      						  <p class='font14'>修改人：111</p>
                      						  <p class='font14'>付款：1111</p>
                      						  <p class='font14'>周期：1</p>
                      						  <p class='font14'>修改时间：2019-12</p>
                      						  <p class='font14'>租金：1500</p>
                      						  <p class='font14'>id：hz12313</p>
                      						  <p class='font14'>制冷费：1500</p>
                      						  <p class='font14'>创建人：admin</p>
                      						  <p class='font14'>签订人：root</p>
                      						  <p class='font14'>创建时间：2019-12-21</p>
                                              <p class='font14'>进度单：2500</p>
                      						<p class='font14'>制冷费截止时间：1</p>
                      						<p class='font14'>钱：100</p>
                      						<p class='font14'>项目：999</p>
                      						<p class='font14'>结束时间：2019</p>
                      						<p class='font14'>结束方式：</p>
                      						<p class='font14'>合同名称：555</p>
                      						<p class='font14'>面积：50</p>
                      						<p class='font14'>租聘单价：100</p>
                  </view>

              </view>
          </view>	 -->
			  <view class="joiList" v-for="item of datalist"  :key="item.id">
			      <view class="serBox serindWid">


			          <view class='weWzpad'>

			                                     <p class='font14'>合同类型：{{item.type}}</p>
                                                 <p class='font14'>合同名称：{{item.name}}</p>
			                                     <p class='font14'>合同金额：{{item.money}}</p>
			                                   
                                                  <p class='font14'>合同进度：{{item.jdd}}</p>
			                                     <p class='font14'>开始时间：{{item.stime}}</p>
			                                      <p class='font14'>结束时间：{{item.qtime}}</p>
			                                       <p class='font14'>签订人：{{item.qiandingren}}</p>
			          </view>

			      </view>
			  </view>

			  <view>
                    <uni-load-more :status="state" :content-text="contentText" color="#007aff" @clickLoadMore="add"></uni-load-more>
			  </view>


	</view>
</template>

<script>
    import {getHandle} from "../../../common/api.js"
import uniLoadMore from "@/components/uni-load-more/uni-load-more.vue"
	export default {
        components: {uniLoadMore},
		data() {
			return {
                  datalist:"",
                  	pages:"",
                  	pageNum:"1",
                  	state:"more",
                  	statusTypes: [{
                  						value: 'more',
                  						text: '加载前'
                  					}, {
                  						value: 'loading',
                  						text: '加载中'
                  					}, {
                  						value: 'noMore',
                  						text: '没有更多'
                  					}],
                  	contentText: {
                  						contentdown: '查看更多',
                  						contentrefresh: '加载中',
                  						contentnomore: '没有更多'
                  					}
                  }
			},


		methods: {
             add(e){
             	this.state="loading";
             	let that=this;
             	that.pageNum++;

             	console.log(that.pageNum)
             	setTimeout(function(){
             		if(that.pageNum<=that.pages){
             			getHandle("workflow/rest/v0/mobile/get.wf",{
             				"page":this.pageNum,
             				"limit":"13",
             				"module":"2",
             				"menu":"1"

             			},"GET").then(res=>{
             				that.state="more";
             				for (var i = 0; i < res.data.data.length; i++) {
             							that.datalist.push(res.data.data[i]);
             				 		}
             			})

             		}else{
             			that.state="noMore";
             		}

             	},500)
                }
		},
        onLoad() {
                getHandle("workflow/rest/v0/mobile/get.wf",{
                   "page":this.pageNum,
                   "limit":"13",
                   "module":"1",
                   "menu":"1"
                }).then(res=>{
                    console.log(res)
                    this.datalist=res[1].data.data
                    this.pages=res[1].data.page
                })
        }

	}
</script>

<style>
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
    width: 7px;
    height: 13px;
    margin-left: 10px;
}
.joiList {
    padding: 17px 15px 9px;
    display: flex;
	/* border: 1px solid red; */
	background: #fff;
	margin: 20upx 0;
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
    color: #2B76FB;
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
	display: flex;
	justify-content: flex-end;
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
</style>
