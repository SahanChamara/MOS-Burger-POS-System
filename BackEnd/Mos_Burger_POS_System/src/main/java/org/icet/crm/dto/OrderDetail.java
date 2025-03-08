package org.icet.crm.dto;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.icet.crm.entity.FoodItemEntity;
import org.icet.crm.entity.OrderEntity;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class OrderDetail {
    private Integer orderDetailId;
    private Integer quantity;
    private Double unitPrice;
    private Double subTotal;
    private OrderEntity order;
    private FoodItemEntity foodItem;

}
