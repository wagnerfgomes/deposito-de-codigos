import service.DeliveryServicea;
import service.PriceService;
import service.TaxService;

public class Program {

    public static void main(String[] args){
        TaxService TaxService = new TaxService();
        DeliveryServicea DeliveryService = new DeliveryServicea();

        PriceService priceService = new PriceService(TaxService, DeliveryService);

        double price = priceService.calculateFinalPrice(1000, "sp");

    }

}