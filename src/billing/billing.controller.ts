import { Controller, Post, Body, Get } from '@nestjs/common';
import { BillingService } from './billing.service';
import { BillingDto } from './billing.dto';
import { BillingDocument } from '../models/billing.model';
import { RateLimit } from 'nestjs-rate-limiter';

@Controller('billing')
export class BillingController {
  constructor(private readonly billingService: BillingService) {}

  @Post()
  @RateLimit({ keyPrefix: 'billing', points: 5, duration: 60 })
  async createBillingRecord(@Body() billingDto: BillingDto): Promise<BillingDocument> {
    return this.billingService.createBillingRecord(billingDto);
  }

  @Get()
  @RateLimit({ keyPrefix: 'billing', points: 5, duration: 60 })
  async getAllBillingRecords(): Promise<BillingDocument[]> {
    return this.billingService.getAllBillingRecords();
  }
}
