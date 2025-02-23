package org.icet.crm.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "orders")
public class OrderEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer orderId;
    private LocalDate orderDate;
    private Double totalAmount;
    private Double finalAmount;
    private Double discountPercentage;

    @ManyToOne
    @JoinColumn(name = "customerId")
    private CustomerEntity customer;

    @OneToMany(mappedBy = "order")
    private List<OrderDetailEntity> orderDetails;
}
