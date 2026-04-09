package bussola.prova.models;



import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity //declarar entidade
@Data //getters e setters
@AllArgsConstructor //construtores instanciados
@NoArgsConstructor //construtores vazios
@Table(name = "tb_ingrediente") //nomear tabela
public class IngredienteModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;


    @ManyToOne //muitos pra um
    @JoinColumn(name = "id_receita") //adicionando receita_id na coluna
    private ReceitaModel receita;
}

