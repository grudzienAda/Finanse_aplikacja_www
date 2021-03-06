package com.www_app.finance.dao;

import com.www_app.finance.model.Family;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface FamilyRepository extends CrudRepository<Family, Integer> {
    @Query(value = "SELECT IDENT_CURRENT('families')", nativeQuery = true)
    Integer getLastAddedFamilyId();

    @Query(value = "SELECT * FROM families f " +
            "JOIN members m on m.family_id=f.family_id WHERE m.id_user=?1", nativeQuery = true)
    Iterable<Family> getFamiliesForUser(Integer userId);

    @Query(value="SELECT f.family_id FROM families f " +
            "JOIN members m ON m.family_id=f.family_id WHERE f.family_name='Private account' AND m.id_user=?1", nativeQuery = true)
    Integer getUserPrivateFamilyId(Integer userId);

    @Transactional
    @Modifying
    @Query(value = "SET TRANSACTION ISOLATION LEVEL READ COMMITTED " +
            "BEGIN TRANSACTION " +
            "INSERT INTO families VALUES(?1)" +
            "INSERT INTO members VALUES(?2, IDENT_CURRENT('families'))" +
            "COMMIT", nativeQuery = true)
    Integer createFamily(String name, Integer userId);

    @Transactional
    @Modifying
    @Query(value = "SET TRANSACTION ISOLATION LEVEL READ COMMITTED " +
            "BEGIN TRANSACTION " +
            "DELETE FROM members WHERE family_id=?1 " +
            "DELETE FROM families WHERE family_id=?1 " +
            " COMMIT", nativeQuery = true)
    Integer removeFamily(Integer familyId);
    @Transactional
    @Modifying
    @Query(value = "INSERT INTO members VALUES (?1, ?2)", nativeQuery = true)
    Integer addUserToFamily(Integer userId, Integer familyId);

    @Transactional
    @Modifying
    @Query(value = "DELETE FROM members WHERE userId=?1 AND familyId=?2", nativeQuery = true)
    Integer removeUserFromFamily(Integer userId, Integer familyId);
}
