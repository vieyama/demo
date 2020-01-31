var faker = require("faker");

function generateKlasifikasi() {
  var klasifikasi = [];

  for (var id = 1; id < 30; id++) {

    if (id >= 1 && id <= 5) {
      var status = "Aktif";
      var type = "Buku";
    } else if (id > 5 && id <= 10) {
      var status = "Tidak Aktif";
      var type = "ePustaka";
    } else if (id > 10 && id <= 15) {
      var status = "Aktif";
      var type = "ePustaka";
    } else if (id > 15 && id <= 20) {
      var status = "Tidak Aktif";
      var type = "Buku";
    } else if (id > 20 && id <= 25) {
      var status = "Aktif";
      var type = "ePustaka";
    } else if (id > 25 && id <= 30) {
      var status = "Tidak Aktif";;
      var type = "Buku";
    } else {
      var status = "Aktif";
      var type = "Buku";
    }

    klasifikasi.push({
      id: id,
      name: faker.commerce.productName(),
      parent: "null",
      type: type,
      status: status,
      jmlBuku: faker.random.number(),
      jmlBahasa: faker.random.number()
    });
  }

  return { klasifikasi: klasifikasi };
}

module.exports = generateKlasifikasi;