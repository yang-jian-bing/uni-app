<template>
    <view>
        <view class="content">
            <view class="joiList" v-for="item in datalist" :key="item.usr_id" @click="goto(item.id)">



                <view class='weWzpad'>
                    <p class='font14'>标题：{{item.title}}</p>

                    <p class='font14'>发布时间：{{item.created}}</p>



                </view>


            </view>
        </view>
        <uni-load-more :status="state" :content-text="contentText" color="#007aff" @clickLoadMore="add"></uni-load-more>
    </view>
</template>

<script>
   import {getParty} from "../../../../api/guokai.js"
    import uniLoadMore from "@/components/uni-load-more/uni-load-more.vue"
    export default {
        components: {
            uniLoadMore
        },
        data() {
            return {
                datalist: [],
                totalNums: "",
                pageNum: "1",
                state: "more",
                statusTypes: [{
                    value: 'more',
                    text: '加载前'
                }, {
                    value: 'loading',
                    text: '加载中'
                }, {
                    value: 'noMore',
                    text: '没有更多'
                }],
                contentText: {
                    contentdown: '查看更多',
                    contentrefresh: '加载中',
                    contentnomore: '没有更多'
                }
            }
        },
        methods: {
            goto(data) {

                uni.navigateTo({
                    url: 'dypbdetail?id=' + data
                })
            },
            init(){
                this.$minApi.getParty({
                      "page":this.pageNum,
                    "limit":"13",
                    							"module":"2",
                    							"menu":"6"
                }).then(res=>{
                      this.state="more";
                   for (let  i in res.data) {

                    				  this.datalist.push(res.data[i]);
                     	 		}

                    this.totalNums=res.totalNums
                })
            },
            add() {
              this.state="loading";
              let that=this;



              setTimeout(function(){
              	if(that.pageNum*13<that.totalNums){
                         that.pageNum++;
                         that.init()


              	}else{
              		that.state="noMore";
              	}

              },500)
                }
            },
           onReachBottom(){
               if(this.state=="more"){
                    this.add()
               }
           },
            onLoad() {
                this.init()

        },
    }
</script>

<style>
    .joiList {
        padding: 17px 15px 9px;
        display: flex;
        /* border: 1px solid red; */
        background: #fff;
        border-bottom: 1px solid #eee;



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
        display: flex;
        justify-content: flex-end;
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
