package com.example.traveltourism.service;

import com.example.traveltourism.exception.ResourceNotFoundException;
import com.example.traveltourism.model.TravelPackage;
import com.example.traveltourism.repository.TravelPackageRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TravelPackageService {

    private final TravelPackageRepository repository;

    public TravelPackageService(TravelPackageRepository repository) {
        this.repository = repository;
    }

    public List<TravelPackage> findAll() {
        return repository.findAll();
    }

    public TravelPackage findById(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Travel package not found with id: " + id));
    }

    public TravelPackage create(TravelPackage travelPackage) {
        travelPackage.setId(null);
        return repository.save(travelPackage);
    }

    public TravelPackage update(Long id, TravelPackage travelPackage) {
        TravelPackage existing = findById(id);
        existing.setTitle(travelPackage.getTitle());
        existing.setDestination(travelPackage.getDestination());
        existing.setPrice(travelPackage.getPrice());
        existing.setDescription(travelPackage.getDescription());
        return repository.save(existing);
    }

    public void delete(Long id) {
        TravelPackage existing = findById(id);
        repository.delete(existing);
    }
}
