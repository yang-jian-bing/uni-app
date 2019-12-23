module.exports = {
    showAlert: showAlert,
    openPage: openPage
};
function parseParams(data) {
    try {
        var tempArr = [];
        for (var i in data) {
            var key = encodeURIComponent(i);
            var value = encodeURIComponent(data[i]);
            tempArr.push(key + "=" + value);
        }
        var urlParamsStr = tempArr.join("&");
        return urlParamsStr;
    } catch (err) {
        return "";
    }
}

function openPage(url, params) {
	console.log(url)
    if (params) {
        url = url + "?" + parseParams(params);
    }
    uni.navigateTo({
        url:  url
    });
}

function showAlert(msg) {
    uni.showModal({
        content: msg,
        showCancel: false
    });
}
