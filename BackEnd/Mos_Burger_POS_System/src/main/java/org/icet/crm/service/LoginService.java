package org.icet.crm.service;

import org.icet.crm.dto.User;

public interface LoginService {
    String authorizedUser(User user);
    boolean delete(Long id);
}
