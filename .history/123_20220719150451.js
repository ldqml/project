var data=[{
    id:1,
    pname:'小米',
    price:2999
},{
    id:2,
    pname:'华为',
    price:3799
},{
    id:3,
    pname:'OPPO',
    price:1299
},{
    id:4,
    pname:'诺基亚',
    price:499
}];
var tb=document.querySelector('tbody');
var sou=document.querySelector('.sou');
var start=document.querySelector('.start');
var end=document.querySelector('.end');
var jname=document.querySelector('.jname');
var suo=document.querySelector('.suo');
setdate(data);

function setdate(ndate){
    tb.innerHTML ="";
    ndate.forEach(function(value){
    var tr=document.createElement('tr');
    tr.innerHTML='<td>'+value.id+'</td>'+'<td>'+value.pname+'</td>'+'<td>'+value.price+'</td>';
    tb.appendChild(tr);
})
}

sou.addEventListener('click',function(){
    var newDate=data.filter(function(value){
        return value.price>=start.value && value.price<=end.value;   
    })
    setdate(newDate);
})

suo.addEventListener('click',function(){
    var narr=[];
    data.some(function(value){
        if(value.pname===jname.value){
            narr.push(value);
            return true;
        }
    })
    setdate(narr);
})