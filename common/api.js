const requestUrl = 'http://61.150.65.204:9090'
function getHandle(url, data) {
    return new Promise((resolve, reject) => {
        uni.request({
            url: requestUrl + url,
            data
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
module.exports =  {
    getHandle,postHandle
}
