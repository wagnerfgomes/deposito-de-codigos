package view;

public class View {

    public static String getInput(String message) {
        System.out.print(message);
        return new java.util.Scanner(System.in).nextLine();
    }
}
