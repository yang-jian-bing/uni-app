module.exports = {
    showAlert: showAlert,
    openPage: openPage,
}

function openPage(url) {

    uni.navigateTo({
        url: "../" + url
    });
}


function showAlert(msg) {
    uni.showModal({
        content: msg,
        showCancel: false
    });
}
