import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BillingDocument = Billing & Document;

@Schema()
export class Billing {
  @Prop({ required: true })
  customerId: string;

  @Prop({ required: true })
  apiCalls: number;

  @Prop({ required: true })
  cost: number;
}

export const BillingSchema = SchemaFactory.createForClass(Billing);
