package au.com.businessautomationtechnology.demoapp.security.jwt;

import au.com.businessautomationtechnology.demoapp.config.SecurityConfiguration;
import au.com.businessautomationtechnology.demoapp.config.SecurityJwtConfiguration;
import au.com.businessautomationtechnology.demoapp.config.WebConfigurer;
import au.com.businessautomationtechnology.demoapp.management.SecurityMetersService;
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
