package Models;

import java.util.ArrayList;

public class Chief {

    public Chief(String name, String picture) {
        this.name = name;
        this.picture = picture;
        this.kitchenStaff = new ArrayList<>();
        this.ordersToFulfill = new ArrayList<>();
    }

    private String name;
    private String picture;
    private ArrayList<KitchenStaff> kitchenStaff;
    private ArrayList<Order> ordersToFulfill;
    public ArrayList<Order> getOrdersToFulfill() {
        return ordersToFulfill;
    }
    public String getName() {
        return name;
    }

    public void assignOrderToKitchenStaff(KitchenStaff kitchenStaff,Order order)
    {
        kitchenStaff.getOrdersToFullfill().push(order);
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

    public ArrayList<KitchenStaff> getKitchenStaff() {
        return kitchenStaff;
    }

    //test ss

    public void setKitchenStaff(ArrayList<KitchenStaff> kitchenStaff) {

        //test
        this.kitchenStaff = kitchenStaff;
    }
}


