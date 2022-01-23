package com.www_app.finance.service;

import com.www_app.finance.model.Payment;
import com.www_app.finance.model.PaymentType;

import java.time.LocalDateTime;
import java.util.Optional;


public interface PaymentService {
    Payment addPayment(Payment payment);
    void removePayment(Integer paymentId);


    Iterable<Payment> getAllPayments();
    Iterable<Payment> getPaymentsFiltered(Integer familyId, Integer userId, PaymentType paymentType,
                                          LocalDateTime startDate, LocalDateTime endDate, String categoryName);
    float getAccountState(Integer userId);
    float getFamilyAccountState(Integer familyId);
    float getPaymentsSummary(Integer familyId, Integer userId, PaymentType paymentType,
                             LocalDateTime startDate, LocalDateTime endDate, String categoryName);

}
