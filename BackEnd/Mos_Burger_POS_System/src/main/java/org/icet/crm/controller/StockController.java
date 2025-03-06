package org.icet.crm.controller;

import lombok.RequiredArgsConstructor;
import org.icet.crm.dto.FoodItem;
import org.icet.crm.service.StockService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

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
    public ResponseEntity<List<FoodItem>> getAllFoodItems(){
        List<FoodItem> allFoodItems = stockService.getAllFoodItems();
        return allFoodItems.isEmpty()
                ? ResponseEntity.notFound().build()
                : ResponseEntity.ok(allFoodItems);
    }

/*    @GetMapping("/getFoodItemsDetail")
    public ResponseEntity<List<FoodItem>> getFoodItemsDetail(){
        List<FoodItem> foodItemList = stockService.foodItemDetails();
        return foodItemList.isEmpty()
                ? ResponseEntity.notFound().build()
                : ResponseEntity.ok(foodItemList);
    }*/

    @DeleteMapping("/delete/{itemId}")
    public ResponseEntity<String> delete(@PathVariable Integer itemId){
        if(stockService.delete(itemId)){
            return ResponseEntity.ok("Delete Successful");
        }
        return ResponseEntity.ok("Delete Failed");
    }

    @PutMapping("/update")
    public ResponseEntity<String> update(@RequestBody FoodItem foodItem){
        if(stockService.updateItem(foodItem)!=null){
            return ResponseEntity.ok("Update Successful");
        }
        return ResponseEntity.ok("Update Failed");
    }

    @GetMapping("/search/{category}")
    public ResponseEntity<Object> search(@PathVariable String category){
        try{
            return ResponseEntity.ok(stockService.searchItem(category));
        }catch (ResponseStatusException ex){
            return ResponseEntity.status(ex.getStatusCode()).body(ex.getReason());
        }
    }
    @GetMapping("/searchById/{itemId}")
    public FoodItem searchById(@PathVariable Integer itemId){
        return stockService.searchById(itemId);
    }
}
