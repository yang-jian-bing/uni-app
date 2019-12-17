<template>
	<view>
		<view class="top cansaiBox wishBox">
            <view class="actMid myBorder">
                <span class="invmidWz">报修人</span>
                <view class="topmid diff">
                    <view class="topmid diff">
                        <input placeholder="请输入报修人姓名" />
                    </view>
                </view>
            </view>
            <view class="actMid myBorder">
                <span class="invmidWz">联系电话</span>
                <view class="topmid diff">
                    <view class="topmid diff">
                        <input placeholder="请输入联系电话" />
                    </view>
                </view>
            </view>
			
            <view class="actMid myBorder">
                <span class="invmidWz">地址</span>
                <view class="topmid diff">
                    <view class="topmid diff showUserPicker" id="showUserPicker">
                        <input placeholder="请选择地址" />
                    </view>
                </view>
            </view>
			 <view class="actMid myBorder">
			    <span class="invmidWz">报修来源</span>
			    <view class="topmid diff">
			        <view class="topmid diff showUserPicker" id="showUserPicker">
			            <input placeholder="请选择报修来源" />
			        </view>
			    </view>
			</view>
            <view class="actMid myBorder">
                <span class="invmidWz">园区类型</span>
                <view class="topmid diff">
                    <view class="topmid diff showUserPicker" id="showUserPicker1">
                        <!-- <input placeholder="请选择园区类型" /> -->
                        <span class='num'>请选择园区类型</span>
                    </view>
                </view>
            </view>
            <view class="actMid myBorder">
                <span class="invmidWz">报修类型</span>
                <view class="topmid diff">
                    <view class="topmid diff showUserPicker" id="showUserPicker2">
                        <!-- <input placeholder="请选择报修类型" /> -->
                        <span class='num'>请选择报修类型</span>
                    </view>
                </view>
            </view>
			 <view class="actMid myBorder">
			    <span class="invmidWz">报修日期</span>
			    <view class="topmid diff">
			        <view class="topmid diff showUserPicker" id="showUserPicker2">
			            <!-- <input placeholder="请选择报修日期" /> -->
			            <span class='num'>请选择报修日期</span>
			        </view>
			    </view>
			</view>
            <view class="myBorder">
                <span class="invmidWz">报修详情</span>
                <textarea class="projectBox" cols="50" rows="3" placeholder="请输入报修详情"></textarea>

            </view>
        </view>
        <!-- 底部 -->
        <view class="serBuy ansPos serindWid">
            提交
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
.cansaiBox input {
    border: none;
    text-align: right;
    font-size: 15px;
    color: #1b1b1b;
    background: #fff;
    height: 20px;
}

.cansaiBox input[type="number"] {
    -moz-appearance: textfield;
}

.cansaiBox input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none !important;
}

.cansaiBox input::placeholder {
    text-align: right;
    font-size: 15px;
    font-size: #898989;
}
.wishBox {
    margin-bottom: 80px;
}
.myBorder textarea::-webkit-input-placeholder {
    color: rgba(137, 137, 137, 1);
    font-size: 15px;
}

.myBorder textarea {
    font-size: 15px;
    color: #1b1b1b;
}
.myBorder {
    margin: 0;
    padding: 15px;
}
.serindWid {
    width: 100%;
}
</style>
