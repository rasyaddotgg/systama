import {
  IsAlphanumeric,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class CreateMatakuliahDto {
  @IsAlphanumeric()
  @IsNotEmpty()
  kode: string;

  @IsString()
  @IsNotEmpty()
  nama: string;

  @IsNotEmpty()
  @IsNumber()
  sks: number;

  @IsNotEmpty()
  @IsNumber()
  semester: number;

  @IsNotEmpty()
  @IsString()
  jurusan: string;
}
