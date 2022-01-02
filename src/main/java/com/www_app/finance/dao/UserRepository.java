package com.www_app.finance.dao;

import com.www_app.finance.model.User;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;


@Repository
public interface UserRepository extends CrudRepository<User, Integer> {

    @Query(value = "SELECT * FROM users WHERE mail=?1", nativeQuery = true)
    User getUserByMail(String mail);

    @Query(value = "SELECT * FROM users", nativeQuery = true)
    Iterable<User> getAllUsers();

}
