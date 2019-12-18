<template>
    <view>
        <view class="top">
            <view class="search mui-input-row">
                <uni-search-bar radius="100" placeholder="请输入" @confirm="onSearch" style="80%" />
            </view>
            <scroll-view id="tab-bar" class="scroll-h" :scroll-x="true" :show-scrollbar="false" :scroll-into-view="scrollInto">
                <view v-for="(tab,index) in tabBars" :key="tab.id" class="uni-tab-item" :id="tab.id" :data-current="index"
                    @click="ontabtap">
                    <text class="uni-tab-item-title" :class="tabIndex==index ? 'uni-tab-item-title-active' : ''">{{tab.name}}</text>
                </view>
            </scroll-view>
            <view class="line-h"></view>
            <swiper :current="tabIndex" class="swiper-box" style="flex: 1;" :duration="300" @change="ontabchange">
                <!-- 已缴费 -->
                <swiper-item class="swiper-item" v-if="tabIndex==0">
                    <await></await>
                </swiper-item>
            </swiper>

        </view>
    </view>
</template>

<script>
    import uniSearchBar from '@/components/uni-search-bar/uni-search-bar.vue'
    import Tabbar from '@/pages/template/tabbar/tabbar.nvue'
    import Await from './components/await.vue'
    export default {
        components: {
            uniSearchBar,
            Tabbar,
            Await
        },
        data() {
            return {
                tabIndex: 0,
                scrollInto: '',
                tabBars: [{
                    name: '待缴费',
                    id: '0'
                }, {
                    name: '欠费',
                    id: '1'
                }, {
                    name: '已缴费',
                    id: '2'
                }, {
                    name: '已终止',
                    id: '3'
                }],
            };
        },
        methods: {
            onSearch(val) {
                console.log(val)
            },
            ontabtap(e) {
                let index = e.target.dataset.current || e.currentTarget.dataset.current;
                console.log(e.currentTarget.dataset.current)
                this.tabIndex = e.currentTarget.dataset.current
            },
            ontabchange(e) {},

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

    /* #ifndef APP-PLUS */
    page {
        width: 100%;
        min-height: 100%;
        display: flex;
    }

    /* #endif */

    .tabs {
        flex: 1;
        flex-direction: column;
        overflow: hidden;
        background-color: #ffffff;
        /* #ifdef MP-ALIPAY || MP-BAIDU */
        height: 100vh;
        /* #endif */
    }

    .scroll-h {
        width: 750upx;
        height: 80upx;
        flex-direction: row;
        /* #ifndef APP-PLUS */
        white-space: nowrap;
        /* #endif */
        /* flex-wrap: nowrap; */
        /* border-color: #cccccc;
    	border-bottom-style: solid;
    	border-bottom-width: 1px; */
    }

    .line-h {
        height: 1upx;
        background-color: #cccccc;
    }

    .uni-tab-item {
        /* #ifndef APP-PLUS */
        display: inline-block;
        /* #endif */
        flex-wrap: nowrap;
        padding-left: 34upx;
        padding-right: 34upx;
        margin-right: 50upx;
    }

    .uni-tab-item-title {
        color: #555;
        font-size: 30upx;
        height: 80upx;
        line-height: 80upx;
        flex-wrap: nowrap;
        /* #ifndef APP-PLUS */
        white-space: nowrap;
        /* #endif */
    }

    .uni-tab-item-title-active {
        color: #007AFF;
    }

    .swiper-box {
        height: 218px;
        flex: 1;
    }

    .swiper-item {
        flex: 1;
        flex-direction: row;

    }

    .scroll-v {
        flex: 1;
        /* #ifndef MP-ALIPAY */
        flex-direction: column;
        /* #endif */
        width: 750upx;

    }

    .update-tips {
        position: absolute;
        left: 0;
        top: 41px;
        right: 0;
        padding-top: 5px;
        padding-bottom: 5px;
        background-color: #FDDD9B;
        align-items: center;
        justify-content: center;
        text-align: center;
    }

    .update-tips-text {
        font-size: 14px;
        color: #ffffff;
    }

    .refresh {
        width: 750upx;
        height: 64px;
        justify-content: center;
    }

    .refresh-view {
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: center;
    }

    .refresh-icon {
        width: 30px;
        height: 30px;
        transition-duration: .5s;
        transition-property: transform;
        transform: rotate(0deg);
        transform-origin: 15px 15px;
    }

    .refresh-icon-active {
        transform: rotate(180deg);
    }

    .loading-icon {
        width: 20px;
        height: 20px;
        margin-right: 5px;
        color: #999999;
    }

    .loading-text {
        margin-left: 2px;
        font-size: 16px;
        color: #999999;
    }

    .loading-more {
        align-items: center;
        justify-content: center;
        padding-top: 10px;
        padding-bottom: 10px;
        text-align: center;
    }

    .loading-more-text {
        font-size: 28upx;
        color: #999;
    }
</style>
