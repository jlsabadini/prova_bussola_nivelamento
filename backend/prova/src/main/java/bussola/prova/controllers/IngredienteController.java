package bussola.prova.controllers;


import bussola.prova.models.IngredienteModel;
import bussola.prova.models.ReceitaModel;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import bussola.prova.services.IngredienteService;

import java.util.List;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/ingrediente")
@CrossOrigin("*")
public class IngredienteController {
    private final IngredienteService ingredienteService;

    @PostMapping
    public IngredienteModel save(@RequestBody IngredienteModel ingredienteModel) {
        return ingredienteService.save(ingredienteModel);
    }

    @GetMapping("/{id}")
    public Optional<IngredienteModel> findById(@PathVariable Long id) {
        return ingredienteService.findById(id);
    }

    @GetMapping
    public List<IngredienteModel> findAll() {
        return ingredienteService.findAll();
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable Long id) {
        ingredienteService.deleteById(id);
    }
}
