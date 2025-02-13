package dev.ImeshDeZoysa07.crud.services;

import dev.ImeshDeZoysa07.crud.model.Product;
import dev.ImeshDeZoysa07.crud.repository.ProductRepository;
import dev.ImeshDeZoysa07.crud.shared.ProductDTO;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    public List<ProductDTO> findAll() {

        List<Product> products = productRepository.findAll();

        return products.stream()
                .map(product -> new ModelMapper()
                        .map(product, ProductDTO.class))
                .collect(Collectors.toList());
    }

    public Optional<ProductDTO> findById(int id) {

        Optional<Product> product = productRepository.findById(id);

        if (product.isEmpty()) {
            try {
                throw new ResourceNotFoundException("Id: " + id + " not found!");
            } catch (ResourceNotFoundException e) {
                throw new RuntimeException(e);
            }
        }

        ProductDTO dto = new ModelMapper().map(product.get(), ProductDTO.class);
        return Optional.of(dto);
    }

    // Here, we're gonna null the Id then set the id using the product.getId()
    // method over there.
    public ProductDTO addProduct(ProductDTO productDTO) {
        productDTO.setId(null);

        ModelMapper mapper = new ModelMapper();

        Product product = mapper.map(productDTO, Product.class);

        product = productRepository.save(product);

        productDTO.setId(product.getId());

        return productDTO;
    }

    public void delete(int id) {
        Optional<Product> product = productRepository.findById(id);

        if (product.isEmpty()) {
            try {
                throw new ResourceNotFoundException("Could not delete this product with id: " + id + ", product does not exist!");
            } catch (ResourceNotFoundException e) {
                throw new RuntimeException(e);
            }
        }

        productRepository.deleteById(id);
    }

    public ProductDTO update(int id, ProductDTO productDTO) {

        productDTO.setId(id);

        ModelMapper mapper = new ModelMapper();

        Product product = mapper.map(productDTO, Product.class);

        productRepository.save(product);

        return productDTO;
    }
}
