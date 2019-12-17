<template>
	<view>
		<view class="top">
            <view class="search mui-input-row">
                <img src="../../../static/property/search.png" />
                <input type="text" class="mui-input-clear" placeholder="搜索">
            </view>

            <!-- 待使用 -->
            <view class="joiList">
                <view class="serBox serindWid">
					 <view class='chouList'>
						 <view class="propFlex">
							 <p  class="actWz proFont">物业费</p>
							<span class="invmidWz">应收：￥50.00&nbsp;&nbsp;应缴：￥50.00</span>
						</view>
						 <div class='infotit serwz'>
						    <img class='no-width' src="../../../static/property/No.png" alt="">
						    cf243456765
						</div>
					</view>
                    <view class='weWzpad'>
                        <p class='font14'>租户：杨凌农业云</p>
                        <p class='font14'>费用时间：2019-10-12<span class='invmidWz'>&nbsp;~&nbsp;</span>2019-12-12</p>
                        <p class='font14'>资源：创业大厦A座</p>
                    </view>
                    <view class="label projectBox flex-end">
                        <text href="">终止缴费</text>
						<text href="">支付记录</text>
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
.infotit {
    display: flex;
    align-items: center;
}

</style>
