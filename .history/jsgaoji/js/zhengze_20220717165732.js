window.onload=function(){
    var reg=/^1[3|4|5|7|8|9]\d{9}$/;
    var inp1=document.querySelector('.inp1')
    inp1.onblur=function(){
        if(reg.test(this.value)){
            this.nextElementSibling.className='success';
            this.nextElementSibling.innerHTML='<i class="icon"></i>格式输入正确'
        }
    }
}