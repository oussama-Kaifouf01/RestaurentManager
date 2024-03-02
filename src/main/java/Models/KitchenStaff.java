package Models;

import java.util.ArrayList;
import java.util.Stack;


public class KitchenStaff

{
    private static int index = 0;
    public KitchenStaff(String name) {
        this.id = index;
        this.name = name;
        ordersToFullfill=new Stack<>();
        index++;
    }

    private int id;
    private String name;		

    private Stack<Order> ordersToFullfill;
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

    public Stack<Order> getOrdersToFullfill() {
        return ordersToFullfill;
    }

}
