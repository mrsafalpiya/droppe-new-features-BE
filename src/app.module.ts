import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypedConfigModule, dotenvLoader } from 'nest-typed-config';
import { Config } from './config';
import { DrizzleModule } from './drizzle/drizzle.module';
import { CacheModule } from '@nestjs/cache-manager';
import { LoggerModule } from 'nestjs-pino';
import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './categories/categories.module';
import { ProductFeaturesModule } from './product_features/product_features.module';
import { ProductLabelsModule } from './product_labels/product_labels.module';
import { ProductUseCasesModule } from './product_use_cases/product_use_cases.module';
import { StandardsModule } from './standards/standards.module';
import * as redisStore from 'cache-manager-redis-store';

@Module({
  imports: [
    LoggerModule.forRoot({
      pinoHttp: {
        customProps: () => ({
          context: 'HTTP',
        }),
        transport: {
          targets: [
            {
              target: 'pino-pretty',
              options: {
                singleLine: true,
              },
            },
            {
              target: 'pino-rotating-file-stream',
              options: {
                filename: 'app.log',
                path: './logs',
                size: '10M',
                interval: '1d',
              },
            },
          ],
        },
      },
    }),
    TypedConfigModule.forRoot({
      schema: Config,
      load: dotenvLoader({
        envFilePath: './.env',
        expandVariables: true,
      }),
      isGlobal: true,
    }),
    DrizzleModule,
    CacheModule.register({
      isGlobal: true,
      store: redisStore,
      url: process.env.REDIS_URL,
    }),
    ProductsModule,
    CategoriesModule,
    ProductFeaturesModule,
    ProductLabelsModule,
    ProductUseCasesModule,
    StandardsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
