package Models;

import java.util.ArrayList;
import java.util.concurrent.RunnableScheduledFuture;


public class Staff
{
    public Staff(Chief chief) {
        this.waiters = new ArrayList<>();
        this.chief = chief;
    }

    private ArrayList<Waiter> waiters;

    private Chief chief;
    public ArrayList<Waiter> getWaiters() {
        return waiters;
    }

    public void setWaiters(ArrayList<Waiter> waiters) {
        this.waiters = waiters;
    }

    public Chief getChief() {
        return chief;
    }

    public void setChief(Chief chief) {
        this.chief = chief;
    }
}
