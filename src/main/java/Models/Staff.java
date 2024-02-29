package Models;

import java.util.ArrayList;


public class Staff
{
    public Staff() {
        this.waiters = new ArrayList<>();
        this.kitchenStaff = new ArrayList<>();
    }

    private ArrayList<Waiter> waiters;
    private ArrayList<KitchenStaff> kitchenStaff;

    public ArrayList<Waiter> getWaiters() {
        return waiters;
    }

    public void setWaiters(ArrayList<Waiter> waiters) {
        this.waiters = waiters;
    }

    public ArrayList<KitchenStaff> getKitchenStaff() {
        return kitchenStaff;
    }

    public void setKitchenStaff(ArrayList<KitchenStaff> kitchenStaff) {
        this.kitchenStaff = kitchenStaff;
    }

    @Override
    public String toString() {
        return "Staff{" +
                "waiters=" + waiters +
                ", kitchenStaff=" + kitchenStaff +
                '}';
    }
}
