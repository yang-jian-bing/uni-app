<template>
	<view>
		 <web-view :src="url"></web-view>
	</view>
</template>

<script>
    import {
        getHandle,getToken
    } from "../../../common/api.js"
	export default {
		data() {
			return {
                  url:"http://www.ylibi.com/horizon/horizon/workflow/support/open.wf?flowId=swlc"
			}
		},
		methods: {

		},
        onLoad() {
             this.url=this.url+option.workid+"&accessToken="+getToken();
        }
	}
</script>

<style>

</style>
