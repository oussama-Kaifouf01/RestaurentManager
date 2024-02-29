package Models;

import java.util.ArrayList;


public class Order
{
    public Order(int orderId, ArrayList<OrderItem> orderItems) {
        this.orderId = orderId;
        this.orderItems = orderItems;
        this.totalPrice = 0;
    }

    private int orderId;
    private ArrayList<OrderItem> orderItems;
    private int totalPrice;

    public int getOrderId() {
        return orderId;
    }

    public void setOrderId(int orderId) {
        this.orderId = orderId;
    }

    public ArrayList<OrderItem> getOrderItems() {
        return orderItems;
    }

    public void setOrderItems(ArrayList<OrderItem> orderItems) {
        this.orderItems = orderItems;
    }

    public int getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(int totalPrice) {
        this.totalPrice = totalPrice;
    }


}
