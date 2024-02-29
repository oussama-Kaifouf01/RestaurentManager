package Models;

public class OrderItem
{
    public OrderItem(Meal meal, int quantity) {
        this.meal = meal;
        this.quantity = quantity;
    }

    private Meal meal;
    private int quantity;		
    private int price;

    public Meal getMeal() {
        return meal;
    }

    public void setMeal(Meal meal) {
        this.meal = meal;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }
}
