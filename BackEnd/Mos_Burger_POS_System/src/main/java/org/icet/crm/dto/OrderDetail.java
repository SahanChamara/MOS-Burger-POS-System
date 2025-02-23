package org.icet.crm.dto;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class OrderDetail {
    private Integer orderDetailId;
    private Integer quantity;
    private Double unitPrice;
    private Double subTotal;

}
