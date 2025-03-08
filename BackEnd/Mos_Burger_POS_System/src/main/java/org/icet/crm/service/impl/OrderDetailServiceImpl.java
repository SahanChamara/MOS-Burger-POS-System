package org.icet.crm.service.impl;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.icet.crm.dto.OrderDetail;
import org.icet.crm.entity.OrderDetailEntity;
import org.icet.crm.repository.OrderDetailRepository;
import org.icet.crm.service.OrderDetailService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class OrderDetailServiceImpl implements OrderDetailService {

    private final OrderDetailRepository orderDetailRepository;
    private final ModelMapper mapper;

    @Override
    public boolean addOrderDetails(List<OrderDetail> orderDetailList) {
        for (OrderDetail orderDetail : orderDetailList) {
            if(!addOrderDetails(orderDetail)){
                return false;
            }
        }
        return !orderDetailList.isEmpty();
    }

    @Override
    public boolean addOrderDetails(OrderDetail orderDetail) {
        orderDetail.setSubTotal(orderDetail.getUnitPrice()*orderDetail.getQuantity());

        System.out.println("order Detail Fetching Method : "+ orderDetail);

        OrderDetailEntity orderDetailEntity = orderDetailRepository.save(mapper.map(orderDetail, OrderDetailEntity.class));
        return orderDetailEntity!=null;
    }
}
