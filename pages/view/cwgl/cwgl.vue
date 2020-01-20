<template>
	<view>
		 <view class="top">
             <view class="add" >
                      +
             </view>
            <view class="chouList" v-for="item in datalist" :key="item.id" @click="goto(item.id)">
                <view class="propFlex invdiff">
                    <p class="actWz proFont">缴费单id:{{item.paymentid}}</p>



                    <!-- <span class="comWaiting">收款方：1111</span> -->
                </view>
                 <p class="serwz ">总金额：{{item.amount}}</p>
                 <p class="serwz ">缴费渠道：<span  v-if="item.channel==1">支付宝支付</span><span v-else-if="item.channel==2">微信支付</span><span v-else-if="item.channel==3">手动写入</span></p>
                <p class="serwz">缴费时间：{{item.created}}</p>
            </view>


        </view>
        <view>
                <uni-load-more :status="state" :content-text="contentText" color="#007aff" ></uni-load-more>
        </view>
	</view>
</template>

<script>
    import {
        getFinance
    } from "../../../api/guokai.js"
    import uniLoadMore from "@/components/uni-load-more/uni-load-more.vue"
	export default {
        components: {uniLoadMore},
		data() {
			return {
               datalist:[],
               	totalNums:"",
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
            goto(data){
                uni.navigateTo({
                    url: 'cwgldetail?id=' + data
                })
            },
            init(){
                this.$minApi.getFinance({
                      "page":this.pageNum,
                      "limit":"13",
                        "module":"8",
                       "menu":"1"
                }).then(res=>{
                      this.state="more";
                      console.log(res)

                    for (let  i in res.data) {
                        console.log(res.data)
                         console.log(res.data[i])
                     				  this.datalist.push(res.data[i]);
                      	 		}

                    this.totalNums=res.totalNums
                })
            },
             add(){
             	this.state="loading";
             	let that=this;


             	console.log(that.pageNum)
             	setTimeout(function(){
             		if(that.pageNum*13<that.totalNums){
                           that.pageNum++;
                           that.init()


             		}else{
             			that.state="noMore";
             		}

             	},500)
                }
        },
        onReachBottom(){
            if(this.state=="more"){
                 this.add()
            }
        },
        onLoad() {


               this.init()
        }
	}
</script>

<style>
	.top {
	    width: 100%;
	    background: #fff;
	}

  .add{
     width: 80upx;height: 80upx;background:#007AFF;position: fixed;bottom:50upx;right:30upx;
     border: 1px solid #fff;border-radius: 50%;font-size:35px;text-align: center;line-height:70upx;color: #fff;
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
