package com.www_app.finance.service;

import com.www_app.finance.dao.CategoryRepository;
import com.www_app.finance.dao.PaymentRepository;
import com.www_app.finance.model.Payment;
import com.www_app.finance.model.PaymentType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.stream.Collectors;
import java.util.stream.Stream;
import java.util.stream.StreamSupport;


@Service
public class PaymentServiceImpl implements PaymentService{
    private final PaymentRepository paymentRepository;
    private final CategoryRepository categoryRepository;

    @Autowired
    public PaymentServiceImpl(PaymentRepository paymentRepository, CategoryRepository categoryRepository) {
        this.paymentRepository = paymentRepository;
        this.categoryRepository = categoryRepository;
    }

    @Override
    public Payment addPayment(Payment payment) {
        addCategoryIfNotExists(payment.getCategoryName());
        return paymentRepository.save(payment);
    }

    private void addCategoryIfNotExists(String categoryName) {
        if (categoryRepository.getCategoryByCategoryName(categoryName) == null) {
            categoryRepository.addCategory(categoryName);
        }
    }

    @Override
    public void removePayment(Integer paymentId) {
        paymentRepository.deleteById(paymentId);
    }

    @Override
    public Iterable<Payment> getAllPayments() {
        return paymentRepository.findAll();
    }

    @Override
    public Iterable<Payment> getPaymentsFiltered(Integer familyId, Integer userId, PaymentType paymentType,
                                                 LocalDateTime startDate, LocalDateTime endDate, String categoryName) {

        Iterable<Payment> payments = paymentRepository.getPaymentsByFamilyId(familyId);
        Stream<Payment> paymentStream = StreamSupport.stream(payments.spliterator(), false);
        if (userId != null) {
            paymentStream = paymentStream.filter(payment -> payment.getUserId().equals(userId));
        }
        if (paymentType.equals(PaymentType.INCOME)) {
            paymentStream = paymentStream.filter(payment -> payment.getAmount() > 0);
        }
        else if (paymentType.equals(PaymentType.EXPENSE)) {
            paymentStream = paymentStream.filter(payment -> payment.getAmount() < 0);
        }
        if (startDate != null) {
            paymentStream = paymentStream.filter(payment -> payment.getPaymentDate().isAfter(startDate));
        }
        if (endDate != null) {
            paymentStream = paymentStream.filter(payment -> payment.getPaymentDate().isBefore(endDate));
        }
        if (categoryName != null) {
            paymentStream = paymentStream.filter(payment -> payment.getCategoryName().equals(categoryName));
        }

        return paymentStream.collect(Collectors.toList());
    }

    @Override
    public float getAccountState(Integer userId) {
        return paymentRepository.getAccountState(userId);
    }

    @Override
    public float getFamilyAccountState(Integer familyId) {
        return paymentRepository.getFamilyAccountState(familyId);
    }

    @Override
    public float getPaymentsSummary(Integer familyId, Integer userId, PaymentType paymentType, LocalDateTime startDate, LocalDateTime endDate, String categoryName) {
        Iterable<Payment> payments = getPaymentsFiltered(familyId, userId, paymentType, startDate, endDate, categoryName);
        Stream<Payment> paymentStream = StreamSupport.stream(payments.spliterator(), false);

        return (float) paymentStream.mapToDouble(Payment::getAmount).sum();
    }

}
