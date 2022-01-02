package com.www_app.finance.api;

import com.www_app.finance.service.FamilyServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/families")
public class FamilyController {
    private final FamilyServiceImpl familyService;

    @Autowired
    public FamilyController(FamilyServiceImpl familyService) {
        this.familyService = familyService;
    }

    @PostMapping(path="/{familyId}/add")
    public Integer addUserToFamily(@RequestParam String mail, @PathVariable Integer familyId) {
        return familyService.addUserToFamily(mail, familyId);
    }

    @DeleteMapping(path = "/{familyId}/remove")
    public Integer removeUserFromFamily(@RequestParam String mail, @PathVariable Integer familyId) {
        return familyService.removeUserFromFamily(mail, familyId);
    }

    @PostMapping(path="/createFamily")
    public Integer createFamily(@RequestParam String name, @RequestParam String mail) {
        return familyService.createFamily(name, mail);
    }

    @DeleteMapping(path="/removeFamily")
    public Integer removeFamily(@RequestParam Integer familyId) {
        return familyService.removeFamily(familyId);
    }
}
