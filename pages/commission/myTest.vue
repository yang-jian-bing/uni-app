<template>
	<view class=""   >
		 <web-view :src="url"  >

		 </web-view>

	</view>
</template>

<script>
      export default{
          data(){
              return{
                  accessToken:"",
                   url:"http://www.ylibi.com/horizon/horizon/workflow/support/open.wf?flowId=zcgzd"

              }
          },
          onLoad() {
                 // console.log(this.accessToken)
                 var that=this;

                     uni.getStorage({
                          key: 'userdata',
                          success: function (res) {
                             console.log(res);
                             that.accessToken=res.data.accessToken
                             that.url=that.url+"&accessToken="+res.data.accessToken
                          }
                      });



          },
          methods:{

          }
      }
</script>

<style>
</style>
