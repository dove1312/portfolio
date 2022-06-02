const burger = document.getElementById('burger');
const phoneNav = document.getElementById('ulEle');

burger.addEventListener('click', function(){
    if(phoneNav.style.opacity==1){
        phoneNav.style.opacity = 0;
    }else if(phoneNav.style.opacity==0){
        phoneNav.style.opacity = 1;
    }
})