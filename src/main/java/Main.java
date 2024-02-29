import Models.*;

import java.io.IOException;
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) throws IOException {



        Restaurent restaurent =new Restaurent("Oxaca", new Manager("Ouss"));

        restaurent.getMenu().importFromJsonFile("C:\\Users\\Oussama Kaifouf\\Desktop\\Resto app\\Dummy Java\\src\\main\\java\\Models\\meals.json");

        System.out.println(restaurent.getMenu());
        restaurent.getManager().addWaiter(restaurent.getStaff(),new Waiter("Hassan","None"));
        restaurent.addCustomer(new Customer(new Order()));

    }

}
