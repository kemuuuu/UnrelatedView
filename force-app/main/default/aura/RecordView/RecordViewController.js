({
    navToRecord : function(c, e, h) {
        var navEvt = $A.get("e.force:navigateToSObject");
        navEvt.setParams({
            "recordId" : c.get("v.record.Id")
        });
        navEvt.fire();
    },

    handleSelect: function(c, e, h) {
        console.log(c.get("v.record.Id"))
        var evtType = e.getParam("value");
        if (evtType === "edit") {
            this.editRecord(c);
        } else if (evtType === "delete") {

        }
    },

    editRecord: function(c) {
        console.log(c.get("v.record.Id"))
        var editEvt = $A.get("e.force:editRecord");
        editEvt.setParams({
            "recordId": c.get("v.record.Id")
        });
        editEvt.fire();
    }
})
