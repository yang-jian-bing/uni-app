<template>
	<view>
		
         <view class="main"   v-for="item in list" :key="item.id">
         	  <p>编号：{{item.rybh}}</p>
			  <p>姓名：{{item.xm}}</p>
			  <p>身份证号：{{item.sfzh}}</p>
         </view>	
			<uni-load-more :status="state" :content-text="contentText" color="#007aff" @clickLoadMore="add"></uni-load-more>
	</view>
</template>

<script>
	import uniLoadMore from "@/components/uni-load-more/uni-load-more.vue"
	export default {
		data() {
			return {
				list:[],
				pageNum:"1",
				state:"more",
				pages:"",
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
		 components: {uniLoadMore},
		 onReachBottom() {
		 		// 	let that = this
		 		// 	this.state = 'loading'
					
		 		// this.pageNum++;	// uni.showNavigationBarLoading()
		 		// uni.request({
		 		//     url: 'http://192.168.1.166:83/bkgl/listBdzt', //仅为示例，并非真实接口地址。
		 		//     data: {
		 		//        "loggedOut":"0",
		 		//        	"pageNum":this.pageNum,
		 		//        	"pageSize":"10"
		 		//     },
		 		// 	method:"POST",
		 		   
		 		//     success: (res) => {
					// 	 this.state = 'more'
		 		// 		console.log(res.data.data.list)
		 		       
		 				
		 		// 		this.list.push(res.data.data.list);
		 		     
		 		//     }
		 		// });
		 		
		 		},
		
		onLoad() {
			
			uni.request({
			    url: 'http://192.168.1.166:83/bkgl/listBdzt', //仅为示例，并非真实接口地址。
			    data: {
			       "loggedOut":"0",
			       	"pageNum":"1",
			       	"pageSize":"10"
			    },
				method:"POST",
			   
			    success: (res) => {
					console.log(res.data.data.list)
			       
					this.pages=res.data.data.pages;
					this.list=res.data.data.list;
			     
			    }
			});
		},
		methods: {
			add(e){
				this.state="loading";
				let that=this;
				that.pageNum++;
				
				console.log(that.pageNum)
				setTimeout(function(){
					if(that.pageNum<=that.pages){
						uni.request({
						    url: 'http://192.168.1.166:83/bkgl/listBdzt', //仅为示例，并非真实接口地址。
						    data: {
						       "loggedOut":"0",
						       	"pageNum":that.pageNum,
						       	"pageSize":"10"
						    },
							method:"POST",
						   
						    success: (res) => {
								console.log(res)
						       
								that.state="more";
								for (var i = 0; i < res.data.data.list.length; i++) {
									that.list.push(res.data.data.list[i]);
								}
								
						     
						    }
						});
					}else{
						that.state="noMore";
					}
					
				},500)
				
				
			}
		}
	}
</script>

<style>
.main{
	background: #fff;
	margin-top: 15upx;
}
</style>
