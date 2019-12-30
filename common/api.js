const requestUrl = '/api'
function getHandle(url, data) {
    return new Promise((resolve, reject) => {
        uni.request({
            url: requestUrl + url,
            data:data,
            header: {
                 'content-Type':"application/x-www-form-urlencoded", //自定义请求头信息
            },
        }).then(res => {
            resolve(res)
        }).catch(err => {
            console.log('request fail', err);
            uni.showModal({
                content: err.errMsg,
                showCancel: false
            });
            reject(err)
        });
    })
}
function postHandle(url, data) {
    return new Promise((resolve, reject) => {
        uni.request({
            url: requestUrl + url,
            data,
			method:'POST'
        }).then(res => {
            resolve(res)
        }).catch(err => {
            console.log('request fail', err);
            uni.showModal({
                content: err.errMsg,
                showCancel: false
            });
            reject(res)
        });
    })
}
function getToken(){
    let accessToken=null;
    uni.getStorage({
        key: 'userdata',
        success: function (res) {

            accessToken=res.data.accessToken

        }
    });
    return accessToken
}
module.exports =  {
    getHandle,postHandle,getToken
}
