package com.www_app.finance.model;

import javax.annotation.processing.Generated;
import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "goals")
public class Goal {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "goal_id")
    private Integer goalId;

    @Column(name = "goal_name")
    private String goalName;
    private float amount;
    @Column(name = "goal_start_date")
    private LocalDateTime goalStartDate;
    @Column(name = "goal_end_date")
    private LocalDateTime goalEndDate;
    @Column(name = "is_completed")
    private boolean isCompleted;
    @Column(name = "is_terminated")
    private boolean isTerminated;
    @Column(name = "id_user")
    private Integer userId;
    @Column(name = "family_id")
    private Integer familyId;

    public Goal(String goalName, LocalDateTime goalStartDate, LocalDateTime goalEndDate, Integer userId, Integer familyId) {
        this.goalName = goalName;
        this.amount = 0;
        this.goalStartDate = goalStartDate;
        this.goalEndDate = goalEndDate;
        this.userId = userId;
        this.familyId = familyId;
        this.isCompleted = false;
        this.isTerminated = false;
    }

    public Goal() {

    }

    public Integer getGoalId() {
        return goalId;
    }

    public void setGoalId(Integer goalId) {
        this.goalId = goalId;
    }

    public String getGoalName() {
        return goalName;
    }

    public void setGoalName(String goalName) {
        this.goalName = goalName;
    }

    public float getAmount() {
        return amount;
    }

    public void setAmount(float amount) {
        this.amount = amount;
    }

    public LocalDateTime getGoalStartDate() {
        return goalStartDate;
    }

    public void setGoalStartDate(LocalDateTime goalStartDate) {
        this.goalStartDate = goalStartDate;
    }

    public LocalDateTime getGoalEndDate() {
        return goalEndDate;
    }

    public void setGoalEndDate(LocalDateTime goalEndDate) {
        this.goalEndDate = goalEndDate;
    }

    public boolean isCompleted() {
        return isCompleted;
    }

    public void setCompleted(boolean completed) {
        isCompleted = completed;
    }

    public boolean isTerminated() {
        return isTerminated;
    }

    public void setTerminated(boolean terminated) {
        isTerminated = terminated;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public Integer getFamilyId() {
        return familyId;
    }

    public void setFamilyId(Integer familyId) {
        this.familyId = familyId;
    }
}
