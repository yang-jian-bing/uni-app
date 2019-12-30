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
                   datalist:"",
                   url:"http://www.ylibi.com/horizon/horizon/workflow/support/open.wf?workId="
			}
		},
		methods: {

		},
        onLoad(option) {
            // console.log(getToken())

             this.url=this.url+option.workid+"&accessToken="+getToken();


        }
	}
</script>

<style>

</style>
