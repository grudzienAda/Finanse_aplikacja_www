package com.www_app.finance.service;

import com.www_app.finance.dao.FamilyRepository;
import com.www_app.finance.model.Family;
import com.www_app.finance.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FamilyServiceImpl implements FamilyService{
    private final FamilyRepository familyRepository;
    private final UserServiceImpl userService;

    @Autowired
    public FamilyServiceImpl(FamilyRepository familyRepository, UserServiceImpl userService) {
        this.familyRepository = familyRepository;
        this.userService = userService;
    }

    @Override
    public Integer getUserPrivateFamilyId(Integer userId) {
        return familyRepository.getUserPrivateFamilyId(userId);
    }

    @Override
    public Integer createFamily(String name, String mail) {
        User user = userService.getUserByMail(mail);
        return familyRepository.createFamily(name, user.getUserId());
    }

    @Override
    public Integer removeFamily(Integer familyId) {
        return familyRepository.removeFamily(familyId);
    }

    @Override
    public Iterable<Family> getFamiliesForUser(Integer userId) {
        return familyRepository.getFamiliesForUser(userId);
    }

    @Override
    public Integer addUserToFamily(String mail, Integer familyId) {
        User user = userService.getUserByMail(mail);
        return familyRepository.addUserToFamily(user.getUserId(), familyId);
    }

    @Override
    public Integer removeUserFromFamily(String mail, Integer familyId) {
        User user = userService.getUserByMail(mail);
        return familyRepository.removeUserFromFamily(user.getUserId(), familyId);
    }
}
