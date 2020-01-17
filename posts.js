var faker = require("faker");

function generatePosts() {
    var posts = [];

    for(var id = 1; id < 30; id++){
      var title = faker.lorem.sentence();
      var body = faker.lorem.paragraphs();

      if (id >= 1 && id <= 5) {
        var usrId = 1;
      } else if (id > 5 && id <= 10) {
        var usrId = 2;
      } else if (id > 10 && id <= 15) {
        var usrId = 3;
      } else if (id > 15 && id <= 20) {
        var usrId = 4;
      } else if (id > 20 && id <= 25) {
        var usrId = 5;
      } else if (id > 25 && id <= 30) {
        var usrId = 6;
      } else {
        var usrId = 7;
      }

      posts.push({
        id: id,
        title: title,
        body: body,
        author: usrId
      });

    }

    return { "posts" : posts }
}

module.exports = generatePosts