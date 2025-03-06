package org.icet.crm.repository;

import org.icet.crm.entity.FoodItemEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface StockRepository extends JpaRepository<FoodItemEntity,Integer> {
    @Query("SELECT f FROM FoodItemEntity f WHERE f.isDeleted=false")
    List<FoodItemEntity> findActiveFoodItems();

    List<FoodItemEntity> findByCategory(String category);

    /*@Query(value = "SELECT item_id, item_name,category,price,image_path FROM food_item  WHERE is_deleted=false",nativeQuery = true)
    List<FoodItemEntity> findFoodItemDetails();*/

}
