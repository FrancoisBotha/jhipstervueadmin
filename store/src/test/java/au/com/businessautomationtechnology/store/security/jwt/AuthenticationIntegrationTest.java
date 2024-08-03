package au.com.businessautomationtechnology.store.security.jwt;

import au.com.businessautomationtechnology.store.config.SecurityConfiguration;
import au.com.businessautomationtechnology.store.config.SecurityJwtConfiguration;
import au.com.businessautomationtechnology.store.config.WebConfigurer;
import au.com.businessautomationtechnology.store.management.SecurityMetersService;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;
import org.springframework.boot.test.context.SpringBootTest;
import tech.jhipster.config.JHipsterProperties;

@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@SpringBootTest(
    classes = {
        JHipsterProperties.class,
        WebConfigurer.class,
        SecurityConfiguration.class,
        SecurityJwtConfiguration.class,
        SecurityMetersService.class,
        JwtAuthenticationTestUtils.class,
    }
)
public @interface AuthenticationIntegrationTest {
}
