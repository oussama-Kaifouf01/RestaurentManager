package Models;

import java.util.ArrayList;


public class KitchenStaff

{
    private static int index = 0;
    public KitchenStaff(String name) {
        this.id = index;
        this.name = name;
        this.ordersToFulfill = new ArrayList<>();
        index++;
    }

    private int id;
    private String name;		
    private ArrayList<Order> ordersToFulfill;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public ArrayList<Order> getOrdersToFulfill() {
        return ordersToFulfill;
    }

    public void setOrdersToFulfill(ArrayList<Order> ordersToFulfill) {
        this.ordersToFulfill = ordersToFulfill;
    }
}
