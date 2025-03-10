package org.icet.crm.service;

import org.icet.crm.dto.Customer;

import java.util.List;

public interface CustomerService {
    List<Customer> getAllCustomer();
    boolean addCustomer(Customer customer);
    boolean updateCustomer(Customer customer);
    boolean deleteCustomer(Integer customerId);
    Customer searchCustomer(Integer customerId);
}
