use cryptid_hub;
db.dropDatabase();

db.cryptids.insertMany([
  {
    name: "Nessie",
    coords: [57.322857, -4.424382],
    desc: "The Loch Ness Monster or Nessie is a cryptid of Scottish folklore, reputedly inhabiting Loch Ness in the Scottish Highlands. It is similar to other supposed lake monsters and is often described as large in size with a long neck and one or more humps protruding from the water. Popular interest and belief in the creature has varied since it was brought to worldwide attention in 1933. Evidence of its existence is anecdotal, with a few disputed photographs and sonar readings."
  },
  {
    name: "Mothman",
    coords: [38.4887, -81.3482]
  },
  {
    name: "chupacabra",
    coords: [18.2208, -66.5901]
  },
  {
    name: "Bunyip",
    coords: [-25.2744, 133.7751]
  }
]);
