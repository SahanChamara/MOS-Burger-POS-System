package org.icet.crm.controller;

import lombok.RequiredArgsConstructor;
import org.icet.crm.dto.Order;
import org.icet.crm.service.OrderService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/placeOrder")
@RequiredArgsConstructor
@CrossOrigin
public class OrderController {

    private final OrderService orderService;

    @PostMapping("/place")
    public ResponseEntity<String> placeOrder(@RequestBody Order order){
        orderService.placeOrder(order);
        return ResponseEntity.ok("success");
    }

    @GetMapping("/lastOrderId")
    public ResponseEntity<Integer> lastOrderId(){
        return ResponseEntity.ok(orderService.getLastOrderId());
    }
}
