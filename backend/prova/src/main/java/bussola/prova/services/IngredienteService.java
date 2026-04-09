package bussola.prova.services;


import bussola.prova.models.IngredienteModel;
import bussola.prova.repositories.IngredienteRepository;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
@RequiredArgsConstructor
public class IngredienteService {
    public final IngredienteRepository ingredienteRepository;

    public IngredienteModel save(IngredienteModel ingredienteModel) {
        return ingredienteRepository.save(ingredienteModel);
    } //POST

    public List<IngredienteModel> findAll() {
        return ingredienteRepository.findAll();
    }


    public Optional<IngredienteModel> findById(Long id) {
        return ingredienteRepository.findById(id);
    }


    public void deleteById(Long id){
        ingredienteRepository.deleteById(id);
    } //DELETE
}