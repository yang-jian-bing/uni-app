<template>
	<view>
		<web-view :src="url"></web-view>
	</view>
</template>

<script>
   import {getHandle,getToken} from "../../../common/api.js"
	export default {
		data() {
			return {
                   url:"http://www.ylibi.com/horizon/horizon/template/form/default.wf?formId=HZ308da46f32f907016f369e52422827"
			}
		},
		methods: {

		},
		onLoad(option) {
             this.url=this.url+"&dataid="+option.id+"&accessToken="+getToken()

		}
	}
</script>

<style>

</style>
