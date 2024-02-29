import Models.*;

import java.io.IOException;
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) throws IOException {



        Restaurent restaurent =new Restaurent("Oxaca", new Manager("Ouss"));

        restaurent.getMenu().importFromJsonFile("C:\\Users\\Oussama Kaifouf\\Desktop\\Resto app\\Dummy Java\\src\\main\\java\\Models\\meals.json");

//        System.out.println(restaurent.getMenu());

//        Restaurent restaurent = new Restaurent("Oxaca",new Manager("Oussama"));
//
//        ArrayList<Waiter> waiters = new ArrayList<>();
//        ArrayList<KitchenStaff> kitchenStaff = new ArrayList<>();
//
//        waiters.add(new Waiter("Models.Waiter 1","None"));
//        waiters.add(new Waiter("Models.Waiter 2","None"));
//        waiters.add(new Waiter("Models.Waiter 3","None"));
//        waiters.add(new Waiter("Models.Waiter 4","None"));
//
//
//        kitchenStaff.add(new KitchenStaff("Chief1"));
//        kitchenStaff.add(new KitchenStaff("Chief2"));
//        kitchenStaff.add(new KitchenStaff("Chief3"));
//        kitchenStaff.add(new KitchenStaff("Chief4"));
//
//        Staff staff = new Staff(waiters,kitchenStaff);
//        restaurent.setStaff(staff);
//
//
//        ArrayList<Meal> meals = new ArrayList<>();
//        ArrayList<String> ingredients = new ArrayList<>();
//        ingredients.add("3jina");
//        ingredients.add("frommage");
//        ingredients.add("matecha");
//        meals.add(new Meal("Pizza 4 frommages","None",30, ingredients,"Pizzas" ));
//        Menu menu = new Menu(meals);
//        restaurent.setMenu(menu);
//
//        Customer customer = new Customer(1,null,false);
//        ArrayList<OrderItem> orderItems = new ArrayList<>();
//        orderItems.add(new OrderItem(meals.get(0),2));
//        customer.setOrder(new Order(1,orderItems));
//        restaurent.addCustomer(customer);
    }

}
