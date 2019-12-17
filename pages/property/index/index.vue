<template>
	<view class="content">
		<view>
			<button @click="open('facilities-maintain-details/facilities-maintain-details')">设施维修详情</button>
			<button @click="open('facilities-maintain-list/facilities-maintain-list')">设施维修记录</button>
			<button @click="open('facilities-manage-list/facilities-manage-list')">设施管理</button>
			<button @click="open('repairs-details/repairs-details')">报修详情</button>
			<button @click="open('add-repairs/add-repairs')">新增报修</button>
        </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {
			open(page){
				uni.navigateTo({
				url: '../'+page,
				})
			}
		}
	}
</script>

<style>


</style>
