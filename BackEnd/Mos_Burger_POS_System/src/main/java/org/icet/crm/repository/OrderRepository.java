package org.icet.crm.repository;

import org.icet.crm.entity.OrderEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface OrderRepository extends JpaRepository<OrderEntity,Integer> {

    @Query("SELECT o.orderId FROM OrderEntity o ORDER BY orderId DESC LIMIT 1")
    Integer findLastOrderId();
}
