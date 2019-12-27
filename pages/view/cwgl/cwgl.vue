<template>
	<view>
		 <view class="top">
            <view class="chouList" v-for="item in datalist" :key="item.id">
                <view class="propFlex invdiff">
                    <p class="actWz proFont">缴费单id:{{item.paymentid}}</p>
                   <!-- <p class="actWz proFont">总金额:{{item.amount}}</p> -->


                     <span class="comWaiting">收款方：1111</span>
                </view>
                 <p class="serwz ">总金额：{{item.amount}}</p>
                 <p class="serwz ">缴费渠道：<span  v-if="item.channel==1">支付宝支付</span><span v-else-if="item.channel==2">微信支付</span><span v-else-if="item.channel==3">手动写入</span></p>
                <p class="serwz">缴费时间：2019-10-12 10:00:00</p>
            </view>


        </view>
        <view>
                <uni-load-more :status="state" :content-text="contentText" color="#007aff" @clickLoadMore="add"></uni-load-more>
        </view>
	</view>
</template>

<script>
    import {
        getHandle
    } from "../../../common/api.js"
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
             				"module":"8",
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
                   "module":"8",
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
	.top {
	    width: 100%;
	    background: #fff;
	}


	.line {
	    width: 100%;
	    height: 10px;
	    background: #eeeeee;
	}

	.serwz {
    font-size: 14px;
    color: #898989;
    line-height: 25px;
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
	    width: 7px;
	    height: 13px;
	    margin-left: 10px;
	}
	.joiList {
	    padding: 17px 15px 9px;
	    display: flex;
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
.chouList {
    padding: 0 15px;
    border-bottom: 2px solid #eee;
}
.mytuiPad {
    padding: 10px 0;
}
</style>
