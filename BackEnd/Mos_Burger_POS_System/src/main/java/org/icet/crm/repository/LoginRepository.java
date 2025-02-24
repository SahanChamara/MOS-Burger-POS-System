package org.icet.crm.repository;

import org.icet.crm.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LoginRepository extends JpaRepository<UserEntity,Long> {
    UserEntity findByEmail(String email);
}
