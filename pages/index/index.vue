<template>
	<view class="content">

		 <view class="conten-top" >
		 	  <span >首页</span>
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
					{imgUrl:'../../static/btnSafepro.png',name:"安全生产管理",url:"../view/aqscgl/aqscgl"},
					{imgUrl:'../../static/btnFinance.png',name:"财务管理",url:"../view/cwgl/cwgl"},
					{imgUrl:'../../static/btnArchives.png',name:"档案管理",url:"../view/dagl/dagl"},
					{imgUrl:'../../static/btnPtybdg.png',name:"党建管理",url:"../view/djgl/djgl"},
					{imgUrl:'../../static/btnDocument.png',name:"公文管理",url:"../view/gwgl/gwgl"},
					{imgUrl:'../../static/btnContract.png',name:"合同管理",url:"../view/htgl/htgl"},
					{imgUrl:'../../static/btnCheck.png',name:"考勤管理",url:"../view/kqgl/kqgl"},
					{imgUrl:'../../static/btnProject.png',name:"项目管理",url:"../view/xmgl/xmgl"},
					{imgUrl:'../../static/btnRecruit.png',name:"招聘管理",url:"../view/zpgl/zpgl"},
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
	}
	.content .card{
		width: 690upx;
		height: 370upx;
		background: #fff;
		position: absolute;
		top:150upx;
		border: 1upx solid #eee;
		border-radius: 20upx;
		box-shadow:4upx 4upx 7upx  #999;
		background:url(../../static/rotImga.png);
		background-size:cover;
	}
    .conten-top{
		width: 100%;
		height: 300upx;
		background: #467BEB;
		text-align: center;
		font-size: 20px;
		color: #fff;
	}
	.content-main{
		width: 100%;
		height: 900upx;
		background: #fff;
	}
	.content-main .grid{
		margin-top: 250upx;
	}



</style>
