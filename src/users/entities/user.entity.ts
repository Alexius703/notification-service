import { User } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class UserEntity implements User {
  @ApiProperty()
  id: number;

  @ApiProperty()
  userName: string;

  @ApiProperty()
  phoneNumber: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  status: string;
}