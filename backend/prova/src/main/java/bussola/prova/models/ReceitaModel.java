package bussola.prova.models;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;



@Entity //declarar entidade
@Data //getters e setters
@AllArgsConstructor //construtores instanciados
@NoArgsConstructor //construtores vazios
@Table(name = "tb_receita") //nomear tabela
public class ReceitaModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;
    private int tempoPreparo ;
    private double custoAproximado;

}
