package org.icet.crm.repository;

import org.icet.crm.entity.FoodItemEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StockRepository extends JpaRepository<FoodItemEntity,Integer> {
}
