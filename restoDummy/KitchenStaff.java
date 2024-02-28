

import java.util.ArrayList;


class KitchenStaff
{
    public KitchenStaff(int id, String name, ArrayList<Order> ordersToFulfill) {
        this.id = id;
        this.name = name;
        this.ordersToFulfill = new ArrayList<>();
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
