package org.icet.crm.controller;

import lombok.RequiredArgsConstructor;
import org.icet.crm.dto.FoodItem;
import org.icet.crm.service.StockService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/stock")
@CrossOrigin
@RequiredArgsConstructor
public class StockController {

    private final StockService stockService;

    @PostMapping("/add")
    public ResponseEntity<String> addItem(@RequestBody FoodItem foodItem){
         if(stockService.addItem(foodItem)!=null){
             return ResponseEntity.ok("Item Added Successful");
         }
        return ResponseEntity.ok("Item Added Failed");
    }

    @GetMapping("/getAll")
    public List<FoodItem> getAllFoodItems(){
        return stockService.getAllFoodItems();
    }

    @DeleteMapping("/delete/{itemId}")
    public ResponseEntity<String> delete(@PathVariable Integer itemId){
        if(stockService.delete(itemId)){
            return ResponseEntity.ok("Delete Successful");
        }
        return ResponseEntity.ok("Delete Failed");
    }

//    @PutMapping("/update")
//    public ResponseEntity<String> update(@RequestBody FoodItem foodItem){
//
//    }
}
