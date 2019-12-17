<template>
	<view>
		  <div class="top cansaiBox">
            <div class="actMid myBorder">
                <span class="invmidWz">维修人员</span>
                <div class="topmid diff">
                    <div class="topmid diff">
                        <input placeholder="请输入维修人员" />
                    </div>
                </div>
            </div>
            <div class="actMid myBorder">
                <span class="invmidWz">维修费用</span>
                <div class="topmid diff">
                    <div class="topmid diff">
                        <input placeholder="请输入维修费用" />
                    </div>
                </div>
            </div>
            <div class="actMid myBorder">
                <span class="invmidWz">维修项目</span>
                <div class="topmid diff">
                    <div class="topmid diff">
                        <input placeholder="请输入维修项目" />
                    </div>
                </div>
            </div>
            <div class="actMid myBorder">
                <span class="invmidWz">维修工时</span>
                <div class="topmid diff">
                    <div class="topmid diff">
                        <input placeholder="请输入维修工时" />
                    </div>
                </div>
            </div>
            <div class="actMid myBorder">
                <span class="invmidWz">维修日期</span>
                <div class="topmid diff">
                    <div class="topmid diff showUserPicker" id="showUserPicker">
                        <input placeholder="请选择维修日期" />
                    </div>
                </div>
            </div>
            
            <div class="myBorder">
                <span class="invmidWz">故障情况</span>
                <textarea class="projectBox invmidWz" cols="50" rows="3" placeholder="请输入故障情况"></textarea>
            </div>
			<div class="myBorder">
			    <span class="invmidWz">处理情况</span>
			    <textarea class="projectBox invmidWz" cols="50" rows="3" placeholder="请输入处理情况"></textarea>
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
