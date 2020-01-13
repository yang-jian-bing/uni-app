<template>
	<view>
		 <web-view :src="url"></web-view>
	</view>
</template>

<script>
    import {
        getHandle,getToken
    } from "../../../../common/api.js"
	export default {
		data() {
			return {
                  url:""
			}
		},
		methods: {

		},
        onLoad() {
             this.url="http://www.ylibi.com/horizon/horizon/workflow/support/open.wf?flowId=zcgzd&accessToken="+getToken();
        }
	}
</script>

<style>

</style>
