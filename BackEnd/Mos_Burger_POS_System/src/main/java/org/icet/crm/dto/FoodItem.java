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
public class FoodItem {
    private Integer itemId;
    private String itemName;
    private String category;
    private Double price;
    private Integer qtyOnHand;
    private Double itemDiscountPercentage;
    private LocalDate expirationDate;
    private boolean isExpired;
    private boolean isDeleted;
}
