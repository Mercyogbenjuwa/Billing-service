import { Module} from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BillingModule } from './billing/billing.module';
import { MyConfigModule } from 'config.module';
import { BillingSchema } from './models/billing.model';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [MyConfigModule], 
      useFactory: async () => ({
        uri: process.env.MONGO_CONNECTION_STRING,
      }),
    }),
    MongooseModule.forFeature([{ name: 'BillingDocument', schema: BillingSchema }]),
    BillingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
