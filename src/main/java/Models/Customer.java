package Models;

public class Customer
{

    public Customer( Order order, boolean isComplain) {
        this.tableId = tableId;
        this.order = order;
        this.isComplain = isComplain;
        this.tableId++;
    }

    private static int tableId=0;
    private Order order;		
    private boolean isComplain;

    public int getTableId() {
        return tableId;
    }

    public void setTableId(int tableId) {
        this.tableId = tableId;
    }

    public Order getOrder() {
        return order;
    }

    public void setOrder(Order order) {
        this.order = order;
    }

    public boolean isComplain() {
        return isComplain;
    }

    public void setComplain(boolean complain) {
        isComplain = complain;
    }
}