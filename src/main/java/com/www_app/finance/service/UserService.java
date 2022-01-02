package com.www_app.finance.service;

import com.www_app.finance.model.User;

public interface UserService {
    Integer addNewUser(User user);
    Integer logIn(String mail, String password);

    Iterable<User> getAllUsers();
    User getUserByMail(String mail);
}
