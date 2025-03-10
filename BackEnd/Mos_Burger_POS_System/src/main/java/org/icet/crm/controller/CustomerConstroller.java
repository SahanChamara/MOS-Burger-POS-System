package org.icet.crm.controller;

import lombok.RequiredArgsConstructor;
import org.icet.crm.dto.Customer;
import org.icet.crm.service.CustomerService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping("/add")
    public ResponseEntity<String> addCustomer(@RequestBody Customer customer){
        return customerService.addCustomer(customer) ? ResponseEntity.ok("Customer Saved Success") : ResponseEntity.ok("Customer saved Failed");
    }

    @PutMapping("/update")
    public ResponseEntity<String> updateCustomer(@RequestBody Customer customer){
        return customerService.updateCustomer(customer) ? ResponseEntity.ok("Customer Update Success") : ResponseEntity.ok("Customer Update Failed");
    }

    @DeleteMapping("/delete/{customerId}")
    public ResponseEntity<String> deleteCustomer(@PathVariable Integer customerId){
        return customerService.deleteCustomer(customerId) ? ResponseEntity.ok("Customer Delete Success") : ResponseEntity.ok("Customer Delete Failed");
    }

    @GetMapping("/search/{customerId}")
    public ResponseEntity<Customer> searchCustomer(@PathVariable Integer customerId){
        Customer customer = customerService.searchCustomer(customerId);
        return customer != null ? ResponseEntity.ok(customer) : ResponseEntity.notFound().build();
    }
}
