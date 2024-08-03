package au.com.businessautomationtechnology.demoapp;

import au.com.businessautomationtechnology.demoapp.config.AsyncSyncConfiguration;
import au.com.businessautomationtechnology.demoapp.config.EmbeddedSQL;
import au.com.businessautomationtechnology.demoapp.config.JacksonConfiguration;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;
import org.springframework.boot.test.context.SpringBootTest;

/**
 * Base composite annotation for integration tests.
 */
@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@SpringBootTest(classes = { DemoappApp.class, JacksonConfiguration.class, AsyncSyncConfiguration.class })
@EmbeddedSQL
public @interface IntegrationTest {
}
