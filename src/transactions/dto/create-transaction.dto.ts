import {
  IsIn,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
} from 'class-validator';

const typesTransactions = ['credit', 'debit'];

export class CreateTransactionDto {
  @IsString()
  @IsIn(typesTransactions)
  type: string;

  @IsPositive()
  @IsNumber()
  @IsNotEmpty()
  amount: number;
}
