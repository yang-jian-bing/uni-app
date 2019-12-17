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
                            <p class='font14'>所属园区：{{item.parkName}}</p>
                            <p class='font14'>设备名称：{{item.name}}</p>
                            <p class='font14'>维修信息：{{item.repairPersion}}（{{item.repairDate}}）</p>
                        </view>
                        <view class="label projectBox flex-end">
                            <text href="">编辑</text>
                            <text @tap="deleteHandle(item)">删除</text>
                        </view>
                    </view>
                </view>
                <view class="line"></view>
            </view>
            <view class="example-body">
                <uni-load-more :status="status" />
            </view>
        </view>
    </view>
</template>

<script>
    import {
        timerZero
    } from '@/common/util.js';
    import {getHandle,postHandle} from '@/common/api.js'
    import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue'
    export default {
        data() {
            return {
                list: [],
                obj: {
                    name: '',
                    limit: 3,
                    page: 1
                },
                status:'more'
            };
        },
        components: {
            uniLoadMore
        },
        onLoad() {  
            this.init()
        },
        onReachBottom() {
            if (this.status==='more') {
                this.init()
            }
        },
        methods: {
            init() {
                getHandle('/api/propertyManage/facilitiesMaintenance/queryList', this.obj).then(data => {
                        uni.showToast({
                            title: '请求成功',
                            icon: 'success',
                            mask: true
                        });
                    const list = data[1].data.body
                    const totalNum = list.totalNum
                    for (let s of list.data) {
                        s.repairDate = timerZero(s.repairDate)
                        this.list.push(s)
                    }
                    if (this.obj.page * 3 > totalNum) {

                        this.status = 'noMore'
                    } else {
                        this.obj.page++
                    }
                })
            },
            deleteHandle(item){
                postHandle('/api/propertyManage/facilitiesMaintenance/delete',{id:item.id}).then(data=>{
                    this.list.splice(this.list.indexOf(item),1)
                    uni.showModal({
                        content: '删除成功',
                        showCancel: false
                    });
                })
            }
        }
    }
</script>

<style>


</style>
