<template>
    <view>
        <view class="joiList">
            <view class="serBox serindWid">
                <view class='chouList'>
                    <view class="propFlex">
                        <p class="actWz proFont">物业费</p>
                        <span class="invmidWz">应收：￥50.00&nbsp;&nbsp;应缴：￥50.00</span>
                    </view>
                    <div class='infotit serwz'>
                        <image class='no-width' src="../../../static/property/No.png" alt="">
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
        <view class="example-body">
            <uni-load-more :status="status" />
        </view>
    </view>
</template>

<script>

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
            this.init()
        },
        methods: {

            init() {
                console.log(111)
                this.$minApi.dayPay({
                    // payStatus: 0,
                    ...this.obj
                }).then(res => {
                    console.log(res)
                    const list = res.body
                    const totalNum = list.totalNum
                    for (let s of list.data) {
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
                    this.init()
                }
            },
        },

    }
</script>

<style>
</style>
