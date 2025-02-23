package org.icet.crm.dto;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Order {
    private Integer orderId;
    private LocalDate orderDate;
    private Double totalAmount;
    private Double finalAmount;
    private Double discountPercentage;
}
