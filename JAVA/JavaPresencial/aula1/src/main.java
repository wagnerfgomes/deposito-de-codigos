import java.util.ArrayList;
import java.util.List;

public class main {
    public static void main(String[] args) {
        Pessoa p1 = new Pessoa("ana", 12, "f");
        Pessoa p2 = new Pessoa("pedro", 16, "m");
        Pessoa p3 = new Pessoa("daniel", 26, "m");
        Pessoa p4 = new Pessoa("lucas", 6, "m");
        Pessoa p5 = new Pessoa("carla", 18, "f");


        List<Pessoa> pessoas = new ArrayList<Pessoa>();
        pessoas.add(p1);
        pessoas.add(p2);
        pessoas.add(p3);
        pessoas.add(p4);
        pessoas.add(p5);

        List<Pessoa> pessoasAdultos = pessoas.stream().filter(p -> p.getIdade() >=18).toList();
        List<Pessoa> pessoasSexos = pessoas.stream().filter(p -> p.getIdade() >=18).toList();



    }
}
