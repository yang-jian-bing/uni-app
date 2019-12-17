<template>
	<view>
		<view class="top">
		    <view class="search mui-input-row">
		        <img src="../../../../static/property/search.png" />
		        <input type="text" class="mui-input-clear" placeholder="搜索">
		    </view>
		
		    <!-- 待使用 -->
		    <view class="joiList">
		        <view class="serBox serindWid">
		            <view class='chouList'>
		            	 <view class="propFlex">
		            		<span class="actWz proFont">报修类型</span>
		            	    <span class="invmidWz">2019/11/12 10:23</span>
		            	</view>
		            	 <div class='infotit serwz'>
		            	    <img class='no-width' src="../../../../static/property/No.png" alt="">
		            	    13243456765
		            	</div>
		            </view>
		            <view class='weWzpad'>
		                <p class='font14'>报修人信息：王佩 15212341234</p>
		                <p class='font14'>报修人地点：创业大厦301室</p>
		                <p class='font14'>报修来源：手机报修</p>
		            </view>
		            <view class="label projectBox flex-end">
		                <text href="">编辑</text>
		            </view>
		        </view>
		    </view>
		    <view class="line"></view>
			<view class="joiList">
			    <view class="serBox serindWid">
					<view class='chouList'>
						 <view class="propFlex">
							<span class="actWz proFont">报修类型</span>
						    <span class="invmidWz">2019/11/12 10:23</span>
						</view>
						 <div class='infotit serwz'>
						    <img class='no-width' src="../../../../static/property/No.png" alt="">
						    13243456765
						</div>
					</view>
			        <view class='weWzpad'>
			            <p class='font14'>报修人信息：王佩 15212341234</p>
			            <p class='font14'>报修人地点：创业大厦301室</p>
			            <p class='font14'>报修来源：网上报修</p>
			        </view>
			    </view>
			</view>
			<view class="line"></view>
		    
		   
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style>
.no-width {
    width: 20px;
    height: 10px;
    margin-right: 3px;
}
.serwz {
    font-size: 14px;
    color: #898989;
    line-height: 25px;
}
</style>
