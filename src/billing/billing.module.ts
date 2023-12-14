import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BillingController } from './billing.controller';
import { BillingService } from './billing.service';
import { BillingSchema } from 'src/models/billing.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Billing', schema: BillingSchema }])
  ],
  controllers: [BillingController],
  providers: [BillingService],
})
export class BillingModule {}
