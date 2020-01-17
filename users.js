var faker = require("faker");

function generateUsers() {
    var users = [];

    for(var id = 1; id <= 5; id++){
      var name = faker.name.findName();
      var email = faker.internet.email();
      var phone = faker.phone.phoneNumber();

      users.push({
        "id": id,
        "name": name,
        "email": email,
        "phone": phone
      });

    }

    return { "users" : users }
}

module.exports = generateUsers