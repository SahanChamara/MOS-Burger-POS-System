package org.icet.crm.repository;

import jakarta.transaction.Transactional;
import org.icet.crm.entity.FoodItemEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface StockRepository extends JpaRepository<FoodItemEntity,Integer> {
    @Query("SELECT f FROM FoodItemEntity f WHERE f.isDeleted=false")
    List<FoodItemEntity> findActiveFoodItems();

    List<FoodItemEntity> findByCategory(String category);

    @Transactional
    @Modifying
    @Query("UPDATE FoodItemEntity f SET f.qtyOnHand = f.qtyOnHand-:qtyOnHand WHERE f.itemId = :itemId")
    Integer updateQtyOnHand(@Param("itemId") Integer itemId,@Param("qtyOnHand") Integer qtyOnHand);

    /*@Query(value = "SELECT item_id, item_name,category,price,image_path FROM food_item  WHERE is_deleted=false",nativeQuery = true)
    List<FoodItemEntity> findFoodItemDetails();*/

}
