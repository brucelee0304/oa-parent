package com.kalix.oa.workflow.sealapply.web.impl.form;


import com.kalix.middleware.workflow.biz.AbstractModifyFormHandler;

/**
 * Created by sunlf on 2015/8/4.
 * 审批页面实现类
 */
public class SealApplyModifyFormImpl extends AbstractModifyFormHandler {
    @Override
    public String getFormClass() {
        return "kalix.workflow.sealApply.view.SealApplyModifyForm";
    }

}
