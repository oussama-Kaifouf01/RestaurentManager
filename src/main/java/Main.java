import Models.*;

import java.io.IOException;
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) throws IOException {

        Restaurent restaurent =new Restaurent("Oxaca", new Manager("Ouss"),new Chief("Chief 1","None"));

        restaurent.getMenu().importFromJsonFile("C:\\Users\\Oussama Kaifouf\\Desktop\\Resto app\\Dummy Java\\src\\main\\java\\Models\\meals.json");

        System.out.println(restaurent.getMenu());
        restaurent.getManager().addWaiter(restaurent.getStaff(),new Waiter("Hassan","None"));

        ArrayList<OrderItem> orderItems = new ArrayList<>();
        orderItems.add(new OrderItem(restaurent.getMenu().getMeals().get(0),2));
        orderItems.add(new OrderItem(restaurent.getMenu().getMeals().get(1),4));

        restaurent.addCustomer(new Customer(new Order(orderItems)));

        System.out.println(restaurent.getCustomers().get(0).getOrder().getTotalPrice());
        System.out.println(restaurent.getStaff().getChief().getOrdersToFulfill());
    }

}
