<template>
	<view>
	
		<view class="list">
			<zc-grid :list="imgList"  @goTo="add"></zc-grid>
		</view>


	</view>
</template>

<script>
	import zcGrid from '@/components/zc-grid/zc-grid.vue'
	export default {
		data() {
			return {
                accessToken:"",
				imgList: [{
                        id:1,
						url: "../../static/btnNedtb.png",
						text: '待办',
						toURl:"http://www.ylibi.com/horizon/horizon/module/view/horizon.view.jsp?isprotocolpage=true&viewId=HZ2882c0581ed27d01581f369b45007d"
					},
					{
                        id:2,
						url: '../../static/btnProIon.png',
						text: '流程发起',
						 toURl:"http://www.ylibi.com/horizon/horizon/module/view/horizon.view.jsp?isprotocolpage=true&viewId=HZ2882c0581ed27d01581f34ddd40071"
					},
					{
                        id:3,
						url: '../../static/btnReadyt.png',
						text: '已办理',
						 toURl:"http://www.ylibi.com/horizon/horizon/module/view/horizon.view.jsp?isprotocolpage=true&viewId=HZ2882c0581ed27d01581f37113d008a"
					},
                    // {
                    //     id:4,
                    // 	url: '../../static/btnOtm.png',
                    // 	text: '加班申请测试',
                    // 	toURl:"http://www.ylibi.com/horizon/horizon/module/view/horizon.view.jsp?isprotocolpage=true&viewId=HZ2882c0581ed27d01581f37113d008a"
                    // },



				]
			}
		},
		components:{
		    'zc-grid':zcGrid,
		},
        onLoad() {

        },
		methods: {

         add(data){
             let accessToken=null;
             uni.getStorage({
                 key: 'userdata',
                 success: function (res) {
                    
                     accessToken=res.data.accessToken

                 }
             });
            switch(data.id){
                case 1:
                uni.navigateTo({
                    url:"commissiondetail"
                })
                break;
                case 2:
                uni.navigateTo({
                    url:"myLaunch"
                })
                break;
                case 3:
                uni.navigateTo({
                    url:"myManage"
                })
                break;
                case 4:
                uni.navigateTo({
                    url:"myTest"
                })
            }

           
         }
		}
	}
</script>

<style>
	.list{
		border: 1px solid #ddd;border-radius: 20upx;overflow: hidden;
		margin-top: 10upx;
	}
	.topmid {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 15px 6px 25px;
	}

	.wePosition {
		position: relative;
	}

	.serindPad {
		padding-top: 12px;
		padding-right: 15px;
		padding-left: 15px;
		padding-bottom: 0px;
	}

	.indexnewBor {
		width: 5px;
		height: 20px;
		background: #1e65e2;
		position: absolute;
	}

	.index-bg {
		height: 145px;
		position: relative;
		background:url(../../static/index-bg.png);
		background-size:cover;
	}

	.serindexWz {
		font-size: 15px;
		font-weight: 600;
		color: #000;
		position: relative;
		z-index: 6;
	}

	.index-padleft {
		padding-left: 20px;
	}

	.index-flex {

	}

	.index-flex p {
		font-size: 16px;
		color: rgba(255, 255, 255, 1);
	}

	.index-flex span {
		font-size: 12px;
		color: rgba(255, 255, 255, 1);
		margin-left: 10px;
	}

	.outlogin {
		width: 76px;
		height: 25px;
		line-height: 23px;
		text-align: center;
		background: rgba(255, 255, 255, 1);
		border: 1px solid rgba(247, 247, 247, 1);
		opacity: 0.8;
		border-radius: 14px;
		font-size: 13px;
		font-weight: 400;
		color: rgba(65, 120, 255, 1);
	}

	.pdt50 {
		padding-top: 50px;
	}

	.index-login {
		font-size: 19px;
		font-weight: 400;
		color: rgba(255, 255, 255, 1);
		padding-left: 15px;
	}

	.index-box {
		margin: 15px;
		width: 346px;
		box-shadow: 0px 6px 9px 0px rgba(194, 194, 194, 0.67);
		border-radius: 13px;
		margin-bottom: 10px;
	}

	.index-body {
		width: 100%;
	}

	.index-pdt {
		padding: 15px 0;
	}

	.index-img {
		width: 42px;
		height: 42px;
	}

	.index-right {
		width: 11px;
		height: 20px;
	}

	.dropdone {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 15px 15px 6px;
	}

	.drop1 {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		color: #333333;
		font-size: 17px;
		background: #fff;
	}

	.serteachWz {
		font-size: 13px;
		color: #000;
		text-align: center;
	}
</style>
