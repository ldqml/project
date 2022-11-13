window.onload=function(){
    var reg=/^1[3|4|5|7|8|9]\d{9}$/;
    var inp1=document.querySelector('.inp1')
    inp1.onblur=function(){
        if(reg.test(this.value)){
            this.nextElementSibling.className='success';
            this.nextElementSibling.innerHTML='格式输入正确';
        }else{
            this.nextElementSibling.className='erry';
            this.nextElementSibling.innerHTML='请输入正确的格式';
        }
    }
}