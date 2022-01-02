package com.www_app.finance.service;

import com.www_app.finance.dao.GoalRepository;
import com.www_app.finance.model.Goal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class GoalServiceImpl implements GoalService{
    private final GoalRepository goalRepository;

    @Autowired
    public GoalServiceImpl(GoalRepository goalRepository) {
        this.goalRepository = goalRepository;
    }

    @Override
    public void createGoal(Goal goal) {
        goalRepository.save(goal);
    }

    @Override
    public void endGoal(Integer goalId) {
        LocalDateTime goalEndDate = LocalDateTime.now();
        goalRepository.endGoal(goalId, goalEndDate);
    }

    @Override
    public void donateGoal(Integer goalId, float amount, Integer userId, LocalDateTime goalPaymentDate) {
        goalRepository.donateGoal(goalId, amount, userId, goalPaymentDate);
    }

    @Override
    public float getGoalState(Integer idGoal) {
        return goalRepository.getGoalState(idGoal);
    }

    @Override
    public Iterable<Goal> getAllGoals() {
        return goalRepository.findAll();
    }

    @Override
    public Iterable<Goal> getGoalsByFamilyId(Integer familyId) {
        return goalRepository.getGoalsByFamilyId(familyId);
    }

    @Override
    public Iterable<Goal> getGoalsByUserId(Integer userId) {
        return goalRepository.getGoalsByUserId(userId);
    }


}
