package org.icet.crm.service.impl;

import lombok.RequiredArgsConstructor;
import org.icet.crm.dto.User;
import org.icet.crm.entity.UserEntity;
import org.icet.crm.repository.LoginRepository;
import org.icet.crm.service.LoginService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class LoginServiceImpl implements LoginService {

    private final LoginRepository loginRepository;
    private final ModelMapper mapper;

    @Override
    public String authorizedUser(User user) {
        UserEntity userEntity = loginRepository.findByEmail(user.getEmail());
        if(userEntity!=null){
           return userEntity.getPassword().equals(user.getPassword()) ? "Success" : "Failed";
        }
        return "User Not Found";
    }

    @Override
    public boolean delete(Long id) {
        return true;
    }
}
