package org.icet.crm.dto;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.icet.crm.enums.UserRole;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {
    private Integer userId;
    private String userName;
    private String password;
    private String email;
    private UserRole userRole;
    private boolean isDeleted;

}
