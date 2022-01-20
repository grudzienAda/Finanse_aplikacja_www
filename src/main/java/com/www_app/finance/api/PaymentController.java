package com.www_app.finance.api;

import com.www_app.finance.model.Payment;
import com.www_app.finance.model.PaymentType;
import com.www_app.finance.service.PaymentServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;

@RestController
@RequestMapping("api/payments")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class PaymentController {
    private final PaymentServiceImpl paymentService;

    @Autowired
    public PaymentController(PaymentServiceImpl paymentService) {
        this.paymentService = paymentService;
    }

    @PostMapping("/add")
    public Payment addPayment(@RequestParam float amount, @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime paymentDate,
                              @RequestParam Integer idUser, @RequestParam Integer idFamily,
                              @RequestParam String categoryName) {
        Payment payment = new Payment(amount, paymentDate, idUser, idFamily, categoryName);
        return paymentService.addPayment(payment);
    }

    @DeleteMapping("/remove/{paymentId}")
    public void removePayment(@PathVariable Integer paymentId) {
        paymentService.removePayment(paymentId);
    }

    @GetMapping
    public Iterable<Payment> getAllPayments() {
        return paymentService.getAllPayments();
    }

    @GetMapping("/{familyId}")
    public Iterable<Payment> getPaymentsFiltered(@PathVariable Integer familyId,
                                                 @RequestParam(required = false) Integer userId,
                                                 @RequestParam(defaultValue = "ALL", required = false) String paymentType,
                                                 @RequestParam(required = false)
                                                     @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME)
                                                             LocalDateTime startDate,
                                                 @RequestParam(required = false)
                                                     @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME)
                                                             LocalDateTime endDate,
                                                 @RequestParam(required = false) String categoryName) {

        return paymentService.getPaymentsFiltered(familyId, userId, PaymentType.valueOf(paymentType),
                startDate, endDate, categoryName);
    }

    @GetMapping(path = "/userAccount")
    public float getAccountState(@RequestParam Integer userId) {
        return paymentService.getAccountState(userId);
    }

    @GetMapping(path = "/familyAccount")
    public float getFamilyAccountState(@RequestParam Integer familyId) {
        return paymentService.getFamilyAccountState(familyId);
    }

    @GetMapping(path = "/{familyId}/summary")
    public float getPaymentsSummary(@PathVariable Integer familyId,
                                    @RequestParam(required = false) Integer userId,
                                    @RequestParam(defaultValue = "ALL", required = false) String paymentType,
                                    @RequestParam(required = false)
                                        @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME)
                                                LocalDateTime startDate,
                                    @RequestParam(required = false)
                                        @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME)
                                                LocalDateTime endDate,
                                    @RequestParam(required = false) String categoryName) {
        return paymentService.getPaymentsSummary(familyId, userId, PaymentType.valueOf(paymentType),
                startDate, endDate, categoryName);
    }
}
