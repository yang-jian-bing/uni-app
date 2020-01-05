<template>
	<view class=""   >
		 <web-view :src="url"  style="height: 100%;">

		 </web-view>

	</view>
</template>

<script>
      export default{
          data(){
              return{
                  accessToken:"",
                   url:"http://www.ylibi.com/horizon/horizon/module/view/horizon.view.jsp?isprotocolpage=true&viewId=HZ2882c0581ed27d01581f369b45007d",

              }
          },
          onLoad() {
                 // console.log(this.accessToken)
                 var that=this;

                     uni.getStorage({
                          key: 'userdata',
                          success: function (res) {
                           
                            that.url+"&accessToken="+res.data.accessToken_decode
                          }
                      });



          },
          methods:{

          }
      }
</script>

<style>
</style>
