class Tab{
    constructor(id){
        this.main=document.querySelector(id);
        this.lis=this.main.querySelectorAll('li');
        this.sections=this.main.querySelectorAll('section')
    }



    togotab(){
    }
    addtab(){
    }
    removetab(){
    }
    edittab(){
    }
}
new Tab('#tab');