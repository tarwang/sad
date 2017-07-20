;(function($){
    var index= 0,
    leth =$('#content li').length,
    ulobj=$('#content ul'),
    spanobj=$('#in>span');
    var timer = setInterval(function(){
        play();
    },2000);
    function play(){
        if(index>=leth-1){
            index=0;
            var mex='-'+100*index+'%';
            ulobj.css('margin-left',mex);
        }
        index++;
        dong(index);
    }
    function dong(index){
        var max = '-'+100*index+'%';
        ulobj.animate({"marginLeft":max},500);
        spanobj.eq(index).addClass('on').siblings().removeClass('on');
        if(index==leth-1){
            spanobj.eq(0).addClass('on').siblings().removeClass('on');
        }
    }
})(Zepto)
