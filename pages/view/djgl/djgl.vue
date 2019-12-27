<template>
  	<view class="main">
	      <zc-grid :list="imgList"  @goTo="add"></zc-grid>		
	</view>
</template>

<script>
	 import zcGrid from '@/components/zc-grid/zc-grid.vue'
	export default {
		data() {
			return {
				imgList: [{
						url:'../../../static/btnIntMemb.png',
						text: '内部党员',
						toURl:"nbdy/nbdy"
					},
					{
						url: '../../../static/btnOutMemb.png',
						text: '外部党员',
						toURl:"wbdy/wbdy"
					},
					{
						url: '../../../static/btnLeaMts.png',
						text: '党建学习材料',
						toURl:"learning/learning"
					},
					{
						url: '../../../static/btnTteMet.png',
						text: '三会一课',
						toURl:"shyk/shyk"
					},
					{
						url: '../../../static/btnPatMet.png',
						text: '民主生活会',
						toURl:"mzshh/mzshh"
					},
					{
						url: '../../../static/btnRatg.png',
						text: '党员评比',
						toURl:"dypb/dypb"
					},
					{
						url: '../../../static/btnSugtn.png',
						text: '意见建议',
						toURl:"options/options"
					},
					
				]
			}
		},
		methods: {
			add(data){
				uni.navigateTo({
					url:data.toURl
				})
			}
		},
		components:{
		    'zc-grid':zcGrid,
		},
	}
</script>

<style >
.main{
	  border: 1px solid #ddd;border-radius: 20upx;overflow: hidden;
	 margin: 15upx;
	
	 
  }
</style>
