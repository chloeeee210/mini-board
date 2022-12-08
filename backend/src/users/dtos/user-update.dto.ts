import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateUserDto {
  @IsNotEmpty({ message: '이메일은 필수값입니다.' })
  @IsEmail({ message: '이메일의 형식이 올바르지않습니다.' })
  @ApiProperty({ example: 'test@test.com', description: '이메일' })
  @IsOptional()
  readonly email?: string;

  @IsNotEmpty({ message: '비밀번호는 필수값입니다.' })
  @IsString({ message: '비밀번호의 형식이 올바르지않습니다.' })
  @ApiProperty({ example: '1234', description: '비밀번호' })
  @IsOptional()
  readonly password?: string;

  @IsNotEmpty({ message: '이름은 필수값입니다.' })
  @IsString({ message: '이름의 형식이 올바르지않습니다.' })
  @ApiProperty({ example: 'testName', description: '유저 이름' })
  @IsOptional()
  readonly username?: string;
}
