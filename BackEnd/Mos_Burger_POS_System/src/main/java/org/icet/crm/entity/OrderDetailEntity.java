package org.icet.crm.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "orderDetail")
public class OrderDetailEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer orderDetailId;
    private Integer quantity;
    private Double unitPrice;
    private Double subTotal;

    @ManyToOne
    @JoinColumn(name = "orderId")
    private OrderEntity order;

    @ManyToOne
    @JoinColumn(name = "itemId")
    private FoodItemEntity foodItem;
}
