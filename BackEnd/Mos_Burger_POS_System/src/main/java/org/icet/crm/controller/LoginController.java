package org.icet.crm.controller;

import lombok.RequiredArgsConstructor;
import org.icet.crm.dto.User;
import org.icet.crm.service.LoginService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/api/v1")
@RequiredArgsConstructor
public class LoginController {

    private final LoginService loginService;

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody User user){
        if(loginService.authorizedUser(user)!=null){
//            return ResponseEntity.status(HttpStatus.FOUND).build();
            return ResponseEntity.ok("Found");
        }
//        return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        return ResponseEntity.ok("Not Found");
    }
}
