package com.www_app.finance.service;

public interface FamilyService {
    Integer getUserPrivateFamilyId(Integer userid);
    Integer createFamily(String name, String mail);
    Integer removeFamily(Integer familyId);

    Integer addUserToFamily(String mail, Integer familyId);
    Integer removeUserFromFamily(String mail, Integer familyId);
}
