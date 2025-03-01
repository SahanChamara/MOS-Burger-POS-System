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
@Table(name = "foodItem")
public class FoodItemEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer itemId;
    private String itemName;
    private String category;
    private Double price;
    private Integer qtyOnHand;
    private Double itemDiscountPercentage;
    private LocalDate expirationDate;
    private String imagePath;

    @Column(name = "is_expired",columnDefinition = "TINYINT(1)",nullable = false)

    private boolean isExpired=false;

    @Column(name = "is_deleted", columnDefinition = "TINYINT(1)",nullable = false)
    private boolean isDeleted=false;

    @OneToMany(mappedBy = "foodItem")
    private List<OrderDetailEntity> orderDetails;

    public void softDelete(){
        this.isDeleted=true;
    }
}
