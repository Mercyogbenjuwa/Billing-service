import { Injectable, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { BillingDocument } from '../models/billing.model';
import { BillingDto } from './billing.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class BillingService {
  private readonly logger = new Logger(BillingService.name);

  constructor(
    @InjectModel('Billing') private readonly billingModel: Model<BillingDocument>,
  ) {}


//************************************************ Create Billing Record ****************************************************//
  public async createBillingRecord(billingDto: BillingDto): Promise<any> {
    try {
      const { apiCalls } = billingDto;
      const customerId = uuidv4();
      let cost = 0;
      if (apiCalls <= 1000000) {
        cost = (apiCalls / 1000) * 5;
      } else if (apiCalls <= 10000000) {
        cost = (apiCalls / 1000) * 4.2;
      } else {
        cost = (apiCalls / 1000) * 3.5;
      }
      const createdBilling = new this.billingModel({ customerId, apiCalls, cost });
      const savedBilling = await createdBilling.save();
      this.logger.log(`Billing record created successfully: ${JSON.stringify(savedBilling)}`, 'createBillingRecord');
      return {
        ResponseMessage: 'Billing record created successfully',
        ResponseCode: HttpStatus.CREATED,
        Data: savedBilling,
      };
    } catch (error) {
      this.logger.error(`Failed to create billing record: ${error.message}`, error.stack, 'createBillingRecord');
      throw new HttpException(
        {
          ResponseMessage: 'Failed to create billing record',
          ResponseCode: HttpStatus.INTERNAL_SERVER_ERROR,
          Data: null,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }



//************************************************ Get All Billing Records ****************************************************//
  public async getAllBillingRecords(): Promise<any> {
    try {
      const billingRecords = await this.billingModel.find().exec();
      this.logger.log(`Billing records fetched successfully: ${JSON.stringify(billingRecords)}`, 'getAllBillingRecords');
      return {
        ResponseMessage: 'Billing records fetched successfully',
        ResponseCode: HttpStatus.OK,
        Data: billingRecords,
      };
    } catch (error) {
      this.logger.error(`Failed to fetch billing records: ${error.message}`, error.stack, 'getAllBillingRecords');
      throw new HttpException(
        {
          ResponseMessage: 'Failed to fetch billing records',
          ResponseCode: HttpStatus.INTERNAL_SERVER_ERROR,
          Data: null,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
