package service;

public class DeliveryServicea {

    public double calculateDeliveryPrice(String state){
        double tax = 0;

        if ("PE".equalsIgnoreCase(state)){
            tax = 10;
        }if ("SP".equalsIgnoreCase(state)){
            tax = 20;
        }

        System.out.println("Taxa de Entrega para " + state + " é de: "+ tax);
        return tax;
    }
}
