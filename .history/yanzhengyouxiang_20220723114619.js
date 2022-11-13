function ajax (options){
    var defaults = {
        type: 'get',
        url: '',
        async: true,
        data:{},
        header:{
            'Content-type': 'application/x-www-form-urlencoded'
        },
        success: function(){},
        console:function(){}
    }
    Object.assign(defaults, options);
}