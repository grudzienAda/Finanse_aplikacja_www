package com.www_app.finance.api;

import com.www_app.finance.dao.UserRepository;
import com.www_app.finance.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path="/")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @PostMapping(path="/add")
    public @ResponseBody Integer addNewUser(@RequestParam String name, @RequestParam String mail, @RequestParam String password) {
        User user = new User();
        user.setName(name);
        user.setMail(mail);
        user.setPassword(password);
        try {
            userRepository.save(user);
            return 1;
        } catch (Exception e) {
            System.out.println("An error occurred.");
            System.out.println(e);
            return 0;
        }
    }

    @GetMapping(path="/login")
    public @ResponseBody Integer logIn(@RequestParam String mail, @RequestParam String password) {
        /**
         * Logs in user. Check if mail and password are correct:
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

    @GetMapping(path="/users")
    public @ResponseBody Iterable<User> getAllUsers() {
        // This returns a JSON or XML with the users
        return userRepository.findAll();
    }

    @PostMapping(path="/{familyId}/add")
    public Integer addUserToFamily(@RequestParam String mail, @PathVariable Integer familyId) {
        User user = getUserByMail(mail);
        return userRepository.addUserToFamily(user.getIdUser(), familyId);
    }

    @DeleteMapping(path = "/{familyId}/remove")
    public Integer removeUserFromFamily(@RequestParam String mail, @PathVariable Integer familyId) {
        User user = getUserByMail(mail);
        return userRepository.removeUserFromFamily(user.getIdUser(), familyId);
    }

    @PostMapping(path="/createFamily")
    public Integer createFamily(@RequestParam String name, @RequestParam String mail) {
        User user = getUserByMail(mail);
        return userRepository.createFamily(name, user.getIdUser());
    }

    @DeleteMapping(path="/removeFamily")
    public Integer removeFamily(@RequestParam Integer familyId) {
        return userRepository.removeFamily(familyId);
    }

    @GetMapping(path = "/users/{mail}")
    public @ResponseBody User getUserByMail(@PathVariable String mail) {
        return userRepository.getUserByMail(mail);
    }
}
