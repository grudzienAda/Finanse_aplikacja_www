package com.www_app.finance.dao;

import com.www_app.finance.model.Goal;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;

@Repository
public interface GoalRepository extends CrudRepository<Goal, Integer> {

    @Query(value = "UPDATE goals SET goal_end_date=?2, is_terminated=1 WHERE goal_id=?1", nativeQuery = true)
    void endGoal(Integer goalId, LocalDateTime goalEndDate);

    @Query(value = "INSERT INTO goals_payments VALUES (?1, ?2, ?4, ?3)", nativeQuery = true)
    void donateGoal(Integer goalId, float amount, Integer userId, LocalDateTime goalPaymentDate);
    
    @Query(value = "SELECT * FROM goals WHERE family_id=?1", nativeQuery = true)
    Iterable<Goal> getGoalsByFamilyId(Integer familyId);

    @Query(value = "SELECT *FROM goals WHERE id_user=?1", nativeQuery = true)
    Iterable<Goal> getGoalsByUserId(Integer userId);

    @Query(value = "  SELECT COALESCE(SUM(amount), 0) FROM goals_payments WHERE goal_id=?1", nativeQuery = true)
    float getGoalState(Integer idGoal);
}
