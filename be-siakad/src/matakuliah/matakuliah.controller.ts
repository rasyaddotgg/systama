import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MatakuliahService } from './matakuliah.service';
import { CreateMatakuliahDto } from './dto/create-matakuliah.dto';
import { UpdateMatakuliahDto } from './dto/update-matakuliah.dto';

@Controller('matakuliah')
export class MatakuliahController {
  constructor(private readonly matakuliahService: MatakuliahService) {}

  @Post()
  create(@Body() createMatakuliahDto: CreateMatakuliahDto) {
    return this.matakuliahService.create(createMatakuliahDto);
  }

  @Get()
  findAll() {
    return this.matakuliahService.findAll();
  }

  @Get(':kode')
  findOne(@Param('kode') kode: string) {
    return this.matakuliahService.findOne(kode);
  }

  @Patch(':kode')
  update(
    @Param('kode') kode: string,
    @Body() updateMatakuliahDto: UpdateMatakuliahDto,
  ) {
    return this.matakuliahService.update(kode, updateMatakuliahDto);
  }

  @Delete(':kode')
  remove(@Param('kode') kode: string) {
    return this.matakuliahService.remove(kode);
  }
}
