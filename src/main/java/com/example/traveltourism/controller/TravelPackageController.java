package com.example.traveltourism.controller;

import com.example.traveltourism.model.TravelPackage;
import com.example.traveltourism.service.TravelPackageService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/packages")
public class TravelPackageController {

    private final TravelPackageService service;

    public TravelPackageController(TravelPackageService service) {
        this.service = service;
    }

    @GetMapping
    public List<TravelPackage> getAllPackages() {
        return service.findAll();
    }

    @GetMapping("/{id}")
    public TravelPackage getPackageById(@PathVariable Long id) {
        return service.findById(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public TravelPackage createPackage(@Valid @RequestBody TravelPackage travelPackage) {
        return service.create(travelPackage);
    }

    @PutMapping("/{id}")
    public TravelPackage updatePackage(@PathVariable Long id, @Valid @RequestBody TravelPackage travelPackage) {
        return service.update(id, travelPackage);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePackage(@PathVariable Long id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}
