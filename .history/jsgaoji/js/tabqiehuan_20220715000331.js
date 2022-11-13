class Tab{
    constructor(id){
        this.main=document.querySelector(id);
        this.lis=this.main.querySelectorAll('li');
        this.sections=this.main.querySelectorAll('section')
    }
    int(){
        for(var i=0;i<this.lis.length;i++){
            this.lis[i].index=i
            this.lis[i].onclick=function(){
                console.log(this.lis[i].index)
            }
        }
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