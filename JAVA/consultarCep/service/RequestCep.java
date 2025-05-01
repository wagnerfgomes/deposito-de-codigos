package service;

import com.google.gson.FieldNamingPolicy;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import model.Cep;
import record.Cepviacep;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

public class RequestCep {
    private final String API_KEY = System.getenv("API_KEY");
    private final String cep;

    public RequestCep(String cep) {
        this.cep = cep;
    }

    public Cep getJson() throws IOException, InterruptedException {
        HttpClient client = HttpClient.newHttpClient();
        String URL = "https://viacep.com.br/ws/" + cep + "/json/";
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(URL))
                .build();
        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
        String responseBody = response.body();
//        System.out.println(responseBody);

        Gson gson = new GsonBuilder()
                .setFieldNamingPolicy(FieldNamingPolicy.IDENTITY)
                .create();
        Cepviacep cepviacep = gson.fromJson(responseBody, Cepviacep.class);
//        System.out.println(cepviacep);
        return new Cep(cepviacep);
    }
}
