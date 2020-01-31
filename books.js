var faker = require("faker");

function generateBooks() {
    var books = [];

    for(var id = 1; id < 30; id++){
      var nama = faker.lorem.sentence();
      var pengarang = faker.name.firstName();

      books.push({
        data: {
          type: "buku",
          attributes: {
            nama: nama,
            pengarang: pengarang
          }
        }
      });

    }

    return { "books" : books }
}

module.exports = generateBooks;