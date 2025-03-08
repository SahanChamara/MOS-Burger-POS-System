package org.icet.crm.service;

import org.icet.crm.dto.OrderDetail;
import java.util.ArrayList;
import java.util.List;

public interface OrderDetailService {
    boolean addOrderDetails(List<OrderDetail> orderDetailList);
    boolean addOrderDetails(OrderDetail orderDetail);
}
