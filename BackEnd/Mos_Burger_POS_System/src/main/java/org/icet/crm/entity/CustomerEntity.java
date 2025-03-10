package org.icet.crm.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "customer")
public class CustomerEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer customerId;

    private String name;
    private String contactNumber;
    private String address;

    @Column(name = "is_deleted",columnDefinition = "TINYINT(1)",nullable = false)
    private boolean isDeleted;

    @OneToMany(mappedBy = "customer")
    private List<OrderEntity> orders;


}
