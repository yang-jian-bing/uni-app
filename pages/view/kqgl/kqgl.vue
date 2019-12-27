<template>
	<view class="main" >
           <zc-grid :list="imgList"  @goTo="add"></zc-grid>	
	</view>
</template>

<script>
	 import zcGrid from '@/components/zc-grid/zc-grid.vue'
	    export default{
	        components:{
	            'zc-grid':zcGrid,
	        },
			methods:{
				add(data){
					uni.navigateTo({
						url:data.toURl
					})
				}
			},
	        data(){
	            return{
	                
					imgList: [{
							url: '../../../static/btnLean.png',
							text: '请假',
							toURl:"leave/leave"
						},
						{
							url: '../../../static/btnOtm.png',
							text: '加班',
							toURl:"extrawork/extrawork"
						},
						{
							url: '../../../static/btnApyLean.png',
							text: '请假申请',
							toURl:"addLeave/addLeave"
						},
						{
							url: '../../../static/btnApyOtm.png',
							text: '加班申请',
							toURl:"addExtraWork/addExtraWork"
						},
						
						
					]
	            }
	
	        }
	    }
	
	
</script>

<style scoped>
  .main{
	  border: 1px solid #ddd;border-radius: 20upx;overflow: hidden;
	 margin: 15upx;
  }
</style>
