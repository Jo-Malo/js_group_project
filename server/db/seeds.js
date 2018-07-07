use cryptid_hub;
db.dropDatabase();

db.cryptids.insertMany([
  {
    name: "Nessie",
    coords: [57.322857, -4.424382]
  }
]);
