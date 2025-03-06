package org.icet.crm.service.impl;

import lombok.RequiredArgsConstructor;
import org.icet.crm.dto.Customer;
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
}
