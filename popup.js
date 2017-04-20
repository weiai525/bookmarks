
$('#bt').click(function(){

$.get('http://bookmarks.wealook.com/checklogin',function(data){
    if(data.status == 1){
        $('#login-page').hide();
        $('#work-page').show();
    }
});
});

$.get('http://bookmarks.wealook.com/checklogin',function(data){
    if(data.status == 1){
        $('#login-page').hide();
        $('#work-page').show();
    }else{
        $('#login-page').show();
        $('#work-page').hide();
    }
});
