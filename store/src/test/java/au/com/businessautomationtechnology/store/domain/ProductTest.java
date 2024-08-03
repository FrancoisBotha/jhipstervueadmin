package au.com.businessautomationtechnology.store.domain;

import static au.com.businessautomationtechnology.store.domain.ProductTestSamples.*;
import static org.assertj.core.api.Assertions.assertThat;

import au.com.businessautomationtechnology.store.web.rest.TestUtil;
import org.junit.jupiter.api.Test;

class ProductTest {

    @Test
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Product.class);
        Product product1 = getProductSample1();
        Product product2 = new Product();
        assertThat(product1).isNotEqualTo(product2);

        product2.setId(product1.getId());
        assertThat(product1).isEqualTo(product2);

        product2 = getProductSample2();
        assertThat(product1).isNotEqualTo(product2);
    }
}
