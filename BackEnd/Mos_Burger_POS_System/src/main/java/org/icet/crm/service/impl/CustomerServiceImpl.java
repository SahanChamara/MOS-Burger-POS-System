package org.icet.crm.service.impl;

import lombok.RequiredArgsConstructor;
import org.icet.crm.dto.Customer;
import org.icet.crm.entity.CustomerEntity;
import org.icet.crm.repository.CustomerRepository;
import org.icet.crm.service.CustomerService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CustomerServiceImpl implements CustomerService {

    private final CustomerRepository customerRepository;
    private final ModelMapper mapper;

    @Override
    public List<Customer> getAllCustomer() {
        return customerRepository.findAll()
                .stream()
                .filter(customerEntity -> !customerEntity.isDeleted())
                .map(customerEntity -> mapper.map(customerEntity, Customer.class))
                .toList();
    }

    @Override
    public boolean addCustomer(Customer customer) {
        customerRepository.save(mapper.map(customer, CustomerEntity.class));
        return true;
    }

    @Override
    public boolean updateCustomer(Customer customer) {
        customerRepository.save(mapper.map(customer, CustomerEntity.class));
        return true;
    }

    @Override
    public boolean deleteCustomer(Integer customerId) {
        customerRepository.findById(customerId).ifPresent(customerEntity -> {
            customerEntity.softDelete();
            customerRepository.save(customerEntity);
        });
        return true;
    }

    @Override
    public Customer searchCustomer(Integer customerId) {
        return mapper.map(customerRepository.findById(customerId), Customer.class);
    }
}
