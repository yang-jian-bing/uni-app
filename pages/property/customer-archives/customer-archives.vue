<template>
    <view>
        <view class="top">
            <view class="search mui-input-row">
                <image src="../../../static/property/search.png" />
                <input type="text" class="mui-input-clear" placeholder="搜索" v-model="searchHeader" @input="serchList">
            </view>
            <view class="joiList" v-for="(item, index) in details" :key="index">
                <view class="serBox serindWid">
                    <span class="actWz proFont">{{item.name}}</span>
                    <view class='weWzpad'>
                        <p class='font14'>证件信息：{{item.idCard}}</p>
                        <p class='font14'>联系人信息：{{item.contacts}} ({{item.contactPhone}})</p>
                    </view>

                    <view class="label projectBox flex-end">
                        <navigator :url="'/pages/property/contract-manage/contract-manage?id='+item.userAccId"
                            hover-class="navigator-hover">
                            <text href="">合同管理</text>
                        </navigator>
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
        userRecord
    } from '../../../api/lihao.js'
    import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue'
    export default {
        components: {
            uniLoadMore
        },
        data() {
            return {
                details: [],
                searchHeader: '',
                obj: {
                    limit: 4,
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
            serchList() {
                this.init()
            },
            // 初始化
            init() {
                this.$minApi.userRecord({
                    type: 'list',
                    trueName: this.searchHeader,
                    ...this.obj
                }).then(res => {
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
                    this.init()
                }
            },
        }

    }
</script>

<style>

</style>
