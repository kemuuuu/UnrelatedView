({
    initHelper : function(c) {
        var action = c.get('c.tabInit');
        
        action.setCallback(this, function(res){
            var state = res.getState();
            if (state === 'SUCCESS')  {
              console.log(res.getReturnValue());
              c.set('v.records',res.getReturnValue());
            } else alert('Initial Error');
        });
        $A.enqueueAction(action);
    }
})
