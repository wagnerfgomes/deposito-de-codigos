package service;

public class TaxService {
    public double calculateTax(double cost){
        System.out.println("Taxa aplicada: " + cost * 0.1);
        return cost * 0.1;
    }
}
