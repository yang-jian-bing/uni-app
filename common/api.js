const requestUrl = 'http://61.150.65.204:9090'
function getHandle(url, data) {
    return new Promise((resolve, reject) => {
        uni.request({
            url: requestUrl + url,
            data
        }).then(res => {
            uni.showToast({
                title: '请求成功',
                icon: 'success',
                mask: true
            });
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
export {
    getHandle
}
