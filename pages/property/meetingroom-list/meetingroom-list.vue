<template>
    <view>
        <view class="top">
            <view class="search mui-input-row">
                <uni-search-bar radius="100" placeholder="请输入" @confirm="onSearch" style="80%" />
            </view>

            <!-- 待使用 -->
            <view class="joiList" v-for="(item,index) in details" :key="index">
                <view class="serBox serindWid">
                    <view class="propFlex serDrop">
                        <p class="comWaiting">{{item.useStatus==0? '待使用':(item.useStatus==1? '已使用':( item.useStatus==2? '已取消':''))}}</p>
                        <span class="invmidWz">预计时长：{{item.planHours}}h&nbsp;&nbsp;预计收费：￥{{item.originalMoney}}</span>
                    </view>
                    <navigator :url="'/pages/property/meetingroom-details/meetingroom-details?parkResourcesName='+item.parkResourcesName+'&meetingTopic='+item.meetingTopic+'&companyName='+item.companyName+'&reserveTime='+item.reserveTime+'&contactMan='+item.contactMan+'&contactPhone='+item.contactPhone+'&meetingAddress='+item.meetingAddress+'&remark='+item.remark"
                        hover-class="navigator-hover">
                    <span class="actWz proFont">{{item.parkResourcesName}}</span>
                    <view class='weWzpad'>
                        <p class='font14'>会议主题：{{item.meetingTopic}}</p>
                        <p class='font14'>预定时间：{{item.reserveTime}}</p>
                        <p class='font14'>联系人信息：{{item.contactMan}} {{item.contactPhone}}</p>
                    </view>
                    </navigator>
                    <view class="label projectBox flex-end">
                        <text href="">取消会议</text>
                    </view>
                </view>
            </view>
            <view class="example-body">
                <uni-load-more :status="status" />
            </view>


        </view>
    </view>
</template>

<script>
    import {
        meetingList
    } from '../../../api/lihao.js'
    import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue'
    import uniSearchBar from '@/components/uni-search-bar/uni-search-bar.vue'
    import {
        timerZero
    } from '@/common/util.js';
    export default {
        components: {
            uniLoadMore,
            uniSearchBar,
        },
        data() {
            return {
                details: [],
                searchHeader: '',
                searchVal: "",
                obj: {
                    limit: 3,
                    page: 1
                },
                status: 'more'
            };
        },
        onLoad() {
            this.init()
        },
        methods: {
            // 搜索

            onSearch(val) {
                this.details = []
                this.obj = {
                    limit: 3,
                    page: 1
                }
                this.searchVal = val.value
                this.init()
            },
            // 初始化
            init() {
                this.$minApi.meetingList({
                    parkResourcesName: this.searchVal,
                    ...this.obj
                }).then(res => {
                    const list = res.body
                    const totalNum = list.totalNum
                    for (let s of list.data) {
                        s.reserveTime = timerZero(s.reserveTime)
                        this.details.push(s)
                    }
                    console.log(this.details)
                    if (this.obj.page * 3 > totalNum) {
                        this.status = 'noMore'
                    } else {
                        this.obj.page++
                    }
                }).catch(err => {
                    console.log(err)
                })
            },
            //上拉事件
            onReachBottom() {
                if (this.status === 'more') {
                    this.init()
                }
            },
        }

    }
</script>

<style>
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
        font-size: 16px;
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
</style>
