package org.icet.crm.service;

import org.icet.crm.dto.FoodItem;

import java.util.List;

public interface StockService {
    FoodItem additem(FoodItem foodItem);
    List<FoodItem> getAllFoodItems();
}
