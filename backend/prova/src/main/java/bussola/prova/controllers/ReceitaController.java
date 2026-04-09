package bussola.prova.controllers;

import bussola.prova.models.ReceitaModel;
import bussola.prova.services.ReceitaService;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/receita")
@CrossOrigin("*")
public class ReceitaController {
    private final ReceitaService receitaService;

    @PostMapping
    public ReceitaModel save(@RequestBody ReceitaModel receitaModel) {
        return receitaService.save(receitaModel);
    }

    @GetMapping("/{id}")
    public Optional<ReceitaModel> findById(@PathVariable Long id) {
        return receitaService.findById(id);
    }

    @GetMapping
    public List<ReceitaModel> findAll() {
        return receitaService.findAll();
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable Long id) {
        receitaService.deleteById(id);
    }
}
