package org.icet.crm.service.impl;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.icet.crm.dto.FoodItem;
import org.icet.crm.dto.OrderDetail;
import org.icet.crm.entity.FoodItemEntity;
import org.icet.crm.repository.StockRepository;
import org.icet.crm.service.StockService;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional
public class StockServiceImpl implements StockService {
    private final StockRepository stockRepository;
    private final ModelMapper mapper;

    @Override
    public FoodItem addItem(FoodItem foodItem) {
        foodItem.setDeleted(false);
        foodItem.setExpired(false);
        return mapper.map(stockRepository.save(mapper.map(foodItem, FoodItemEntity.class)), FoodItem.class);
    }

    @Override
    public List<FoodItem> getAllFoodItems() {
        List<FoodItem> foodItemList = new ArrayList<>();
        for (FoodItemEntity foodItemEntity : stockRepository.findActiveFoodItems()) {
            foodItemList.add(mapper.map(foodItemEntity, FoodItem.class));
        }
        return Collections.unmodifiableList(foodItemList);
    }

    @Override
    public boolean delete(Integer itemId) {
        stockRepository.findById(itemId).ifPresent(foodItemEntity -> {
            foodItemEntity.softDelete();
            stockRepository.save(foodItemEntity);
        });
        return true;
    }

    @Override
    public FoodItem updateItem(FoodItem foodItem) {
        return mapper.map(stockRepository.save(mapper.map(foodItem, FoodItemEntity.class)), FoodItem.class);
    }

    @Override
    public List<FoodItem> searchItem(String category) {
        List<FoodItem> foodItemList = new ArrayList<>();
        for (FoodItemEntity foodItemEntity : stockRepository.findByCategory(category)) {
            foodItemList.add(mapper.map(foodItemEntity, FoodItem.class));
        }

        if (foodItemList.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Category Not Found : " + category);
        }
        return Collections.unmodifiableList(foodItemList);
    }

    @Override
    public FoodItem searchById(Integer itemId) {
        return mapper.map(stockRepository.findById(itemId), FoodItem.class);
    }

    @Override
    public boolean updateFoodItemQty(List<OrderDetail> orderDetailList) {
        for (OrderDetail orderDetail : orderDetailList) {
            if(!updateFoodItemQty(orderDetail)){
                return false;
            }
        }
        return !orderDetailList.isEmpty();
    }

    @Override
    public boolean updateFoodItemQty(OrderDetail orderDetail) {
        return stockRepository.updateQtyOnHand(orderDetail.getFoodItem().getItemId(), orderDetail.getQuantity())>0;
    }

    /*@Override
    public List<FoodItem> foodItemDetails() {
        return stockRepository.findFoodItemDetails()
                .stream()
                .map(foodItemEntity -> mapper.map(foodItemEntity, FoodItem.class))
                .toList();
    }*/


}
