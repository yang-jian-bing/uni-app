<template>
	<view class="content">
		<view>
			<button @click="open('facilities-maintain-details/facilities-maintain-details')">设施维修详情</button>
			<button @click="open('facilities-maintain-list/facilities-maintain-list')">设施维修记录</button>
			<button @click="open('facilities-manage-list/facilities-manage-list')">设施管理</button>
			<button @click="open('repairs-details/repairs-details')">报修详情</button>
			<button @click="open('add-repairs/add-repairs')">新增报修</button>
			<button @click="open('repairs-list/repairs-list')">报事报修</button>
			<button @click="open('add-meetingroom/add-meetingroom')">会议室预定</button>
			<button @click="open('meetingroom-details/meetingroom-details')">会议室预定详情</button>
			<button @click="open('payment-details/payment-details')">缴费详情</button>
			<button @click="open('contract-manage/contract-manage')">合同列表</button>
			<button @click="open('cost-query-details/cost-query-details')">费用详情</button>
			<button @click="open('customer-archives/customer-archives')">客户档案</button>
			<button @click="open('office-list/office-list')">办公室平面图</button>
			<button @click="open('login/login')">登录</button>
			<button @click="open('meetingroom-list/meetingroom-list')">会议室预定列表</button>
			<button @click="open('payment-records/payment-records')">缴费记录</button>
			<button @click="open('daily-charge/daily-charge')">日常收费</button>
			<button @click="open('office-details/office-details')">办公室详情</button>
        </view>
	</view>
</template>

<script>
    import base from '@/common/app-base.js'

	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {
			open(url){
				base.openPage(url);
			}
		}
	}
</script>

<style>


</style>
