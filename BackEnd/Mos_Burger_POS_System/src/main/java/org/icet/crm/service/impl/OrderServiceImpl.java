package org.icet.crm.service.impl;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.icet.crm.dto.Order;
import org.icet.crm.dto.OrderDetail;
import org.icet.crm.entity.CustomerEntity;
import org.icet.crm.entity.OrderDetailEntity;
import org.icet.crm.entity.OrderEntity;
import org.icet.crm.repository.OrderRepository;
import org.icet.crm.service.OrderService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;

@Service
@RequiredArgsConstructor
@Transactional
public class OrderServiceImpl implements OrderService {

    private final OrderRepository orderRepository;
    private final ModelMapper mapper;


    @Override
    public boolean placeOrder(Order order) {
        order.setOrderDate(LocalDate.now());
        Double totalAmount = order.getTotalAmount();

        //calculation Final Amount
        double discountPrice = totalAmount * order.getDiscountPercentage() / 100;
        double finalAmount = totalAmount-discountPrice;

        ArrayList<OrderDetailEntity> orderDetailEntityArrayList = new ArrayList<>();

        for (OrderDetail orderDetail : order.getOrderDetailList()) {
            orderDetailEntityArrayList.add(mapper.map(orderDetail, OrderDetailEntity.class));
        }

        OrderEntity orderEntity = new OrderEntity();
        orderEntity.setOrderId(order.getOrderId());
        orderEntity.setOrderDate(order.getOrderDate());
        orderEntity.setTotalAmount(totalAmount);
        orderEntity.setFinalAmount(finalAmount);
        orderEntity.setDiscountPercentage(order.getDiscountPercentage());
        orderEntity.setCustomer(mapper.map(order.getCustomer(), CustomerEntity.class));
        orderEntity.setOrderDetails(orderDetailEntityArrayList);

        OrderEntity savedOrder = orderRepository.save(orderEntity);
        return savedOrder != null;
    }

    @Override
    public Integer getLastOrderId() {
        return orderRepository.findLastOrderId()+1;
    }
}
