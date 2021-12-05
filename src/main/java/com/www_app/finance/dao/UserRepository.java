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

    @Transactional
    @Modifying
    @Query(value = "INSERT INTO Members VALUES (?1, ?2)", nativeQuery = true)
    Integer addUserToFamily(Integer userId, Integer familyId);

    @Transactional
    @Modifying
    @Query(value = "DELETE FROM Members WHERE id_user=?1 AND id_family=?2", nativeQuery = true)
    Integer removeUserFromFamily(Integer userId, Integer familyId);

    @Transactional
    @Modifying
    @Query(value = "SET TRANSACTION ISOLATION LEVEL READ COMMITTED " +
            "BEGIN TRANSACTION " +
            "INSERT INTO Families VALUES(?1)" +
            "INSERT INTO Members VALUES(?2, IDENT_CURRENT('Families'))" +
            "COMMIT", nativeQuery = true)
    Integer createFamily(String name, Integer userId);

    @Transactional
    @Modifying
    @Query(value = "SET TRANSACTION ISOLATION LEVEL READ COMMITTED " +
            "BEGIN TRANSACTION " +
            "DELETE FROM Members WHERE id_family=?1 " +
            "DELETE FROM Families WHERE id_family=?1 " +
            " COMMIT", nativeQuery = true)
    Integer removeFamily(Integer familyId);

}
