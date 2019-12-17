<template>
	<view>
		  <div class="top cansaiBox">
            <div class="actMid myBorder">
                <span class="invmidWz">联系人</span>
                <div class="topmid diff">
                    <div class="topmid diff">
                        <input placeholder="请输入联系人" />
                    </div>
                </div>
            </div>
            <div class="actMid myBorder">
                <span class="invmidWz">联系电话</span>
                <div class="topmid diff">
                    <div class="topmid diff">
                        <input placeholder="请输入联系电话" />
                    </div>
                </div>
            </div>
            <div class="actMid myBorder">
                <span class="invmidWz">会议主题</span>
                <div class="topmid diff">
                    <div class="topmid diff">
                        <input placeholder="请输入会议主题" />
                    </div>
                </div>
            </div>
            <div class="actMid myBorder">
                <span class="invmidWz">单位名称</span>
                <div class="topmid diff">
                    <div class="topmid diff">
                        <input placeholder="请输入单位名称" />
                    </div>
                </div>
            </div>
            <div class="actMid myBorder">
                <span class="invmidWz">预定日期</span>
                <div class="topmid diff">
                    <div class="topmid diff showUserPicker" id="showUserPicker">
                        <input placeholder="请选择日期" />
                    </div>
                </div>
            </div>
            <p class="myBorder">已被预定2019-10-09</p>
            <div class="actMid myBorder">
                <span class="invmidWz">使用时间</span>
                <div class="topmid diff">
                    <span class="num showUserPicker" id="showUserPicker1">请选择时间1</span>
                    <span class="num actbox">~</span>
                    <span class="num showUserPicker" id="showUserPicker2">请选择时间2</span>
                </div>
            </div>
            <div class="myBorder">
                <span class="invmidWz">备注</span>
                <textarea class="projectBox invmidWz" cols="50" rows="3" placeholder="如果你有额外需求，请备注在这里！"></textarea>

            </div>
        </div>
        <!-- 底部 -->
        <div class="serBuy ansPos serindWid">
            提交
        </div>
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
/* 我提交的参赛申请 */
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
p {
    font-size: 14px;
    color: #8f8f94;
}
.serBuy {
    width: 75%;
    background: #1e65e2;
    color: #fff;
    font-size: 16px;
    line-height: 51px;
    text-align: center;
}
.ansPos {
    position: fixed;
    bottom: 0;
}
.serindWid {
    width: 100%;
}
</style>
