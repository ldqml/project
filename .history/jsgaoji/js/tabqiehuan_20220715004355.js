class Tab{
    constructor(id){
        this.main=document.querySelector(id);
        this.lis=this.main.querySelectorAll('li');
        this.sections=this.main.querySelectorAll('section');
        this.init();
    }
    init(){
        for(var i=0;i<this.lis.length;i++){
            this.lis[i].index=i
            this.lis[i].onclick=this.togotab;
        }
    }

    togotab(){
        this.className='liactive';
    }
    addtab(){
    }
    removetab(){
    }
    edittab(){
    }
}
new Tab('#tab');