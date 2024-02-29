package Models;

import java.util.ArrayList;

public class Meal
{
    public Meal(String name, String picture, int price, ArrayList<String> ingredients, String category) {
        this.name = name;
        this.picture = picture;
        this.price = price;
        this.ingredients = ingredients;
        this.category = category;
    }

    private String name;
    private String picture;		
    private int price;		
    private ArrayList<String> ingredients;
    private String category;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPicture() {
        return picture;
    }

    public void setPicture(String picture) {
        this.picture = picture;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public ArrayList<String> getIngredients() {
        return ingredients;
    }

    public void setIngredients(ArrayList<String> ingredients) {
        this.ingredients = ingredients;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    @Override
    public String toString() {
        return "Meal{" +
                "name='" + name + '\'' +
                ", picture='" + picture + '\'' +
                ", price=" + price +
                ", ingredients=" + ingredients +
                ", category='" + category + '\'' +
                '}';
    }
}
