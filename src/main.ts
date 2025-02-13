import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { JwtAuthGuard } from "./auth/guard/jwt-auth.guard";

async function start() {
  const PORT = process.env.PORT || 6000;
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle("Full-stack recommendation application")
    .setDescription("Documentation for REST API")
    .setVersion("1.0.0")
    .addTag("Kood")
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("/api/docs", app, document);

  await app.listen(PORT, () => console.log(`Server started on port = ${PORT}`));
}
start();
