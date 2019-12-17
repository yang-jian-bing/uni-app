<template>
    <view>
        <view class="top">
            <view class="search mui-input-row">
                <image src="../../../static/property/search.png" />
                <input type="text" class="mui-input-clear" placeholder="搜索">
            </view>
            <view v-for="(item,index) in list" :key="index">
                <view class="joiList">
                    <view class="serBox serindWid">
                        <p class="actWz proFont">{{item.repairProject}}</p>
                        <view class="font14">维修工时：{{item.repairTime}}&nbsp;&nbsp;维修费用：￥{{item.repairPrice}}
                        </view>
                        <view class='weWzpad'>
                            <p class='font14'>所属园区：创业大厦</p>
                            <p class='font14'>设备名称：发电机</p>
                            <p class='font14'>维修信息：小李（2017-01-12）</p>
                        </view>
                        <view class="label projectBox flex-end">
                            <text href="">编辑</text>
                            <text href="">删除</text>
                        </view>
                    </view>
                </view>
                <view class="line"></view>
            </view>
        </view>
    </view>
</template>

<script>
    import {
        getHandle
    } from '@/common/api.js'
    export default {
        data() {
            return {
                list: []
            };
        },
        onLoad() {
            this.init()
        },
        methods: {
            init() {
                getHandle('/api/propertyManage/facilitiesMaintenance/queryList').then(data => {
                    console.log(data[1])
                    this.list = data[1].data.body.data
                })
            }
        }
    }
</script>

<style>


</style>
