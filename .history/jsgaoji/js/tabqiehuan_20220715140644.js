var that;
class Tab{
    constructor(id){
        that=this;
        this.main=document.querySelector(id);
        this.add=this.main.querySelector('.jia');
        this.ul=this.main.querySelector('.navb ul:first-child');
        this.neir=this.main.querySelector('.neir');
        this.init();
    }
    init(){
        this.xinneir();
        this.add.onclick=this.addtab;
        for(var i=0;i<this.lis.length;i++){
            this.lis[i].index=i
            this.lis[i].onclick=this.togotab;
            this.remove[i].onclick=this.removetab;
            this.spa[i].ondblclick=this.edittab;
        }
    }
    xinneir(){
        this.lis=this.main.querySelectorAll('li');
        this.sections=this.main.querySelectorAll('section');
        this.remove=this.main.querySelectorAll('.icon-guanbi');
        this.spa=this.main.querySelectorAll('.navs li span:first-child')
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
        that.cleartab();
        var li='<li class="liactive"><span>新测试</span><span class="iconfont icon-guanbi">×</span></li>';
        var section='<section class="conactive">新内容</section>';
        that.ul.insertAdjacentHTML('beforeend', li);
        that.neir.insertAdjacentHTML('beforeend', section);
        that.init();
    }
    removetab(e){
        e.stopPropagation();
        var index=this.parentNode.index;
        that.lis[index].remove();
        that.sections[index].remove();
        that.init();
        if(document.querySelector('.liactive')) return;
        index--;
        that.lis[index] && that.lis[index].click();
    }
    edittab(){
        var str=this.innerHTML;
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        this.innerHTML = '<input type="text" />';
    }
}
new Tab('#tab');