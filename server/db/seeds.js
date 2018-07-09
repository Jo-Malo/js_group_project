use cryptid_hub;
db.dropDatabase();

db.cryptids.insertMany([
  {
    name: "Nessie",
    coords: [57.322857, -4.424382],
    desc: "The Loch Ness Monster or Nessie is a cryptid of Scottish folklore, reputedly inhabiting Loch Ness in the Scottish Highlands. It is similar to other supposed lake monsters and is often described as large in size with a long neck and one or more humps protruding from the water. Popular interest and belief in the creature has varied since it was brought to worldwide attention in 1933. Evidence of its existence is anecdotal, with a few disputed photographs and sonar readings.",
    imageSrc:"/images/Nessie-photo.jpg"
  },
  {
    name: "Mothman",
    coords: [38.4887, -81.3482],
    desc: "In West Virginia folklore, the Mothman is a creature reportedly seen in the Point Pleasant area from November 12, 1966, to December 15, 1967. The first newspaper report was published in the Point Pleasant Register dated November 16, 1966, titled 'Couples See Man-Sized Bird ... Creature ... Something'. The national press soon picked up the reports and helped spread the story across the United States.",
    imageSrc:"https://www.google.co.uk/search?q=mothman&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjXp_rIlJDcAhUkDMAKHeZ5DKoQ_AUICigB&biw=1280&bih=726#imgrc=IuPqIfD3lMWt8M:"
  },
  {
    name: "chupacabra",
    coords: [18.2208, -66.5901],
    desc: "he chupacabra or chupacabras, literally 'goat-sucker'; from chupar, 'to suck', and cabra, 'goat') is a legendary creature in the folklore of parts of the Americas, with its first purported sightings reported in Puerto Rico. The name comes from the animal's reported habit of attacking and drinking the blood of livestock, including goats.",
    imageSrc:'https://www.google.co.uk/search?biw=1280&bih=682&tbm=isch&sa=1&ei=DF5CW-E204aBBuXmqMAF&q=chupacabra&oq=ch&gs_l=img.1.1.35i39k1j0i67k1l5j0l4.175911.176132.0.178527.2.2.0.0.0.0.65.125.2.2.0....0...1c.1.64.img..0.2.124....0.TzI0P9S3F80#imgdii=nH9Fx5CuuWDxdM:&imgrc=-DulgB87hFzH3M:'
  },
  {
    name: "Bunyip",
    coords: [-25.2744, 133.7751],
    desc: "The bunyip is a large mythical creature from Australian Aboriginal mythology, said to lurk in swamps, billabongs, creeks, riverbeds, and waterholes. The origin of the word bunyip has been traced to the Wemba-Wemba or Wergaia language of Aboriginal people of South-Eastern Australia. However, the bunyip appears to have formed part of traditional Aboriginal beliefs and stories throughout Australia, although its name varied according to tribal nomenclature. In his 2001 book, writer Robert Holden identified at least nine regional variations for the creature known as the bunyip across Aboriginal Australia.",
    imageSrc:'https://www.google.co.uk/search?q=bunyip&tbm=isch&tbs=rimg:CSlsLYFFjNoCIjiT53ucYtbQjTeHL8fIxD5NZK-B8zsAX3C8XzoEaEmFK9det7RZ-v-GJ3YMcKO2mhm31mUAPn_1zMioSCZPne5xi1tCNEXYRDMj2EemIKhIJN4cvx8jEPk0RqymbhmigcKEqEglkr4HzOwBfcBEdAzVMEctz7ioSCbxfOgRoSYUrEfOwPatazujiKhIJ1163tFn6_14YRZCwufkKuH-sqEgkndgxwo7aaGREMhxHZvqBEkCoSCbfWZQA-f_1MyEc5FOJzemyPR&tbo=u&sa=X&ved=2ahUKEwii37uymZDcAhXE8RQKHWjACzkQ9C96BAgBEBs&biw=1280&bih=682&dpr=2#imgrc=KWwtgUWM2gKaYM:'
  },
  {
    name: "Wendigo",
    coords: [70.2998 , -83.1076],
    desc: "In Algonquian folklore, the wendigo or windigo is a mythical man eating monster or evil spirit native to the northern forests of the Atlantic Coast and Great Lakes Region of both the United States and Canada.[1] The wendigo may appear as a monster with some characteristics of a human or a spirit who has possessed a human being and made them become monstrous. It is historically associated with murder, insatiable greed, and the cultural taboos against such behaviours.",
    imageSrc:'https://www.google.co.uk/search?q=wendigo&source=lnms&tbm=isch&sa=X&ved=0ahUKEwi7hPGWoJDcAhXBalAKHfPCDRkQ_AUICigB&biw=1280&bih=682#imgrc=hFTpjgJoUlw87M:'
  },
  {
    name:"Kraken",
    coords: [70.5110, 3.5156],
    desc: "The kraken is a legendary cephalopod-like sea monster of giant size that is said to dwell off the coasts of Norway and Greenland. Authors over the years have postulated that the legend originated from sightings of giant squids that may grow to 13–15 meters (40–50 feet) in length. The sheer size and fearsome appearance attributed to the kraken have made it a common ocean-dwelling monster in various fictional works.",
    imageSrc:"https://www.google.co.uk/search?q=kraken&source=lnms&tbm=isch&sa=X&ved=0ahUKEwj42dTgpZDcAhUQW8AKHXUMA6MQ_AUICigB&biw=1280&bih=682#imgrc=uiKkANI7VnibYM:"
  },
  {
    name:"Megalodon",
    coords:[-50.5994, 28.6731],
    desc: "Megalodon (Carcharocles megalodon), meaning 'big tooth', is an extinct species of shark that lived approximately 23 to 2.6 million years ago (mya), during the Early Miocene to the end of the Pliocene. There had been some debate regarding the taxonomy of megalodon: some researchers argued that it was of the family Lamnidae and closely related to the great white shark (Carcharodon carcharias), while others argued that it belonged to the extinct family Otodontidae; presently, there is near unanimous consensus that the latter view is correct. Its genus placement is still debated, authors placing it in either Carcharocles, Megaselachus, Otodus, or Procarcharodon. The shark has made appearances in several media, such as the Discovery Channel's docufiction Megalodon: The Monster Shark Lives.",
    imageSrc:"https://www.google.co.uk/search?biw=1280&bih=682&tbm=isch&sa=1&ei=jm1CW9PXKNHXgQb95qL4Cg&q=megalodon&oq=meg&gs_l=img.1.0.0i67k1j0l2j0i67k1l2j0l4j0i67k1.241901.242717.0.244191.3.3.0.0.0.0.67.190.3.3.0....0...1c.1.64.img..0.3.189...35i39k1.0.knq3-Ifetf0#imgrc=KNSPTR1w63ZQnM:"
  },
  {
    name:"Mermaid",
    coords:[-40.1376, 81.8262],
    desc: "In folklore, a mermaid is an aquatic creature with the head and upper body of a female human and the tail of a fish. Mermaids appear in the folklore of many cultures worldwide, including the Near East, Europe, Asia, and Africa. The first stories appeared in ancient Assyria, in which the goddess Atargatis transformed herself into a mermaid out of shame for accidentally killing her human lover. Mermaids are sometimes associated with perilous events such as floods, storms, shipwrecks, and drownings. In other folk traditions (or sometimes within the same tradition), they can be benevolent or beneficent, bestowing boons or falling in love with humans.",
    imageSrc:"https://www.google.co.uk/search?biw=1280&bih=682&tbm=isch&sa=1&ei=xnBCW9_uHYLUgAbfoZegCA&q=scary+mermaid&oq=scary+mermaid&gs_l=img.3..0i67k1l3j0l7.3063.4285.0.4939.6.6.0.0.0.0.243.628.1j2j1.4.0....0...1c.1.64.img..2.4.627...0i10k1j0i7i30k1.0.PrcWAmrtljA#imgrc=6RgShQesIy3eHM:"
  },
  {
    name:"Michigan Dogman",
    coords:[44.3148, -85.6024],
    desc:"Michigan folklore, the Michigan Dogman allegedly witnessed in 1887 in Wexford County, Michigan. The creature is described as a seven-foot tall, blue-eyed, or amber-eyed bipedal canine-like animal with the torso of a man and a fearsome howl that sounds like a human scream. According to legends, the Michigan Dogman appears in a ten-year cycle that falls on years ending in 7. Sightings have been reported in several locations throughout Michigan, primarily in the northwestern quadrant of the Lower Peninsula. In 1987, the legend of the Michigan Dogman gained popularity when disc jockey Steve Cook at WTCM-FM recorded a song about the creature and its reported sightings.",
    imageSrc:"https://www.google.co.uk/search?biw=1280&bih=682&tbm=isch&sa=1&ei=IXJCW8TDCMnUgQaUw7DIBw&q=michigan+dogman&oq=michigan+dog&gs_l=img.1.0.0l10.2386.3218.0.4379.3.3.0.0.0.0.175.419.1j2.3.0....0...1c.1.64.img..0.3.417....0.DxJDrzI7Ufk#imgrc=4U7NuB796KPbqM:"
  },
  {
    name:"Morag",
    coords:[56.9539, -5.7172],
    desc:"Morag (Scottish Gaelic: Mòrag) is the nickname given to a loch monster believed by some to live in Loch Morar, Scotland. After Nessie, it is among the most written about of Scotland's legendary monsters. 'Morag', a Scottish female name, is a pun on the name of the loch. Reported sightings date back to 1887, and included 34 incidents by 1981. Sixteen of these involved multiple witnesses.",
    imageSrc:"https://www.google.co.uk/search?q=morag+loch+monster&source=lnms&tbm=isch&sa=X&ved=0ahUKEwivoJipq5DcAhWMC8AKHaIhDm8Q_AUICigB&biw=1280&bih=682#imgrc=sRndZswNh-wmnM:"
  },
  {
    name:"Baba Yaga",
    coords:[61.5240 , 105.3188],
    desc:'in Slavic Folklore (mostly Russia, but also Croatia, Serbia etc.), the Baba Yaga (Russian: Баба-яга) is a supernatural being or witch that takes the form of a hideous old woman. Baba Yaga is usually described as wearing a cloak or dress, with bright red eyes and teeth of sharpened stone or metal. It is said that she lives in a hut deep in the woods that stands on chicken legs (or one chicken leg), surrounded by a fench of bones taken from her victims, and that she flies around in a mortar wielding a pestle. There are sometimes shown to be three Baba Yagas, who are sisters. In those cases, they all have the same name.',
    imageSrc:"https://www.google.co.uk/search?q=baba+yaga&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjSweLLspDcAhWMAcAKHW5GCRQQ_AUICigB&biw=1280&bih=682#imgrc=f-t1j9e-R0ibkM:"
  }
]);
