package org.icet.crm.service.impl;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.icet.crm.dto.Order;
import org.icet.crm.entity.OrderEntity;
import org.icet.crm.repository.OrderRepository;
import org.icet.crm.service.OrderService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Transactional
public class OrderServiceImpl implements OrderService {

    private final OrderRepository orderRepository;
    private final ModelMapper mapper;


    @Override
    public boolean placeOrder(Order order) {
        orderRepository.save(mapper.map(order, OrderEntity.class));
        return true;
    }

    @Override
    public Integer getLastOrderId() {
        return orderRepository.findLastOrderId()+1;
    }
}
