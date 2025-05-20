import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateMatakuliahDto } from './dto/create-matakuliah.dto';
import { UpdateMatakuliahDto } from './dto/update-matakuliah.dto';
import { Matakuliah } from './entities/matakuliah.entity';

@Injectable()
export class MatakuliahService {
  private data: Matakuliah[] = [];

  create(createMatakuliahDto: CreateMatakuliahDto) {
    const isExist = this.findOne(createMatakuliahDto.kode);

    if (isExist) {
      throw new BadRequestException('Matakuliah dengan kode ini sudah ada');
    }

    const newMatakuliah = new Matakuliah(createMatakuliahDto);
    this.data.push(newMatakuliah);
    return newMatakuliah;
  }

  findAll() {
    return this.data;
  }

  findOne(kode: string) {
    return this.data.find((matakuliah) => matakuliah.kode === kode);
  }

  update(kode: string, updateMatakuliahDto: UpdateMatakuliahDto) {
    const isExist = this.findOne(kode);

    if (isExist && isExist.kode !== updateMatakuliahDto.kode) {
      throw new BadRequestException('Matakuliah dengan kode ini sudah ada');
    }

    const index = this.data.findIndex((matakuliah) => matakuliah.kode === kode);
    if (index === -1) return null;
    const updatedMatakuliah = { ...this.data[index], ...updateMatakuliahDto };
    this.data[index] = updatedMatakuliah;
    return updatedMatakuliah;
  }

  remove(kode: string) {
    const index = this.data.findIndex((matakuliah) => matakuliah.kode === kode);
    if (index === -1) return null;
    const deletedMatakuliah = this.data[index];
    this.data.splice(index, 1);
    return deletedMatakuliah;
  }
}
