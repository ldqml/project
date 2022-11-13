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
        this.add.onclick=this.addtab;
        for(var i=0;i<this.lis.length;i++){
            this.lis[i].index=i
            this.lis[i].onclick=this.togotab;
        }
    }

    togotab(){
        that.cleartab();
        this.className='liactive';
        this.sections[this.index].className='conactive';

    }
    cleartab(){
        for(var i=0;i<this.lis.length;i++){
            this.lis[i].className='';
            this.sections[i].className='';
        }
    }
    addtab(){
        alert('sss')
    }
    removetab(){
    }
    edittab(){
    }
}
new Tab('#tab');