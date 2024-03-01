package Models;

import java.util.ArrayList;


public class Order
{
    public Order(ArrayList<OrderItem> orderItems) {
        this.orderId = orderId;
        this.orderItems = orderItems;
        this.totalPrice = 0;
        for (OrderItem orderItem: orderItems) {
            this.totalPrice=+ orderItem.getMeal().getPrice() * orderItem.getQuantity();
        }
        this.orderId++;
    }

    private static int orderId=0;
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

    @Override
    public String toString() {
        return "Order{" +
                "orderItems=" + orderItems +
                ", totalPrice=" + totalPrice +
                '}';
    }
}
