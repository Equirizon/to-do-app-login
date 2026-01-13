import {
  IsString,
  IsInt,
  IsNotEmpty,
  MinLength,
  IsEmail,
} from 'class-validator';

export class CreateUserDto {
  @IsInt()
  @IsNotEmpty()
  readonly id: number; //

  @IsEmail()
  @IsNotEmpty()
  readonly email: string; //

  @IsString()
  @MinLength(8) // Ensures a minimum length for the password
  readonly password: string; //
}

// Example of an Update DTO using mapped types to make fields optional
// You would use `PartialType` from @nestjs/mapped-types
/*
import { PartialType } from '@nestjs/mapped-types';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  // Any additional or overriding properties can go here
}
*/
