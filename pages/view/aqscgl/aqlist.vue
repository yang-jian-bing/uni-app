<template>
	<view>

			  <view class="joiList" v-for="item of datalist"  :key="item.id"  @click="goto(item.id)">



			          <view class='weWzpad'>
                                                  <p class='font14'>标题：{{item.title}}</p>
                                                 <p class='font14'>创建人：{{item.creator}}</p>
                                                 <p class='font14'>来源：{{item.noticefrom}}</p>
                                                 <p class='font14'>创建时间：{{item.created}}</p>




			       </view>
			     </view>

			  <view>
                    <uni-load-more :status="state" :content-text="contentText" color="#007aff" @clickLoadMore="add"></uni-load-more>
			  </view>


	</view>
</template>

<script>
    import {getParty} from "../../../api/guokai.js"
import uniLoadMore from "@/components/uni-load-more/uni-load-more.vue"
	export default {
        components: {uniLoadMore},
		data() {
			return {
                  datalist:"",
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
                    url: 'zpgldetail?id=' +data
                })
            },
            init(){
                this.$minApi.getParty({
                      "page":this.pageNum,
                    "limit":"13",
                    							"module":"2",
                    							"menu":"1"
                }).then(res=>{
                     this.state="more";
                   for (let  i in res.data) {

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
