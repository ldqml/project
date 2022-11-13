var that;
class Tab{
    constructor(id){
        that=this;
        this.main=document.querySelector(id);
        this.lis=this.main.querySelectorAll('li');
        this.sections=this.main.querySelectorAll('section');
        this.add=this.main.querySelector('.jia');
        this.init();
    }
    init(){
        this.xinneir();
        this.add.onclick=this.addtab;
        for(var i=0;i<this.lis.length;i++){
            this.lis[i].index=i
            this.lis[i].onclick=this.togotab;
        }
    }
    xinneir(){
        this.ul=this.main.querySelector('.navb ul:first-child');
        this.neir=this.main.querySelector('.neir');
    }
    togotab(){
        that.cleartab();
        this.className='liactive';
        that.sections[this.index].className='conactive';

    }
    cleartab(){
        for(var i=0;i<this.lis.length;i++){
            this.lis[i].className='';
            this.sections[i].className='';
        }
    }
    addtab(){
        this.cleartab();
        var li='<li class="liactive"><span>新测试</span><span class="iconfont icon-guanbi">×</span></li>';
        var section='<section class="conactive">新内容</section>';
        that.ul.insertAdjacentHTML('beforeend', li);
        that.neir.insertAdjacentHTML('beforeend', section);
        this.init();
    }
    removetab(){
    }
    edittab(){
    }
}
new Tab('#tab');