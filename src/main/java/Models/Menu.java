package Models;
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

import java.io.FileReader;
import java.io.IOException;
import java.lang.reflect.Type;
import java.util.ArrayList;

public class Menu
{
    public Menu() {
        this.meals = new ArrayList<>();
    }

    private ArrayList<Meal> meals;

    public ArrayList<Meal> getMeals() {
        return meals;
    }

    public void importFromJsonFile(String filePath) throws IOException {
        Gson gson = new Gson();
        Type menuType = new TypeToken<Menu>() {}.getType();

        try (FileReader reader = new FileReader(filePath)) {
            Menu menu = gson.fromJson(reader, menuType);

            System.out.println(menu);
//            this.meals=menu.getMeals();
        }
    }

    @Override
    public String toString() {
        return "Menu{" +
                "meals=" + meals +
                '}';
    }
}
