package com.www_app.finance.service;

import com.www_app.finance.dao.FamilyRepository;
import com.www_app.finance.dao.UserRepository;
import com.www_app.finance.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.logging.Logger;

@Service
public class UserServiceImpl implements UserService{
    private final UserRepository userRepository;
    private final FamilyRepository familyRepository;
    private static Logger logger = Logger.getLogger(UserServiceImpl.class.getName());

    @Autowired
    public UserServiceImpl(UserRepository userRepository, FamilyRepository familyRepository) {
        this.userRepository = userRepository;
        this.familyRepository = familyRepository;
    }

    @Override
    public Integer addNewUser(User user) {
        //TODO: email verification
        if (getUserByMail(user.getMail()) == null) {
            try {
                userRepository.save(user);
                familyRepository.createFamily("Private account", user.getUserId());
                //familyRepository.addUserToFamily(user.getUserId(), familyRepository.getLastAddedFamilyId());
                return 1;
            } catch (Exception e) {
                logger.info("Unable to add new user.");
                return 0;
            }
        }
        else return 0;
    }

    @Override
    public Integer logIn(String mail, String password) {
        /**
         * Logs in user. Checks if mail and password are correct:
         *
         * @return 1 - success, 0 - no such mail, -1 - password doesn't match
         */
        User user = getUserByMail(mail);

        if (user == null) {
            return 0;
        }
        else if (user.getPassword().equals(password)) {
            return 1;
        }
        return -1;
    }

    @Override
    public Iterable<User> getAllUsers() {
        return userRepository.getAllUsers();
    }

    @Override
    public User getUserByMail(String mail) {
        return userRepository.getUserByMail(mail);
    }
}
