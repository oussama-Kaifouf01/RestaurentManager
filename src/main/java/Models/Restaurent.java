package Models;

import java.util.ArrayList;



public class Restaurent
{
    public Restaurent(String name, Manager manager,Chief chief) {
        this.menu= new Menu();
        this.name = name;
        this.manager = manager;
        this.customers = new ArrayList<>();
        this.staff = new Staff(chief);

    }

    private String name;
    private Manager manager;		
    private static Menu menu;		
    private Staff staff;		
    private ArrayList<Customer> customers;
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public Manager getManager() {
        return manager;
    }
    public void setManager(Manager manager) {
        this.manager = manager;
    }

    public static Menu getMenu() {
        return menu;
    }

    public static void setMenu(Menu menu) {
        Restaurent.menu = menu;
    }

    public Staff getStaff() {
        return staff;
    }

    public void setStaff(Staff staff) {
        this.staff = staff;
    }

    public ArrayList<Customer> getCustomers() {
        return customers;
    }

    public void addCustomer(Customer customer) {
        this.customers.add(customer);
        this.staff.getChief().getOrdersToFulfill().add(customer.getOrder());
    }

}


