package com.kalix.oa.usecase.interview.api.query;

import com.kalix.framework.core.api.web.model.BaseDTO;

import java.util.Date;

/**
 * Created by zangyanming on 2016/06/21.
 */
public class InterviewDTO extends BaseDTO {
    private String personCategory;//人员类别
    private String department;//部门
    private String xm;//姓名
    private String sex;//性别
    private Integer age;//年龄
    private String tel;//联系电话
    private String position;//应聘岗位

    private Long candidateId;//应聘id
    private Date dateFirst;//初试时间
    private String interviewerFirst;//初试面试官
    private String interviewContentFirst;//初试面试内容
    private Boolean passFirst;// 初试是否通过

    private Date dateSecond;//复试时间
    private String interviewerSecond;//复试面试官
    private String interviewContentSecond;//复试面试内容
    private Boolean passSecond;// 复试是否通过

    private Boolean employment;//是否聘用

    private Long employApplyWorkflowId;//入职申请

    public String getPersonCategory() {
        return personCategory;
    }

    public void setPersonCategory(String personCategory) {
        this.personCategory = personCategory;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public String getXm() {
        return xm;
    }

    public void setXm(String xm) {
        this.xm = xm;
    }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public String getTel() {
        return tel;
    }

    public void setTel(String tel) {
        this.tel = tel;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public Long getCandidateId() {
        return candidateId;
    }

    public void setCandidateId(Long candidateId) {
        this.candidateId = candidateId;
    }

    public Date getDateFirst() {
        return dateFirst;
    }

    public void setDateFirst(Date dateFirst) {
        this.dateFirst = dateFirst;
    }

    public String getInterviewerFirst() {
        return interviewerFirst;
    }

    public void setInterviewerFirst(String interviewerFirst) {
        this.interviewerFirst = interviewerFirst;
    }

    public String getInterviewContentFirst() {
        return interviewContentFirst;
    }

    public void setInterviewContentFirst(String interviewContentFirst) {
        this.interviewContentFirst = interviewContentFirst;
    }

    public Boolean getPassFirst() {
        return passFirst;
    }

    public void setPassFirst(Boolean passFirst) {
        this.passFirst = passFirst;
    }

    public Date getDateSecond() {
        return dateSecond;
    }

    public void setDateSecond(Date dateSecond) {
        this.dateSecond = dateSecond;
    }

    public String getInterviewerSecond() {
        return interviewerSecond;
    }

    public void setInterviewerSecond(String interviewerSecond) {
        this.interviewerSecond = interviewerSecond;
    }

    public String getInterviewContentSecond() {
        return interviewContentSecond;
    }

    public void setInterviewContentSecond(String interviewContentSecond) {
        this.interviewContentSecond = interviewContentSecond;
    }

    public Boolean getPassSecond() {
        return passSecond;
    }

    public void setPassSecond(Boolean passSecond) {
        this.passSecond = passSecond;
    }

    public Boolean getEmployment() {
        return employment;
    }

    public void setEmployment(Boolean employment) {
        this.employment = employment;
    }

    public Long getEmployApplyWorkflowId() {
        return employApplyWorkflowId;
    }

    public void setEmployApplyWorkflowId(Long employApplyWorkflowId) {
        this.employApplyWorkflowId = employApplyWorkflowId;
    }
}