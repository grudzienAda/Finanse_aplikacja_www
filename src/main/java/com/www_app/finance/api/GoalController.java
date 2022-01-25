package com.www_app.finance.api;

import com.www_app.finance.model.Goal;
import com.www_app.finance.service.GoalServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;

@RestController
@RequestMapping("api/goals")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class GoalController {
    private final GoalServiceImpl goalService;

    @Autowired
    public GoalController(GoalServiceImpl goalService) {
        this.goalService = goalService;
    }

    @PostMapping("/add")
    public void createGoal(@RequestParam String name,
                           @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime goalStartDate,
                           @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime goalEndDate,
                           @RequestParam Integer userId,
                           @RequestParam Integer familyId) {
        Goal goal = new Goal(name, goalStartDate, goalEndDate, userId, familyId);
        goalService.createGoal(goal);
    }

    @PostMapping(path="/donate")
    public void donateGoal(@RequestParam Integer goalId,
                           @RequestParam float amount,
                           @RequestParam Integer userId,
                           @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime goalPaymentDate) {
        goalService.donateGoal(goalId, amount, userId, goalPaymentDate);
    }

    @GetMapping(path="/goalSate")
    public float getGoalState(@RequestParam Integer idGoal) {
        return goalService.getGoalState(idGoal);
    }

    @GetMapping
    public Iterable<Goal> getAllGoals() {
        return goalService.getAllGoals();
    }

    @GetMapping(path="/family")
    public Iterable<Goal> getGoalsByFamilyId(@RequestParam Integer familyId) {
        return goalService.getGoalsByFamilyId(familyId);
    }

    @GetMapping(path="/user")
    public Iterable<Goal> getGoalsByUserId(@RequestParam Integer userId) {
        return goalService.getGoalsByUserId(userId);
    }
}
