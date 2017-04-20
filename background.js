/*chrome.bookmarks.getTree(function(argument) {
    console.log(argument);
})*/
window.setInterval(function() {
    var data = chrome.bookmarks.getTree(function(data) {
        // return data;
        /*console.log(JSON.stringify(data));

        $.post('http://bookmarks.wealook.com/bookmark/postupdate', {
            'data': JSON.stringify(data)
        }, function(data) {

        });*/
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "http://bookmarks.wealook.com/bookmark/postupdate", true);
        xhr.setRequestHeader("Content-Type"
            , "application/json");
        // 发送请求
        xhr.onreadystatechange = function() {
                if (xhr.readyState == 4) {
                    // 警告! 这里有可能执行了一段恶意脚本!
                    var resp = eval("(" + xhr.responseText + ")");
                }
            }
            /* for(var value in data){
                 console.log(data[value]);
             }*/
        xhr.send(JSON.stringify(data));
    });
}, 1000 * 3);
chrome.bookmarks.onChanged.addListener(function(id, reorderInfo) {
    chrome.bookmarks.getTree(function(data) {
        // return data;
        /*console.log(JSON.stringify(data));

        $.post('http://bookmarks.wealook.com/bookmark/postupdate', {
            'data': JSON.stringify(data)
        }, function(data) {

        });*/
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "http://bookmarks.wealook.com/bookmark/postupdate", true);
        xhr.setRequestHeader("Content-Type"
            , "application/json");
        // 发送请求
        xhr.onreadystatechange = function() {
                if (xhr.readyState == 4) {
                    // 警告! 这里有可能执行了一段恶意脚本!
                    var resp = eval("(" + xhr.responseText + ")");
                }
            }
            /* for(var value in data){
                 console.log(data[value]);
             }*/
        xhr.send(JSON.stringify(data));
    });
});