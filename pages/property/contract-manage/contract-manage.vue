<template>
    <view>
        <view class="top">
            <view class="joiList" v-for="(item,index) in details" :key='index'>
                <view class="serBox serindWid">
                    <view class="propFlex">
                        <p class="comWaiting">{{item.state==1?'执行中':'已终止'}}</p>
                    </view>
                    <view class='chouList'>
                        <view class="propFlex">
                            <span class="actWz proFont">{{item.contractName}}</span>
                        </view>
                        <div class='serwz'>
                            <image class='no-width' src="../../../static/property/No.png" alt="">
                        </div>
                    </view>

                    <view class='weWzpad'>
                        <p class='font14'>合同期限：{{item.startTime}}<span class='invmidWz'>&nbsp;~&nbsp;</span>{{item.endTime}}</p>
                        <p class='font14'>租赁信息：{{item.resourceName}}</p>
                    </view>
                </view>
            </view>
            <view class="example-body">
                <uni-load-more :status="status" />
            </view>
            <view class="line"></view>
        </view>

    </view>
</template>

<script>
    import {
        contractList
    } from '../../../api/lihao.js'
    import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue'
    export default {
        components: {
            uniLoadMore
        },
        data() {
            return {
                details: [],
                obj: {
                    limit: 3,
                    page: 1
                },
                status: 'more'
            };
        },
        onLoad(options) {
            this.$minApi.contractList({
                lesseeUserId: options.id,
                ...this.obj
            }).then(res => {
                console.log(res)
                const list = res.body
                const totalNum = list.totalNum
                for (let s of list.data) {
                    // s.repairDate = timerZero(s.repairDate)
                    this.details.push(s)
                }
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
                this.$minApi.contractList({
                    lesseeUserId: options.id,
                    ...this.obj
                }).then(res => {
                    console.log(res)
                    const list = res.body
                    const totalNum = list.totalNum
                    for (let s of list.data) {
                        // s.repairDate = timerZero(s.repairDate)
                        this.details.push(s)
                    }
                    if (this.obj.page * 3 > totalNum) {
                
                        this.status = 'noMore'
                    } else {
                        this.obj.page++
                    }
                }).catch(err => {
                    console.log(err)
                })
            }
        },
    }
</script>

<style>

</style>
