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
							text: '监管列表',
							toURl:"aqlist"
						},
						{
							url: '../../../static/btnOtm.png',
							text: '监管添加',
							toURl:"addaq"
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
