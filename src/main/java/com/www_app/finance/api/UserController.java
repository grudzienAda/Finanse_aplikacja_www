package com.www_app.finance.api;

import com.www_app.finance.model.User;
import com.www_app.finance.service.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path="api/users")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class UserController {

    private final UserServiceImpl userService;

    @Autowired
    public UserController(UserServiceImpl userService) {
        this.userService = userService;
    }

    @GetMapping()
    public @ResponseBody Iterable<User> getAllUsers() {
        // This returns a JSON or XML with the users
        return userService.getAllUsers();
    }

    @PostMapping(path="/add")
    public @ResponseBody Integer addNewUser(@RequestParam String name, @RequestParam String mail, @RequestParam String password) {
        User user = new User();
        user.setName(name);
        user.setMail(mail);
        user.setPassword(password);
        return userService.addNewUser(user);
    }

    @GetMapping(path="/login")
    public @ResponseBody Integer logIn(@RequestParam String mail, @RequestParam String password) {
        return userService.logIn(mail, password);
    }

    @GetMapping(path = "/{mail}")
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    public @ResponseBody User getUserByMail(@PathVariable String mail) {
        return userService.getUserByMail(mail);
    }

}
