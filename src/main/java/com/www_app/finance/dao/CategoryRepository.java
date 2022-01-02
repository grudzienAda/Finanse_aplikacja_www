package com.www_app.finance.dao;

import com.www_app.finance.model.Category;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryRepository extends CrudRepository<Category, String> {

    @Query(value = "INSERT INTO categories VALUES (?1, '')", nativeQuery = true)
    void addCategory(String categoryName);

    @Query(value = "INSERT INTO categories VALUES (?1, ?2)", nativeQuery = true)
    void addCategoryDescription(String categoryName, String categoryDescription);

    @Query
    Category getCategoryByCategoryName(String categoryName);
}
