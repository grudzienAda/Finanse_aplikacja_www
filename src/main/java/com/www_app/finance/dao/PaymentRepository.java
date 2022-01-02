package com.www_app.finance.dao;

import com.www_app.finance.model.Category;
import com.www_app.finance.model.Payment;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;



public interface PaymentRepository extends CrudRepository<Payment, Integer> {

   @Query(value = "SELECT * FROM payments p " +
            "WHERE p.family_id=?1", nativeQuery = true)
    Iterable<Payment> getPaymentsByFamilyId(Integer familyId);

    @Query(value = "SELECT SUM(amount) FROM payments p " +
            "WHERE p.id_user=?1", nativeQuery = true)
    float getAccountState(Integer userId);

    @Query(value = "SELECT SUM(amount) FROM payments p " +
            "WHERE p.family_id=?1", nativeQuery = true)
    float getFamilyAccountState(Integer userId);
}
