<template>
	<view>
		neibu
	</view>
</template>

<script>
   import {getHandle} from "../../../../common/api.js"
	export default {
		data() {
			return {

			}
		},
		methods: {

		},
		onLoad(option) {
			console.log(option)
           getHandle('template/form/default.wf',{
               "dataid":option.id,
               "formId":"HZ308da46f32f907016f369e52422821"
           }).then(res=>{
               console.log(res)
           })

		}
	}
</script>

<style>

</style>
