package Models;

import java.util.ArrayList;

public class Waiter
{
    private static int index = 0;

    public Waiter(String name, String picture) {
        this.id= index;
        this.name = name;
        this.picture = picture;
        this.customersToServe = new ArrayList<>();
        index ++;

    }

    private int id;
    private String name;		
    private String picture;		
    private ArrayList<Customer> customersToServe;

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

    public ArrayList<Customer> getCustomersToServe() {
        return customersToServe;
    }

    public void setCustomersToServe(ArrayList<Customer> customersToServe) {
        this.customersToServe = customersToServe;
    }

    @Override
    public String toString() {
        return "Waiter{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", picture='" + picture + '\'' +
                ", customersToServe=" + customersToServe +
                '}';
    }
}
