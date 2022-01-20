package com.www_app.finance.service;

import com.www_app.finance.model.Family;

public interface FamilyService {
    Integer getUserPrivateFamilyId(Integer userid);
    Integer createFamily(String name, String mail);
    Integer removeFamily(Integer familyId);
    Iterable<Family> getFamiliesForUser(Integer userId);

    Integer addUserToFamily(String mail, Integer familyId);
    Integer removeUserFromFamily(String mail, Integer familyId);
}
