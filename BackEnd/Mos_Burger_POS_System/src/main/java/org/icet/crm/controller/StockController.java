package org.icet.crm.controller;

import lombok.RequiredArgsConstructor;
import org.icet.crm.dto.FoodItem;
import org.icet.crm.service.StockService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/stock")
@CrossOrigin
@RequiredArgsConstructor
public class StockController {

    private final StockService stockService;

    @PostMapping("/add")
    public ResponseEntity<String> addItem(@RequestBody FoodItem foodItem){
         if(stockService.additem(foodItem)!=null){
             return ResponseEntity.ok("Item Added Successful");
         }
        return ResponseEntity.ok("Item Added Failed");
    }
}
