package service;

public class PriceService {
    private TaxService taxService;
    private DeliveryServicea deliveryService;

    public PriceService(TaxService taxService, DeliveryServicea deliveryService) {
        this.taxService = taxService;
        this.deliveryService = deliveryService;
    }

    public double calculateFinalPrice(double cost, String state){
        double price = cost + taxService.calculateTax(cost) + deliveryService.calculateDeliveryPrice(state);
        System.out.println("Preco final: " + price);
        return price;
    }
}
