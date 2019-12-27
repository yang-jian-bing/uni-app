<template>
	<view class="warp">
		<view class="example-body">
			<uni-grid  :show-border="false" :square="false" :highlight="false" @change="change">
				<uni-grid-item :hor="0" :ver="0" marker="badge" type="error" text="12" v-for="item in list" :key="item.id">
					<image class="image" :src="item.url" mode="aspectFill" @click="webTo(item)" />
					<text class="text">{{item.text}}</text>
				</uni-grid-item>
			</uni-grid>
		</view>
	</view>
</template>

<script>
	import uniGrid from '@/components/zc-grid-wrap/zc-grid-wrap.vue'
	import uniGridItem from '@/components/zc-grid-item/zc-grid-item.vue'
	export default {
		components: {
			uniGrid,
			uniGridItem
		},
		props:{
			list:{
				type:Array,
				default:function () {
					return []
				}
			}
		},
		data() {
			return {
				// list: [{
				// 		url: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg',
				// 		text: 'Grid 1'
				// 	},
				// 	{
				// 		url: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg',
				// 		text: 'Grid 2'
				// 	},
				// 	{
				// 		url: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg',
				// 		text: 'Grid 3'
				// 	},
				// 	{
				// 		url: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg',
				// 		text: 'Grid 4'
				// 	},
				// 	{
				// 		url: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg',
				// 		text: 'Grid 5'
				// 	},
				// 	{
				// 		url: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg',
				// 		text: 'Grid 6'
				// 	},
				// 	{
				// 		url: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg',
				// 		text: 'Grid 7'
				// 	},
				// 	{
				// 		url: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg',
				// 		text: 'Grid 8'
				// 	},
				// 	{
				// 		url: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg',
				// 		text: 'Grid 9'
				// 	}
				// ]
			}
		},
		methods: {
			change(e) {
				let {
					index
				} = e.detail
				
			},
			webTo(item) {
				this.$emit('goTo',item)
			}
		}
	}
</script>

<style>
	/* 头条小程序组件内不能引入字体 */
	/* #ifdef MP-TOUTIAO */
	@font-face {
		font-family: uniicons;
		font-weight: normal;
		font-style: normal;
		src: url('~@/static/uni.ttf') format('truetype');
	}

	/* #endif */

	/* #ifndef APP-NVUE */
	page {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		background-color: #efeff4;
		min-height: 100%;
		height: auto;
	}

	view {
		font-size: 28rpx;
		line-height: inherit;
	}

	.example {
		padding: 0 30rpx 30rpx;
	}

	.example-info {
		padding: 30rpx;
		color: #3b4144;
		background: #ffffff;
	}

	.example-body {
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		padding: 0;
		font-size: 14rpx;
		background-color: #ffffff;
	}

	/* #endif */
	.example {
		padding: 0 30rpx;
	}

	.example-info {
		/* #ifndef APP-NVUE */
		display: block;
		/* #endif */
		padding: 30rpx;
		color: #3b4144;
		background-color: #ffffff;
		font-size: 30rpx;
	}

	.example-info-text {
		font-size: 28rpx;
		line-height: 36rpx;
	}


	.example-body {
		flex-direction: column;
		padding: 30rpx;
		background-color: #ffffff;
	}

	.word-btn-white {
		font-size: 18px;
		color: #FFFFFF;
	}

	.word-btn {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		align-items: center;
		justify-content: center;
		border-radius: 6px;
		height: 48px;
		margin: 15px;
		background-color: #007AFF;
	}

	.word-btn--hover {
		background-color: #4ca2ff;
	}


	.image {
		width: 80rpx;
		height: 80rpx;
		margin-bottom: 20rpx;
		border-radius: 10rpx;
	}

	.text {
		font-size: 26rpx;
		line-height: 26rpx;
		text-align: center;
		width: 110rpx;
		white-space: nowrap;
		/* overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis; */
		color: #3A3C40;
	}

	.example-body {
		/* #ifndef APP-NVUE */
		display: block;
		/* #endif */
	}
</style>
