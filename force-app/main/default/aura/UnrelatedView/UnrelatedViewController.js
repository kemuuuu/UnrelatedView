({
    init : function(c, e, h) {
        $A.createComponent(
            "c:MyTab",
            {
                
            },
            function(newTab, status, err){
                if (status === 'SUCCESS') {
                    var body = c.get('v.body');
                    body.push(newTab);
                    c.set('v.body', body);
                }
            }
        );
    }
})
