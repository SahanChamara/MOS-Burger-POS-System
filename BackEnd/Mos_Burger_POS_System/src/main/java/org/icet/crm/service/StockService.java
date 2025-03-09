package org.icet.crm.service;

import org.icet.crm.dto.FoodItem;
import org.icet.crm.dto.OrderDetail;

import java.util.List;

public interface StockService {
    FoodItem addItem(FoodItem foodItem);
    List<FoodItem> getAllFoodItems();
    boolean delete(Integer itemId);
    FoodItem updateItem(FoodItem foodItem);
    List<FoodItem> searchItem(String category);
    FoodItem searchById(Integer itemId);

    boolean updateFoodItemQty(List<OrderDetail> orderDetailList);
    boolean updateFoodItemQty(OrderDetail orderDetail);
}
