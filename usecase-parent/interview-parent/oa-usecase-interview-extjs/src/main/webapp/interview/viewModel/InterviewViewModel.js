/**
 * 面试人员模型
 *
 * @author
 * @version 1.0.0
 */

Ext.define('kalix.usecase.interview.viewModel.InterviewViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.interviewViewModel',
    data: {
        rec: null,
        validation: {},  //验证错误信息
        icon: '',
        title: '',
        view_operation: false,
        view_title: '查看',
        add_title: '添加',
        edit_title: '修改'
    }
});