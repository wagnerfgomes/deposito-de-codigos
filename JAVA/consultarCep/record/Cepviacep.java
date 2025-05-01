package record;

import com.google.gson.annotations.SerializedName;

public record Cepviacep(String cep, String logradouro, String bairro,  @SerializedName("localidade") String cidade, String uf) {
}

