package com.www_app.finance.model;

import javax.persistence.*;

@Entity
@Table(name="categories")
public class Category {
    @Id
    @Column(name = "category_name")
    String categoryName;
    @Column(name = "category_description")
    String categoryDescription;

    public String getCategoryName() {
        return categoryName;
    }

    public void setCategoryName(String categoryName) {
        this.categoryName = categoryName;
    }

    public String getCategoryDescription() {
        return categoryDescription;
    }

    public void setCategoryDescription(String categoryDescription) {
        this.categoryDescription = categoryDescription;
    }
}
