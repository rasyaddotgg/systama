export class Matakuliah {
  kode: string;
  nama: string;
  sks: number;
  semester: number;
  jurusan: string;

  constructor(data: Matakuliah) {
    Object.assign(this, data);
  }
}
