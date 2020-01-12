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
							text: '合同列表',
							toURl:"htlist"
						},
						{
							url: '../../../static/btnOtm.png',
							text: '合同添加',
							toURl:"addht"
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
