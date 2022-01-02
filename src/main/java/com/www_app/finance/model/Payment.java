package com.www_app.finance.model;

import javax.persistence.*;
import java.time.LocalDateTime;


@Entity
@Table(name="payments")
public class Payment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "payment_id")
    private Integer paymentId;

    @Column(name = "amount")
    private float amount;
    @Column(name = "payment_date")
    private LocalDateTime paymentDate;
    @Column(name = "id_user")
    private Integer userId;
    @Column(name = "family_id")
    private Integer familyId;
    @Column(name = "category_name")
    private String categoryName;

    public Payment(float amount, LocalDateTime paymentDate, Integer userId, Integer familyId, String categoryName) {
        this.amount = amount;
        this.paymentDate = paymentDate;
        this.userId = userId;
        this.familyId = familyId;
        this.categoryName = categoryName;
    }

    public Payment(Integer paymentId, float amount, LocalDateTime paymentDate, Integer userId, Integer familyId, String categoryName) {
        this.paymentId = paymentId;
        this.amount = amount;
        this.paymentDate = paymentDate;
        this.userId = userId;
        this.familyId = familyId;
        this.categoryName = categoryName;
    }

    public Payment() {
    }

    public Integer getPaymentId() {
        return paymentId;
    }

    public void setPaymentId(Integer paymentId) {
        this.paymentId = paymentId;
    }

    public float getAmount() {
        return amount;
    }

    public void setAmount(float amount) {
        this.amount = amount;
    }

    public LocalDateTime getPaymentDate() {
        return paymentDate;
    }

    public void setPaymentDate(LocalDateTime paymentDate) {
        this.paymentDate = paymentDate;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public Integer getFamilyId() {
        return familyId;
    }

    public void setFamilyId(Integer familyId) {
        this.familyId = familyId;
    }

    public String getCategoryName() {
        return categoryName;
    }

    public void setCategoryName(String categoryName) {
        this.categoryName = categoryName;
    }
}
