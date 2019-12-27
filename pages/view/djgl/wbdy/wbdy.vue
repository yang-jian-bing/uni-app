<template>
	<view>
		<view class="content">
			<view class="joiList" v-for="item in datalist" :key="item.usr_id"  @click="goto(item.id)" >



			        <view class='weWzpad' >
			            <p class='font14'>姓名：{{item.usr}}</p>
			            <p class='font14'>性别：{{item.sex}}</p>
			            <p class='font14'>状态：{{item.state}}</p>
						 <p class='font14'>创建时间: {{item.created}}</p>
						 <p class='font14'>创建人：{{item.creator}}</p>
			        </view>


			</view>
		</view>
		<uni-load-more :status="state" :content-text="contentText" color="#007aff" @clickLoadMore="add"></uni-load-more>
	</view>
</template>

<script>
   import {getHandle} from "../../../../common/api.js"
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
				console.log(data)
				uni.navigateTo({
					url:'nbdydetail?id='+data
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
							"menu":"2"

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
		},

		onLoad() {
			getHandle("workflow/rest/v0/mobile/get.wf",{
				"page":"1",
				"limit":"13",
				"module":"2",
				"menu":"2"

			})
			 .then(res=>{
				 console.log(res)
				this.datalist=res[1].data.data;
				 this.pages=res[1].data.page;
			 })
		}
	},
	}
</script>

<style>
.joiList {
    padding: 17px 15px 9px;
    display: flex;
	/* border: 1px solid red; */
	background: #fff;
	border-bottom: 1px solid #eee;



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
