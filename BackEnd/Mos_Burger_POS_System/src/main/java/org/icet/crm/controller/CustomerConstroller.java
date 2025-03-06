package org.icet.crm.controller;

import lombok.RequiredArgsConstructor;
import org.icet.crm.dto.Customer;
import org.icet.crm.service.CustomerService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/customer")
@CrossOrigin
@RequiredArgsConstructor
public class CustomerConstroller {

    private final CustomerService customerService;

    @GetMapping("/getAll")
    public ResponseEntity<List<Customer>> getAllCustomer() {

        List<Customer> allCustomer = customerService.getAllCustomer();
        return allCustomer.isEmpty()
                ? ResponseEntity.notFound().build()
                : ResponseEntity.ok(allCustomer);
    }
}
