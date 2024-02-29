package Models;

public class Manager
{
    public Manager(String name) {
        Name = name;
    }

    private String Name;

    public String getName() {
        return Name;
    }

    public void setName(String name) {
        Name = name;
    }


    public void addMeal(Menu menu,Meal meal)
    {
        menu.getMeals().add(meal);
    }

    public void addKitchenStaff(Staff staff,KitchenStaff kitchenStaff)
    {
        staff.getKitchenStaff().add(kitchenStaff);
    }

    public void addWaiter(Staff staff,Waiter waiter)
    {
        staff.getWaiters().add(waiter);
    }




}
