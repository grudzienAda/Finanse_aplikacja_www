package com.www_app.finance.dao;

import com.www_app.finance.model.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface UserRepository extends CrudRepository<User, Integer> {

    @Query(value = "SELECT * FROM users WHERE mail=?1", nativeQuery = true)
    User getUserByMail(String mail);

    @Query(value = "INSERT INTO Members VALUES (?1, ?2)", nativeQuery = true)
    Integer addUserToFamily(Integer userId, Integer familyId);

    @Query(value = "BEGIN TRANSACTION " +
            "INSERT INTO Families VALUES(?1)" +
            "INSERT INTO Members VALUES(?2, ?3)", nativeQuery = true)
    Integer createFamily(String name);
}
