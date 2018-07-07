use cryptid_hub;
db.dropDatabase();

db.cryptids.insertMany([
  {
    name: "Nessie",
    coords: [57.322857, -4.424382]
  },
  {
    name: "Mothman",
    coords: [38.4887, -81.3482]
  },
  {
    name: "chupacabra",
    coords: [18.2208, -66.5901]
  }
]);
