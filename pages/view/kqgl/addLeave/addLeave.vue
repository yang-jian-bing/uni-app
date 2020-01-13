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
        onLoad(option) {
             this.url="http://www.ylibi.com/horizon/horizon/workflow/support/open.wf?flowId=HZ8080816e3a12ee016e3fdbae1d0096&accessToken="+getToken();
        }
	}
</script>

<style>

</style>
