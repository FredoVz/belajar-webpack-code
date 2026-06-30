const _ = require("lodash");

const mahasiswa = [
  {
    nama: "Wilfredo Alexander Sutanto",
    email: "fredo@gmail.com",
    jurusan: "Teknik Informatika",
  },
  {
    nama: "Kevin Alexander Sutanto",
    email: "kevin@gmail.com",
    jurusan: "Manajemen Perhotelan",
  },
  {
    nama: "Clarissa Diva Larasati",
    email: "clarissa@gmail.com",
    jurusan: "Manajemen Bisnis",
  },
];

const mhs = _.find(mahasiswa, { nama: "Kevin Alexander Sutanto" });
console.log(mhs);
