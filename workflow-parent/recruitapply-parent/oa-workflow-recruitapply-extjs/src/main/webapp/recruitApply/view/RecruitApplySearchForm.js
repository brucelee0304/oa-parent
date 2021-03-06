/**
 * 审计查询表单
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.workflow.recruitApply.view.RecruitApplySearchForm', {
  extend: 'kalix.view.components.common.BaseSearchForm',
  alias: 'widget.recruitApplySearchForm',
  xtype: 'recruitApplySearchForm',
  storeId: 'recruitApplyStore',
  items: [
    {
      xtype: 'textfield',
      fieldLabel: '申请部门',
      labelAlign: 'right',
      labelWidth: 60,
      width: 200,
      name: 'orgName'
    }, {
      xtype: 'textfield',
      fieldLabel: '经办人',
      labelAlign: 'right',
      labelWidth: 60,
      width: 200,
      name: 'createBy'
    }
  ]
});
