var faker = require("faker");

function generateUsers() {
    var users = [];

    for(var id = 1; id <= 5; id++){
      var name = faker.name.findName();
      var email = faker.internet.email();
      var phone = faker.phone.phone();

      users.push({
        "id": id,
        "nam"e: name,
        "email": email,
        "phone": phone
      });

    }

    return { "users" : users }
}

module.exports = generateUsers