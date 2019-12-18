<template>
    <view>
        <view class="uni-padding-wrap uni-common-mt">
            <form @submit="formSubmit" @reset="formReset">
                <view class="uni-form-item uni-column">
                    <view class="title">维修时间(必填)</view>
                    <input ref="scanTextbox" class="uni-input" v-model="date" name="repairDate" @focus="open" />
                    <!-- <view class="example-body">
                        <button class="calendar-button" type="button" @click="open">打开日历</button>
                    </view> -->
                    <uni-calendar ref="calendar" :date="info.date" :insert="info.insert" :lunar="info.lunar" :startDate="info.startDate"
                        :endDate="info.endDate" :range="info.range" @confirm="confirm" />
                </view>
                <view class="uni-form-item uni-column">
                    <view class="title">维修人员(必填)</view>
                    <input class="uni-input" name="repairPersion" placeholder="请输入姓名" />
                </view>
                <view class="uni-form-item uni-column">
                    <view class="title">维修费用(必填)</view>
                    <input class="uni-input" name="repairPrice" placeholder="请输入维修费用" />
                </view>
                <view class="uni-form-item uni-column">
                    <view class="title">维修项目(必填)</view>
                    <input class="uni-input" name="repairProject" placeholder="请输入项目" />
                </view>
                <view class="uni-form-item uni-column">
                    <view class="title">维修工时(必填)</view>
                    <input class="uni-input" name="repairTime" placeholder="请输入维修工时" />
                </view>
                <view class="uni-btn-v">
                    <button form-type="submit">提交</button>
                    <button type="default" form-type="reset">重置</button>
                </view>
            </form>
        </view>
    </view>
</template>
<script>
    var graceChecker = require("../../../common/graceChecker.js");
    import uniCalendar from '@/components/uni-calendar/uni-calendar.vue'
    import {
        nowDate
    } from "@/common/util.js"
    export default {
        data() {
            return {
                info: {
                    date: nowDate(),
                    lunar: true,
                    range: true,
                    insert: false,
                    selected: []
                },
                date: ''
            }
        },
        components: {
            uniCalendar
        },
        methods: {
            open() {
                this.$refs.scanTextbox.setAttribute('readonly', 'readonly');
                setTimeout(() => {
                    this.$refs.scanTextbox.removeAttribute('readonly');
                    this.$refs.calendar.open()
                }, 200);
            },
            formSubmit: function(e) {
                console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.detail.value))
                //定义表单规则
                var rule = [{
                        name: "repairDate",
                        checkType: "date",
                        errorMsg: "请选择时间或者确定时间格式(YYYY-MM-DD)"
                    },
                    {
                        name: "repairPersion",
                        checkType: "notnull",
                        errorMsg: "请输入姓名"
                    },
                    {
                        name: "repairPrice",
                        checkType: "float",
                        errorMsg: "请输入价格(允许保留两位小数点)"
                    },
                    {
                        name: "repairTime",
                        checkType: "notnull",
                        errorMsg: "请输入工时"
                    },
                    {
                        name: "repairProject",
                        checkType: "notnull",
                        errorMsg: "请输入项目"
                    }
                ];
                //进行表单检查
                var formData = e.detail.value;
                var checkRes = graceChecker.check(formData, rule);
                if (checkRes) {
                    uni.showToast({
                        title: "验证通过!",
                        icon: "none"
                    });
                } else {
                    uni.showToast({
                        title: graceChecker.error,
                        icon: "none"
                    });
                }
            },
            formReset: function(e) {
                console.log('清空数据')
            },
            confirm(e) {
                console.log('confirm 返回:', e)
                this.date = e.fulldate
            }
        }
    }
</script>

<style>
    .uni-form-item .title {
        padding: 20rpx 0;
    }
</style>
