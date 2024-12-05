var mongoose = require("mongoose");
var dbURI =
  "mongodb+srv://zelihabayraktar9597:zeliha123@mekanbul.azwe4.mongodb.net/?retryWrites=true&w=majority";
//bu kısmı kendi hesabına göre yap
mongoose.connect(dbURI);

mongoose.connection.on("connected", function () {
  console.log(dbURI + "adresindeki veritabanına bağlandı");
});
mongoose.connection.on("disconnected", function () {
  console.log(dbURI + "adresindeki veritabanına bağlı bağlantı koptu");
});
process.on("SIGINT", function () {
  mongoose.connection.close();
  console.log("Bağlantı kesildi");
  process.exit(0);
});
require("./venue");
