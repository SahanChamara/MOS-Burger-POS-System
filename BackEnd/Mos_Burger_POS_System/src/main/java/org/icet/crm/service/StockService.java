package org.icet.crm.service;

import org.icet.crm.dto.FoodItem;

import java.util.List;

public interface StockService {
    FoodItem addItem(FoodItem foodItem);
    List<FoodItem> getAllFoodItems();
    boolean delete(Integer itemId);
    FoodItem updateItem(FoodItem foodItem);
}
