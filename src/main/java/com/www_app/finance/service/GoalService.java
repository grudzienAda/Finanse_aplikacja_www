package com.www_app.finance.service;

import com.www_app.finance.model.Goal;

import java.time.LocalDateTime;

public interface GoalService {
    void createGoal(Goal goal);
    void endGoal(Integer idGoal);
    void donateGoal(Integer idGoal, float amount, Integer userId, LocalDateTime goalPaymentDate);
    float getGoalState(Integer idGoal);

    Iterable<Goal> getAllGoals();
    Iterable<Goal> getGoalsByFamilyId(Integer familyId);
    Iterable<Goal> getGoalsByUserId(Integer userId);

}
