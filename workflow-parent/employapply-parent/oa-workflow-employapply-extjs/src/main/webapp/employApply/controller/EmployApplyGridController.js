/**
 * @author chenyanxu
 */
Ext.define('kalix.workflow.employApply.controller.EmployApplyGridController', {
    extend: 'kalix.controller.BaseGridController',
    requires: ['kalix.workflow.components.ActivitiProcessImageWindow'],
    alias: 'controller.employApplyGridController',
    mixins: {
        attachment: 'kalix.attachment.common.mixins.Attachment'
    },
    onWorkFlowStart: function (grid, rowIndex, colIndex) {
        var rec = grid.getStore().getAt(rowIndex);
        var postUrl;
        //if (rec.data.status != "0") {
        //Ext.MessageBox.alert(CONFIG.ALTER_TITLE_ERROR, "流程已经启动!");
        //return;
        //}
        postUrl = CONFIG.restRoot + '/camel/rest/employapplys/workflow/startProcess?id=' + rec.data.id;
        Ext.Ajax.request({
            url: postUrl,
            method: 'GET',
            callback: function (options, success, response) {
                var resp = Ext.JSON.decode(response.responseText);

                if (resp.success) {
                    kalix.Notify.success(resp.msg, CONFIG.ALTER_TITLE_INFO);

                    var store = grid.getStore();
                    store.reload();
                    return;
                }
                Ext.MessageBox.alert(CONFIG.ALTER_TITLE_FAILURE, resp.msg);
            }
        });
    },
    onViewCurrentProcess: function (grid, rowIndex, colIndex) {
        var rec = grid.getStore().getAt(rowIndex);
        var imgUrl = "processInstanceId=" + rec.data.processInstanceId;
        var win = Ext.create('kalix.workflow.components.ActivitiProcessImageWindow', {
            title: '当前流程 - 编号[' + rec.data.id + ']',
            imgUrl: imgUrl
        });
        win.show();
    }
});