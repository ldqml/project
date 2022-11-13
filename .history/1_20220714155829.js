var contact = {
    qq:"111111",
    name:"zhansan",
    tel:"13546448",
    sex:"men",
    url:"http://www.dshfgjf"
}
var memberfilter = ["name","tel","sex"];
var jsontext = JSON.stringify(contact,memberfilter,"\t");
document.write("<pre>"+jsontext+"</pre>");