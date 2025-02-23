package org.icet.crm.dto;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Customer {
    private Integer customerId;
    private String name;
    private String contactNumber;
    private Integer totalOrders;
    private boolean isDeleted;

}
