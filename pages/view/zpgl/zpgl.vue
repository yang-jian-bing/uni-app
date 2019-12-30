<template>
	<view>

			  <view class="joiList" v-for="item of datalist"  :key="item.id"  @click="goto(item.id)">



			          <view class='weWzpad'>

                                                 <p class='font14'>部门：{{item.dept}}</p>
                                                 <p class='font14'>岗位：{{item.gangwei}}</p>
                                                 <p class='font14'>计划招聘人数：{{item.nums}}</p>




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
            goto(data){
                uni.navigateTo({
                    url: 'zpgldetail?id=' +data
                })
            },
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
                getHandle("workflow/rest/v0/mobile/get.wf?page=1&limit=13&module=6&menu=1").then(res=>{
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
