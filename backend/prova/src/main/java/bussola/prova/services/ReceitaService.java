package bussola.prova.services;


import bussola.prova.models.ReceitaModel;
import bussola.prova.repositories.ReceitaRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ReceitaService {
    private final ReceitaRepository receitaRepository;

    public ReceitaModel save(ReceitaModel receitaModel) {
        return receitaRepository.save(receitaModel);
    }

    public List<ReceitaModel> findAll() {
        return receitaRepository.findAll();
    }


    public Optional<ReceitaModel> findById(Long id) {
        return receitaRepository.findById(id);
    }

    public void deleteById(Long id){
        receitaRepository.deleteById(id);
    }
}
