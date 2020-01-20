<template>
	<view class="content">

		 <view class="conten-top" >

		 </view>
		 <view class="card"></view>
	   <view class="content-main">
		    <view class="grid">
		    	<graid  :gridList="gridList"></graid>
		    </view>

	   </view>

	</view>
</template>

<script>
	import graid from "../../components/zy-grid/zy-grid.vue"
	export default {
		data() {
			return {
				gridList:[
                    {imgUrl:'../../static/btnProIon.png',name:"我的请求",url:"../commission/myLaunch"},
                      {imgUrl:'../../static/btnReadyt.png',name:"已办流程",url:"../commission/myManage"},
					{imgUrl:'../../static/btnSafepro.png',name:"安全生产管理",url:"../view/aqscgl/aqlist"},
					{imgUrl:'../../static/btnFinance.png',name:"财务管理",url:"../view/cwgl/cwgl"},

					{imgUrl:'../../static/btnPtybdg.png',name:"党建管理",url:"../view/djgl/djgl"},
					{imgUrl:'../../static/btnDocument.png',name:"采购管理",url:"../view/gwgl/gwgl"},
					{imgUrl:'../../static/btnContract.png',name:"合同管理",url:"../view/htgl/htlist"},
					{imgUrl:'../../static/btnCheck.png',name:"考勤管理",url:"../view/kqgl/kqgl"},
					{imgUrl:'../../static/btnProject.png',name:"项目管理",url:"../view/xmgl/xmgl"},
					{imgUrl:'../../static/btnRecruit.png',name:"招聘管理",url:"../view/zpgl/zpgl"},
                    {imgUrl:'../../static/proPre.png',name:"物业管理",url:"../property/property-index/property-index"},

				]
			}
		},
		components:{graid},
		onLoad() {
             console.log(document)
		},
		methods: {

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		position: relative;
        overflow: hidden;
	}
	.content .card{
		width: 690upx;
		height: 370upx;
		background: #fff;
		position: absolute;
		top:40upx;
		border: 1upx solid #eee;
		border-radius: 20upx;
		box-shadow:4upx 4upx 7upx  #999;
		background-image:url("~@/static/rotImgaa.gif");
		 background-size: cover;
		 background-position: 10% 10%;
	}
    .conten-top{
		width: 100%;
		height: 200upx;
		background: #467BEB;
		text-align: center;
		font-size: 20px;
		color: #fff;
	}
	.content-main{
		width: 100%;
		height: 1200upx;
		background: #fff;
	}
	.content-main .grid{
		margin-top: 250upx;
	}



</style>
