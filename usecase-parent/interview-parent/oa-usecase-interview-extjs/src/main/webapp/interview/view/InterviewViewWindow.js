/**
 * 面试人员查看表单
 *
 * @author
 * @version 1.0.0
 */

Ext.define('kalix.usecase.interview.view.InterviewViewWindow', {
    extend: 'kalix.view.components.common.BaseWindow',
    requires: [
        'kalix.usecase.interview.viewModel.InterviewViewModel'
    ],
    alias: 'widget.interviewViewWindow',
    viewModel: 'interviewViewModel',
    xtype: "interviewViewWindow",
    width: 400,
    //todo 在此修改查看字段
    items: [
        {
            defaults: {readOnly: true},
            xtype: 'baseForm',
            items: [
                {
                    //readOnly:true,
                    xtype: 'candidateComboBox',
                    fieldLabel: '应聘者姓名',
                    name:'candidateId',
                    allowBlank: false,
                    bind: {
                        value: '{rec.candidateId}'
                    }
                },
                //{
                //    fieldLabel: '应聘人',
                //    allowBlank: false,
                //    bind: {
                //        value: '{rec.candidateId}'
                //    }
                //},
                {
                    fieldLabel: '初试时间',
                    allowBlank: false,
                    bind: {
                        value: '{rec.dateFirst}'
                    }
                },
                {
                    fieldLabel: '初试面试官',
                    allowBlank: false,
                    bind: {
                        value: '{rec.interviewerFirst}'
                    }
                },
                {
                    fieldLabel: '初试面试内容',
                    allowBlank: false,
                    xtype: 'textarea',
                    bind: {
                        value: '{rec.interviewContentFirst}'
                    }
                },
                {
                    fieldLabel: '初试是否通过',
                    allowBlank: false,
                    bind: {
                        value: '{rec.passFirst}'
                    }
                },
                {
                    fieldLabel: '复试时间',
                    allowBlank: false,
                    bind: {
                        value: '{rec.dateSecond}'
                    }
                },
                {
                    fieldLabel: '复试面试官',
                    allowBlank: false,
                    bind: {
                        value: '{rec.interviewerSecond}'
                    }
                },
                {
                    fieldLabel: '复试面试内容',
                    allowBlank: false,
                    xtype: 'textarea',
                    bind: {
                        value: '{rec.interviewContentSecond}'
                    }
                },
                {
                    fieldLabel: '复试是否通过',
                    allowBlank: false,
                    bind: {
                        value: '{rec.passSecond}'
                    }
                }
            ]
        }
    ]
});