package org.icet.crm.service;

import org.icet.crm.dto.Order;

public interface OrderService {
    boolean placeOrder(Order order);
    Integer getLastOrderId();
}
