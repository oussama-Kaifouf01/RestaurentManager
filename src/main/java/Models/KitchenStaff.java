package Models;

import java.util.ArrayList;


public class KitchenStaff

{
    private static int index = 0;
    public KitchenStaff(String name) {
        this.id = index;
        this.name = name;
        index++;
    }

    private int id;
    private String name;		


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

   }
