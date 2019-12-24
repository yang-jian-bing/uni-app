<template>
    <view>
        <view class="top">
            <view class="chouList" v-for="(item,index) in details" :key="index">
                <navigator :url="'/pages/property/payment-details/payment-details?payee='+item.payee+'&amount='+item.amount+'&typeName='+item.typeName+'&channel='+item.channel+'&orderNo='+item.orderNo+'&created='+item.created"
                    hover-class="navigator-hover">
                    <view class="propFlex invdiff">
                        <p class="actWz proFont">订单号：{{item.orderNo}}</p>
                        <span class="comWaiting">￥{{item.amount}}</span>
                    </view>
                    <p class="serwz mytuiPad">缴费时间：{{item.created}}</p>
                </navigator>
            </view>

        </view>
    </view>
</template>

<script>
    import {
        payRecord
    } from '@/api/lihao.js'
    import {
        timerZero
    } from '@/common/util.js';
    export default {

        data() {
            return {
                details: [],
            };
        },
        onLoad() {
            this.init()
        },
        methods: {
            init() {
                this.$minApi.payRecord({
                    id: '1d76f05d-8406-41f3-bcb5-b0d6cd19aa45',
                }).then(res => {
                    this.details = res.body.data
                    this.details.map(items => {
                        items.created = timerZero(items.created)
                    })
                }).catch(err => {
                    console.log(err)
                })
            },
        }
    }
</script>

<style>
    .top {
        width: 100%;
        background: #fff;
    }


    .line {
        width: 100%;
        height: 10px;
        background: #eeeeee;
    }

    .serwz {
        font-size: 14px;
        color: #898989;
        line-height: 25px;
    }

    .toptit {
        font-size: 15px;
        margin: 0px 15px 10px 15px;
        padding-top: 14px;
        color: #333333;
    }

    .topmid {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 15px 6px;
    }

    .topwz {
        font-size: 13px;
        color: #898989;
    }

    .diff {
        padding: 0;
    }

    .infor {
        margin: 0 15px 0px 20px;
        border-bottom: 1px solid #eeeeee;
    }

    .actMid {
        display: flex;
        padding: 15px 0;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        margin: 0px 15px;
        border-bottom: 1px solid #eeeeee;
    }

    .myBorder {
        margin: 0;
        padding: 15px;
    }

    .invmidWz {
        font-size: 15px;
        color: #1b1b1b;
    }

    .invmidWz1 {
        font-size: 15px;
        color: #555555;
    }

    .seleRight {
        width: 7px;
        height: 13px;
        margin-left: 10px;
    }

    .joiList {
        padding: 17px 15px 9px;
        display: flex;
    }

    .serBox {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .serindWid {
        width: 100%;
    }

    .propFlex {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .propFlex1 {
        display: flex;
        justify-content: space-between;
    }

    .num {
        font-size: 15px;
        color: #898989;
    }

    .invdiff {
        padding-top: 18px;
    }

    .comWaiting {
        color: #2B76FB;
        font-size: 16px;
    }

    .joiList {
        padding: 17px 15px 9px;
        display: flex;
    }

    .joiPad {
        padding: 15px 0;
        border-top: 1px solid #eeeeee;
        flex: 1;
    }

    .comFin {
        color: #5edba8;
        font-size: 15px;
    }

    .comNo {
        color: #ea595d;
        font-size: 15px;
    }

    .serDrop {
        padding-bottom: 10px;
    }

    .serDrop1 {
        padding-bottom: 5px;
    }

    .myserveWz {
        font-size: 18px;
        color: #898989;
    }

    .actWz {
        font-size: 14px;
        color: #333333;
    }

    .proFont {
        font-weight: 600;
    }

    .projectBox {
        margin-top: 5px;
    }

    .weWzpad {
        padding-top: 12px;
    }

    .font14 {
        font-size: 14px;
        color: #898989;
    }

    .myPadtop {
        padding-top: 5px;
    }

    .chouList {
        padding: 0 15px;
        border-bottom: 2px solid #eee;
    }

    .mytuiPad {
        padding: 10px 0;
    }
</style>
