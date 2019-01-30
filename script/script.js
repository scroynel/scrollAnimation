function getScrollTop(){
    return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
}

function setAnimation(elem){
    var rect = elem.getBoundingClientRect();
    if(rect.top > window.innerHeight || rect.bottom < 0) return;
    elem.classList.add('hello1');

}


window.addEventListener('load', function(){
    var hello = document.querySelector('.hello');
    
window.addEventListener('scroll', function(){
        setAnimation(hello);
    });
    
});