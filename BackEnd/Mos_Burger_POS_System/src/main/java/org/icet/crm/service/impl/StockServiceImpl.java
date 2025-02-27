package org.icet.crm.service.impl;

import lombok.RequiredArgsConstructor;
import org.icet.crm.dto.FoodItem;
import org.icet.crm.entity.FoodItemEntity;
import org.icet.crm.repository.StockRepository;
import org.icet.crm.service.StockService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class StockServiceImpl implements StockService {
    private final StockRepository stockRepository;
    private final ModelMapper mapper;

    @Override
    public FoodItem additem(FoodItem foodItem) {
        foodItem.setDeleted(false);
        foodItem.setExpired(false);
        return mapper.map(stockRepository.save(mapper.map(foodItem, FoodItemEntity.class)), FoodItem.class);
    }

    @Override
    public List<FoodItem> getAllFoodItems() {
        List<FoodItem> foodItemList = new ArrayList<>();
        for (FoodItemEntity foodItemEntity : stockRepository.findAll()) {
            foodItemList.add(mapper.map(foodItemEntity, FoodItem.class));
        }
        return Collections.unmodifiableList(foodItemList);
    }
}
