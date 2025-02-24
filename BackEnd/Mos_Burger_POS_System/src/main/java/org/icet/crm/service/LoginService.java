package org.icet.crm.service;

import org.icet.crm.dto.User;

public interface LoginService {
    User authorizedUser(User user);
    boolean delete(Long id);
}
