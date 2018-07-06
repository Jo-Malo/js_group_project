use cryptid_hub;
db.dropDatabase();

db.cryptids.insertMany([
  {
    name: "Nessie"
  }
]);
