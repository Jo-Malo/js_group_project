use cryptid_hub;
db.dropDatabase();

db.cryptids.insertMany([
  {
    name: "Baba Yaga",
    country: "Russia",
    continent: "Europe",
    habitat: ["Woodland"],
    type: ["Hybrid"],
    coords:[61.5240 , 105.3188],
    desc:'in Slavic Folklore (mostly Russia, but also Croatia, Serbia etc.), the Baba Yaga (Russian: Баба-яга) is a supernatural being or witch that takes the form of a hideous old woman. Baba Yaga is usually described as wearing a cloak or dress, with bright red eyes and teeth of sharpened stone or metal. It is said that she lives in a hut deep in the woods that stands on chicken legs (or one chicken leg), surrounded by a fench of bones taken from her victims, and that she flies around in a mortar wielding a pestle. There are sometimes shown to be three Baba Yagas, who are sisters. In those cases, they all have the same name.',
    imageSrc:"/images/babayaga.jpg"
  },
  {
    name: "Bigfoot",
    country: "Alaska",
    continent: "North America",
    habitat: ["Woodland", "Mountains"],
    type: ["Beast", "Humanoid"],
    coords: [64.2008, -149.4937],
    desc: "In North American folklore, Bigfoot or Sasquatch is a hairy, upright-walking, ape-like being who reportedly dwells in the wilderness and leaves behind large footprints. Strongly associated with the Pacific Northwest (particularly Washington state and British Columbia), individuals claim to see the creature across North America. Over the years, the creature has inspired numerous commercial ventures and hoaxes.",
    imageSrc:"/images/bigfoot.jpg"
  },
  {
    name: "Bunyip",
    country: "Australia",
    continent: "Oceania",
    habitat: ["Fresh-water"],
    type: ["Beast"],
    coords: [-25.2744, 133.7751],
    desc: "The bunyip is a large mythical creature from Australian Aboriginal mythology, said to lurk in swamps, billabongs, creeks, riverbeds, and waterholes. The origin of the word bunyip has been traced to the Wemba-Wemba or Wergaia language of Aboriginal people of South-Eastern Australia. However, the bunyip appears to have formed part of traditional Aboriginal beliefs and stories throughout Australia, although its name varied according to tribal nomenclature. In his 2001 book, writer Robert Holden identified at least nine regional variations for the creature known as the bunyip across Aboriginal Australia.",
    imageSrc:'/images/bunyip.jpg'
  },
  {
    name: "Camahueto",
    country: "Chile",
    continent:  "South America",
    habitat: ["Grasslands"],
    type: ["Beast"],
    coords: [-35.6751, -71.5430],
    desc: "The camahueto is a figure from Chilote mythology of the Chiloé Archipelago of Chile that has the form of a calf or bull with a small horn on its forehead, similar to a unicorn. The horn is the most valuable part of the animal, which machis use to plant small pieces in the earth from which other camahuetos will grow. When it has grown, it erupts from the earth with such force that it leaves a tremendous hole and drags down everything in its path in a rapid race to reach the sea. A machi will stalk and capture the camahueto with a lasso and tear out the horn and bandage the opening. Afterwards, she/he will use the horn for curing many kinds of illnesses.",
    imageSrc:"/images/camahueto.jpg"
  },
  {
    name: "Chupacabra",
    country: "Puerto Rico",
    continent: "Central America",
    habitat: ["Desert"],
    type: ["Beast"],
    coords: [18.2208, -66.5901],
    desc: "he chupacabra or chupacabras, literally 'goat-sucker'; from chupar, 'to suck', and cabra, 'goat') is a legendary creature in the folklore of parts of the Americas, with its first purported sightings reported in Puerto Rico. The name comes from the animal's reported habit of attacking and drinking the blood of livestock, including goats.",
    imageSrc:"/images/chupacabra.jpg"
  },
  {
    name:"Kongomato",
    country:"Zambia",
    continent:"Africa",
    habitat:["Coastal"],
    type:["Flying", "Reptile"],
    coords:[-15.4067, 28.2871],
    desc:"The kongamato ('breaker of boats') is a reported pterosaur-like creature said to have been seen by the people of and explorers in the Mwinilunga district's Jiundu swamps of Western Zambia, Angola and Congo. Suggested identities include a modern-day Rhamphorhynchus, a misidentified bird (such as the very large and peculiar saddle-billed stork), or a giant bat. No film has ever been taken, nor have any bodies been examined, leaving all of the stories to rely on large wounds and eyewitness accounts.",
    imageSrc:"/images/kongamato.jpg"
  },
  {
    name:"Kraken",
    country: "Greenland",
    continent: "North America",
    habitat: "Marine",
    type: "Aquatic",
    coords: [70.5110, 3.5156],
    desc: "The kraken is a legendary cephalopod-like sea monster of giant size that is said to dwell off the coasts of Norway and Greenland. Authors over the years have postulated that the legend originated from sightings of giant squids that may grow to 13–15 meters (40–50 feet) in length. The sheer size and fearsome appearance attributed to the kraken have made it a common ocean-dwelling monster in various fictional works.",
    imageSrc:"/images/kraken.jpg"
  },
  {
    name: "Mapinguari",
    country: "Brazil",
    continent: "South America",
    habitat: ["Rainforest"],
    type: ["Beast"],
    coords: [3.4653, -62.2159],
    desc: "In South American folklore, the mapinguari or mapinguary (Spanish pronunciation: [mapiŋɡwaˈɾi], Portuguese pronunciation: [mapĩɡwaˈɾi]), also known as the Isnashi [isˈnaʃi], is an entity described as resembling an ape-like or slothish creature with red fur living in the Amazon rainforests of Brazil and Bolivia. The name is usually translated as “the roaring animal” or “the fetid beast”.",
    imageSrc:"/images/mapinguari.jpg"
  },
  {
    name: "Megalodon",
    country: null,
    continent: null,
    habitat: ["Marine"],
    type: ["Aquatic"],
    coords:[-50.5994, 28.6731],
    desc: "Megalodon (Carcharocles megalodon), meaning 'big tooth', is an extinct species of shark that lived approximately 23 to 2.6 million years ago (mya), during the Early Miocene to the end of the Pliocene. There had been some debate regarding the taxonomy of megalodon: some researchers argued that it was of the family Lamnidae and closely related to the great white shark (Carcharodon carcharias), while others argued that it belonged to the extinct family Otodontidae; presently, there is near unanimous consensus that the latter view is correct. Its genus placement is still debated, authors placing it in either Carcharocles, Megaselachus, Otodus, or Procarcharodon. The shark has made appearances in several media, such as the Discovery Channel's docufiction Megalodon: The Monster Shark Lives.",
    imageSrc:"/images/megalodon.jpg"
  },
  {
    name: "Mermaid",
    country: "Greece",
    continent: "Europe",
    habitat: ["Marine"],
    type: ["Aquatic", "Humanoid"],
    coords:[36.4666, 22.9499],
    desc: "In folklore, a mermaid is an aquatic creature with the head and upper body of a female human and the tail of a fish. Mermaids appear in the folklore of many cultures worldwide, including the Near East, Europe, Asia, and Africa. The first stories appeared in ancient Assyria, in which the goddess Atargatis transformed herself into a mermaid out of shame for accidentally killing her human lover. Mermaids are sometimes associated with perilous events such as floods, storms, shipwrecks, and drownings. In other folk traditions (or sometimes within the same tradition), they can be benevolent or beneficent, bestowing boons or falling in love with humans.",
    imageSrc:"/images/mermaid.jpg"
  },
  {
    name: "Michigan Dogman",
    country: "United States",
    continent: "North America",
    habitat: ["Urban"],
    type: ["Hybrid"],
    coords:[44.3148, -85.6024],
    desc:"Michigan folklore, the Michigan Dogman allegedly witnessed in 1887 in Wexford County, Michigan. The creature is described as a seven-foot tall, blue-eyed, or amber-eyed bipedal canine-like animal with the torso of a man and a fearsome howl that sounds like a human scream. According to legends, the Michigan Dogman appears in a ten-year cycle that falls on years ending in 7. Sightings have been reported in several locations throughout Michigan, primarily in the northwestern quadrant of the Lower Peninsula. In 1987, the legend of the Michigan Dogman gained popularity when disc jockey Steve Cook at WTCM-FM recorded a song about the creature and its reported sightings.",
    imageSrc:"/images/dogman.jpg"
  },
  {
    name:"Morag",
    country: "Scotland",
    continent: "Europe",
    habitat: ["Fresh-water"],
    type: ["Aquatic"],
    coords:[56.9539, -5.7172],
    desc:"Morag (Scottish Gaelic: Mòrag) is the nickname given to a loch monster believed by some to live in Loch Morar, Scotland. After Nessie, it is among the most written about of Scotland's legendary monsters. 'Morag', a Scottish female name, is a pun on the name of the loch. Reported sightings date back to 1887, and included 34 incidents by 1981. Sixteen of these involved multiple witnesses.",
    imageSrc:"/images/morag.jpg"
  },
  {
    name: "Mothman",
    country: "United States",
    continent: "North America",
    habitat: ["Urban"],
    type: ["Hybrid", "Flying"],
    coords: [38.4887, -81.3482],
    desc: "In West Virginia folklore, the Mothman is a creature reportedly seen in the Point Pleasant area from November 12, 1966, to December 15, 1967. The first newspaper report was published in the Point Pleasant Register dated November 16, 1966, titled 'Couples See Man-Sized Bird ... Creature ... Something'. The national press soon picked up the reports and helped spread the story across the United States.",
    imageSrc:"/images/mothman.jpg"
  },
  {
    name: "Nessie",
    country: "Scotland",
    continent: "Europe",
    habitat: ["Fresh-water"],
    type: ["Aquatic", "Reptile"],
    coords: [57.322857, -4.424382],
    desc: "The Loch Ness Monster or Nessie is a cryptid of Scottish folklore, reputedly inhabiting Loch Ness in the Scottish Highlands. It is similar to other supposed lake monsters and is often described as large in size with a long neck and one or more humps protruding from the water. Popular interest and belief in the creature has varied since it was brought to worldwide attention in 1933. Evidence of its existence is anecdotal, with a few disputed photographs and sonar readings.",
    imageSrc:"/images/nessie.jpg"
  },
  {
    name: "Phoenix",
    country: "Egypt",
    continent: "Africa",
    habitat: ["Desert"],
    type: ["Flying"],
    coords: [26.8206, 30.8025],
    desc: "Associated with the Sun, a phoenix obtains new life by arising from the ashes of its predecessor. According to some sources, the phoenix dies in a show of flames and combustion, although there are other sources that claim that the legendary bird dies and simply decomposes before being born again. There are different traditions concerning the lifespan of the phoenix, but by most accounts the phoenix lived for 500 years before rebirth. Herodotus, Lucan, Pliny the Elder, Pope Clement I, Lactantius, Ovid, and Isidore of Seville are among those who have contributed to the retelling and transmission of the phoenix motif.",
    imageSrc:"/images/phoenix.jpg"
  },
  {
    name: "Troll",
    country: "Norway",
    continent: "Europe",
    habitat: ["Mountains"],
    type: ["Humanoid"],
    coords: [62.6475, 6.8429],
    desc: "The Troll is a fearsome member of a mythical anthropomorphic race from Scandinavia, mostly Norway. Their role ranges from fiendish giants – similar to the ogres of England – to a devious, more human-like folk of the wilderness, living underground, in hills, caves, or mounds depending on the type of troll (forest or mountain).",
    imageSrc: "/images/troll.jpg"
  },
  {
    name: "Vorota Beast",
    country: "Russia",
    continent: "Europe",
    habitat: ["Fresh-water"],
    type: ["Beast"],
    coords: [61.0178, 99.1966],
    desc: "The Vorota beast is a reported creature seen in Lake Vorota in Eastern Siberia, one of several isolated lakes on the Sordongnokh tablelands which are said to contain monsters. Russian geologist Viktor A. Tverdokhlebov and Boris Bashkatov were with a group doing geological studies near the lake in July 1953. While visiting the lake, they reported seeing a barrel-sized hump moving across the lake. As it got closer, a head appeared. Its head was around six feet wide, and the body between 30 and 40 feet long. On its hump was a large fin. It slapped the water, then dove under the water.",
    imageSrc: "/images/vorotabeast.png"
  },
  {
    name: "Wendigo",
    country: "Canada",
    continent: "North America",
    habitat: ["Woodland"],
    type: ["Spirit", "Humanoid"],
    coords: [70.2998 , -83.1076],
    desc: "In Algonquian folklore, the wendigo or windigo is a mythical man eating monster or evil spirit native to the northern forests of the Atlantic Coast and Great Lakes Region of both the United States and Canada.[1] The wendigo may appear as a monster with some characteristics of a human or a spirit who has possessed a human being and made them become monstrous. It is historically associated with murder, insatiable greed, and the cultural taboos against such behaviours.",
    imageSrc:'/images/wendigo.jpg'
  },
  {
    name: "Yamata no Orochi",
    country: "Japan",
    continent: "Asia",
    habitat: ["Fresh-water"],
    type: ["Reptile"],
    coords: [36.2048, 138.2529],
    desc: "Yamata no Orochi legends are originally recorded in two ancient texts about Japanese mythology and history. The ca. 680 AD Kojiki transcribes this dragon name as 八岐遠呂智 and ca. 720 AD Nihongi writes it as 八岐大蛇. In both versions of the Orochi myth, the Shinto storm god Susanoo or Susa-no-Ō is expelled from Heaven for tricking his sister Amaterasu the sun-goddess.",
    imageSrc:"/images/yamataNoOrochi.jpg"
  },
  {
    name: "Yeti",
    country: "China",
    continent: "Asia",
    habitat: ["Mountains"],
    type: ["Humanoid", "Beast"],
    coords: [30.1534 , 88.7879],
    desc: "In the folklore of Nepal, the Yeti (/ˈjɛti/)[3] or Abominable Snowman (Nepali: हिममानव himamānav, lit. 'snow man') is an ape-like entity, taller than an average human, that is said to inhabit the Himalayan region of Nepal, Bhutan, and Tibet. The names Yeti and Meh-Teh are commonly used by the people indigenous to the region, and are part of their history and mythology. Stories of the Yeti first emerged as a facet of Western popular culture in the 19th century.",
    imageSrc:"/images/yeti.jpg"
  }
]);
