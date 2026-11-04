// ============================================================
//  BIBLIOTHEEK - Colora technisch advies
//  Hier staan de vaste teksten die collega's in het verslag
//  kunnen invoegen bij "Voorbereiding" en "Verfsysteem".
//
//  EEN ITEM TOEVOEGEN: kopieer een blok { ... }, plak het onder
//  een ander blok en pas de vier delen aan:
//    soort:     "voorbereiding"  of  "verfsysteem"
//    categorie: bv. Gevel, Hout, Metaal, Binnen, Beton, Kunststof
//    titel:     korte naam waarop je kunt zoeken
//    tekst:     tussen de twee accenten ` ` ; 1 stap of product per lijn
//               **zo** maakt een productnaam vetgedrukt
//
//  LET OP:
//   - Elk blok eindigt met  },   (accolade + komma)
//   - Gebruik in de tekst zelf geen accent-teken ` en niet ${
//   - Woorden tussen aanhalingstekens " " blijven gewoon staan
// ============================================================
window.BIBLIOTHEEK = [

// ---------- VOORBEREIDING ----------
  { soort: "voorbereiding", categorie: "Gevel", titel: "Gevel reinigen met bleekwater (3:1)",
    tekst: `Gevel reinigen (mag 2 à 3 maanden op voorhand)
Innevelen met verdund bleekwater 3:1
Na 5 à 6 uur afspuiten met tuinslag of hoge druk
Gevel 24 tot 72 uur laten drogen` },
  { soort: "voorbereiding", categorie: "Gevel", titel: "Gevel reinigen met bleekwater (1:4) of Alginet",
    tekst: `Reinigen met verdund bleekwater 1:4, 6 uur laten inwerken, of met **Alginet Flash PAE**
Afspoelen met hoge druk of tuinslang
Gevel 24 tot 72 uur laten drogen` },
  { soort: "voorbereiding", categorie: "Gevel", titel: "Mos en algen op het dak",
    tekst: `Innevelen met **Algialgues** in grote druppels met een verstuiver onder lage druk (1 L per 5 à 10 m²)
Verspuiten bij een droge periode van 3 dagen; het mos spoelt nadien vanzelf af` },
  { soort: "voorbereiding", categorie: "Gevel", titel: "Afbladderende verf op gevel of plaatmateriaal",
    tekst: `Alle loszittende verf verwijderen: schuren met P60 of afbijtmiddel (**Paint'Off Classic**)
Nadien mooi opschuren met P220` },
  { soort: "voorbereiding", categorie: "Gevel", titel: "Barsten herstellen",
    tekst: `Barsten openkrabben met een driehoeksschraper
Goed verzadigen met **Epofix**
Opvullen met **Aguaplast Flex Fill**, eventueel inbedden in fassadeweefsel` },
  { soort: "voorbereiding", categorie: "Gevel", titel: "Openstaande voegen",
    tekst: `Voeg vervuiling- en stofvrij maken
Opvullen met **Ardex F3** of opspuiten met **Renokit**
Altijd eerst **Epofix** plaatsen voor je Renokit opspuit` },
  { soort: "voorbereiding", categorie: "Beton", titel: "Betonrot en verroeste ijzers",
    tekst: `Alle roest verwijderen met een staalborstel
Ontvetten met white spirit
2 lagen **Megaprim Roestwerend** op de ijzeren delen
Uitmoduleren met **Ardex A46** of **Aguaplast Beton Repair**` },
  { soort: "voorbereiding", categorie: "Metaal", titel: "Roest verwijderen",
    tekst: `Roest verwijderen met een staalborstel of schuurpapier
Ontvetten met white spirit
Opschuren met P180 en nog eens passeren met white spirit` },
  { soort: "voorbereiding", categorie: "Hout", titel: "Afbladderende verf op hout",
    tekst: `Reinigen met **Formule MC** of verdund bleekwater 1:4
Loszittende verf verwijderen met P60 à P80
Eindigen met schuren met P150 à P180
Stofvrij maken` },
  { soort: "voorbereiding", categorie: "Hout", titel: "Ontvetten en opschuren (lak binnen)",
    tekst: `Ontvetten met **Formule MC**, wasbenzine of white spirit (Formule MC naspoelen met klaar water)
Opschuren met P220
Stofvrij maken` },
  { soort: "voorbereiding", categorie: "Binnen", titel: "Muur na het verwijderen van behang",
    tekst: `Muren schuren met P100 en droog afborstelen
Lijmresten zoveel mogelijk verwijderen
Fixeren met **Ardex P52** (1 deel op 3 delen water)
Diepe gaten opvullen met **Ardex A828** of **Dalapro Medium**
Na droging instrijken met **Universele wandlijm** of **Glue & Relax** en **Optivlies** plakken` },
  { soort: "voorbereiding", categorie: "Binnen", titel: "Verpoederde muren (kelder)",
    tekst: `Afstoffen (klamme doek, stofzuiger, kleefdoekje)
Fixeren met **Epofix**` },
  { soort: "voorbereiding", categorie: "Gevel", titel: "Gevel reinigen met bleekwater (40° of 10°)",
    tekst: `Volledige oppervlak innevelen met bleekwater: bleekwater van 40° 1 deel op 10 delen water, bleekwater van 10° 1 deel op 2
Nevel op planten of grasperken vermijden
Minstens 6 uur laten inwerken (alternatief: ontmossen met **Algialgues**, minstens 1 week laten inwerken)
Reinigen met water onder hoge druk tot alle mossen, algen en slechthechtende verflagen weg zijn
Ondergrond moet droog zijn bij de start; gebruik een gekalibreerde vochtmeter bij twijfel` },
  { soort: "voorbereiding", categorie: "Gevel", titel: "Barsten v-vormig openrakelen",
    tekst: `Barsten v-vormig openrakelen tot minstens 4 mm breed en diep
Grondig ontstoffen` },
  { soort: "voorbereiding", categorie: "Gevel", titel: "Aansluitingen en voegen afkitten",
    tekst: `Aansluitingen van vensterbanken, dorpels en schrijnwerk met de gevel overal afkitten met **Renokit** of **Parabond Construction**
Silicone eerst (deels) uitsnijden en opruwen, dan overkitten met **Renokit**
Hoek vol afkitten zodat het water weg van de gevel loopt` },
  { soort: "voorbereiding", categorie: "Gevel", titel: "Zoutuitbloeiingen en beschadigde kalei",
    tekst: `Zoutuitbloeiingen altijd droog verwijderen met een harde kunststof borstel en goed ontstoffen
Eerst het vochtprobleem aanpakken en alles laten drogen
Beschadigde kalei verwijderen met hamer en beitel
Herstellen met hetzelfde product en laten drogen` },
  { soort: "voorbereiding", categorie: "Gevel", titel: "Kalei op verf vervangen (zandstralen)",
    tekst: `Alle kalei en zoveel mogelijk onderliggende verf verwijderen tot op de steen door zandstralen
Ondergrond droog en stofvrij
Kaleimortel **Fix & Level Mortar** aanbrengen: dikke consistentie met mes en naborstelen (25 kg + 5,8 l water) of dunne consistentie met borstel (25 kg + 7,3 l water)
Machinaal mengen, 10 minuten laten rusten en opnieuw mengen` },
  { soort: "voorbereiding", categorie: "Hout", titel: "Schrijnwerk buiten herschilderen",
    tekst: `Slechte lagen verwijderen door afbranden, schuren of met **Paint'Off Instant**; proefvlak plaatsen voor de inwerktijd
Grondig naspoelen met white spirit in plaats van water
Verweerd hout schuren tot op gezond hout (P120), geen grijze vezels meer
Randen van dorpels 2 à 3 mm rondschuren voor betere kantendekking en afwatering
Goede lagen opschuren met P220 en grondig ontstoffen` },
  { soort: "voorbereiding", categorie: "Hout", titel: "Cederhout: dekkende verf verwijderen",
    tekst: `Dekkende verf wordt afgeraden; alle filmvormende lagen verwijderen door grof te schuren
Eindigen met P120 om de vezels te verzachten
Verwering wegschuren tot gezond hout en ontstoffen` },
  { soort: "voorbereiding", categorie: "Metaal", titel: "Alu schrijnwerk met poederlak of fabriekscoating",
    tekst: `Schurend reinigen met **Scotch Brite 7447A** en **Formule MC** (1/3 verdund met water)
Zeer goed naspoelen met zuiver water
Na droging fijn opschuren met P240 en goed ontstoffen` },
  { soort: "voorbereiding", categorie: "Binnen", titel: "Deur of lakwerk binnen",
    tekst: `Slechte lagen verwijderen door schuren of afkrabben
Goede lagen matteren met P240 of **Scotch Brite 7447A**
Grondig ontstoffen` },
  { soort: "voorbereiding", categorie: "Binnen", titel: "Opstijgend vocht en plint",
    tekst: `Plint verwijderen
Mortel verwijderen tot op de blote steen, zodat de waterkering overal zichtbaar is
Enige tijd laten drogen en opnieuw meten
Plint terugplaatsen met **Parabond 800** (neemt geen vocht op en geeft het niet door)
Pas als de muren droog zijn opnieuw behangen of schilderen` },
  { soort: "voorbereiding", categorie: "Binnen", titel: "Schimmel door condens",
    tekst: `Afwassen met een bleekwateroplossing van 5 graden om de schimmel te doden` },
  { soort: "voorbereiding", categorie: "Binnen", titel: "Muren afwassen na roetvervuiling",
    tekst: `Muren en plafond afwassen met **Formule MC** (1/10 in lauw water, water tijdig verversen) en een zachte spons
Laten drogen` },
  { soort: "voorbereiding", categorie: "Binnen", titel: "Tegels uitplamuren",
    tekst: `Tegels reinigen met **Scotch Brite** en **Formule MC** en goed naspoelen
Volledig uitplamuren met **Ardex R1**; alles moet perfect egaal zijn
Na schuren goed ontstoffen
Hoek tussen schilderwerk en tegels eerst opkitten met **Renokit** of **Soudal Glaskit**` },
  { soort: "voorbereiding", categorie: "Binnen", titel: "Tegelvloer op bestaande vloer (zonder garantie)",
    tekst: `Vloer reinigen met zure ontvetter, meermaals naspoelen met zuiver water en laten drogen
**Ardex EP2000** ruim aanbrengen en nat in nat afzanden met **Ardex QS**; laten overnachten
Los zand wegborstelen en goed stofzuigen
Randisolatiestroken **Ardex TP** in de natte EP2000 plaatsen
Egaliseren met **Ardex K66F** tot 3 cm; diepe delen eerst plaatselijk, na instrijken met **Ardex P52** (1 deel op 3 delen water)
Na 24 à 48 u droging kan een keramische tegel geplaatst worden` },

// ---------- VERFSYSTEEM ----------
  { soort: "verfsysteem", categorie: "Gevel", titel: "Gevel: Epofix + Xilox-One",
    tekst: `1 laag **Epofix**
2 lagen **Xilox-One Ultramat**` },
  { soort: "verfsysteem", categorie: "Gevel", titel: "Vochtbelast, duurzaamste systeem",
    tekst: `1 laag **Epofix**
1 laag **Coating M30**
1 laag afwerking naar keuze, bv. **Xilox-One Ultramat** of **Pastime**` },
  { soort: "verfsysteem", categorie: "Gevel", titel: "Vochtbelast, met retouche na verloop van tijd",
    tekst: `1 laag **Epofix**
1 laag **Sublifill**
1 laag **Sublimat**` },
  { soort: "verfsysteem", categorie: "Gevel", titel: "Kalei-look",
    tekst: `1 laag **Epofix**
1 laag **Subliprim**
1 laag **Pastime**` },
  { soort: "verfsysteem", categorie: "Metaal", titel: "Roestwerend met afwerking",
    tekst: `2 lagen **Megaprim Roestwerend**
2 lagen afwerking, bv. **Xilox-One Ultramat** (meegaand met de gevel)` },
  { soort: "verfsysteem", categorie: "Hout", titel: "Hout en metaal buiten",
    tekst: `1 laag **Elastoprim Fast**
2 lagen **Matineau** of **Satineau**` },
  { soort: "verfsysteem", categorie: "Hout", titel: "Hout of deur binnen",
    tekst: `1 laag **Elastoprim Fast**
1 of 2 lagen afwerking, bv. **Persisto PU Mat** of **Satin**` },
  { soort: "verfsysteem", categorie: "Kunststof", titel: "PVC schilderen",
    tekst: `1 laag **Omniprim Extreme**
1 of 2 lagen naar keuze: lak (**Matineau** of **Satineau**) of muurverf (**Xilox-One**)` },
  { soort: "verfsysteem", categorie: "Binnen", titel: "Muur binnen",
    tekst: `1 laag **Bossprim**
1 laag afwerking, bv. **Boss Flow Silk**` },
  { soort: "verfsysteem", categorie: "Binnen", titel: "Vochtplek of vochtkring binnen",
    tekst: `1 laag **Bisol**
24 u laten drogen met licht aan en opschuren met P220
1 laag afwerking: **Boss Touch**, **Boss Hybride** of **Bolatex**` },
  { soort: "verfsysteem", categorie: "Binnen", titel: "Kelder",
    tekst: `1 laag **Epofix** (op verpoederde delen)
1 of 2 lagen **Sublifill**` },

  { soort: "verfsysteem", categorie: "Gevel", titel: "Verpoederde gevel",
    tekst: `1 laag **Epofix** (zet de verpoederde restanten vast)
Barsten, voegen en aansluitingen dichtkitten met **Renokit**
2 lagen **Sublifill**` },
  { soort: "verfsysteem", categorie: "Gevel", titel: "Gevel in winderige omgeving",
    tekst: `1 laag **Epofix**
Barsten, voegen en aansluitingen dichtkitten met **Renokit**
2 lagen **Bolatex** (langere open tijd)` },
  { soort: "verfsysteem", categorie: "Gevel", titel: "Vochtbelaste zone met kit",
    tekst: `1 laag **Epofix**
Barsten, voegen en aansluitingen dichtkitten met **Renokit**
1 laag **Coating M30** (vochtbestendige tussenlaag)
Afwerking naar keuze` },
  { soort: "verfsysteem", categorie: "Gevel", titel: "Kaleimortel",
    tekst: `1 laag **Fix & Level Mortar** (kaleimortel)
1 laag **Xilox-One Ultramat** (grondlaag)
1 laag **Xilox-One Ultramat** (afwerking)` },
  { soort: "verfsysteem", categorie: "Gevel", titel: "Hydrofuge (kleurloos waterafstotend)",
    tekst: `Eerst alles dichtzetten met mortel en na droging aansluitingen afkitten met **Renokit** of **Parabond Construction**
Behandelen met **Rainblock Gel**` },
  { soort: "verfsysteem", categorie: "Hout", titel: "Schrijnwerk buiten, volledig systeem",
    tekst: `1 laag **Elastoprim Fast** (grondlaag)
Vezelopruwing lichtjes wegschuren met korrel 220 en ontstoffen
Versteknaden, openstaande voegen en nagelgaatjes dichtkitten met **Renokit**
2 lagen **Satineau**` },
  { soort: "verfsysteem", categorie: "Hout", titel: "Eénpotslak buiten",
    tekst: `1 laag **Elastosatin One** (grondlaag)
1 laag **Elastosatin One** (afwerking)` },
  { soort: "verfsysteem", categorie: "Hout", titel: "Cederhout olie",
    tekst: `2 à 3 lagen **Woodoil Classic**` },
  { soort: "verfsysteem", categorie: "Metaal", titel: "Alu schrijnwerk met poederlak",
    tekst: `1 laag **Megaprim**
2 lagen **Satineau**` },
  { soort: "verfsysteem", categorie: "Binnen", titel: "Deur binnen, lak",
    tekst: `1 laag **Hybride Multiprimer PU**
Barsten, voegen en verstekken dichten met **Bostokit Fast**
2 lagen **Persisto PU Satin**` },
  { soort: "verfsysteem", categorie: "Binnen", titel: "Condens: schimmel op plafond",
    tekst: `1 laag **Bisol**
Eventueel afwerken met een goed reinigbare verf zoals **Bolatex**` },
  { soort: "verfsysteem", categorie: "Binnen", titel: "Muren na roetvervuiling",
    tekst: `1 laag **Bossprim** op kleur
1 laag **Bossflow Mat** op kleur` },
  { soort: "verfsysteem", categorie: "Binnen", titel: "Kelder met mogelijke retouches",
    tekst: `Plaatselijk **Epofix** op alle verkleuringen en rondom in de hoek tussen plafond en wand
Hoek tussen plafond en wand opkitten met **Renokit**
2 lagen **Boss-Project Silk**` },
  { soort: "verfsysteem", categorie: "Binnen", titel: "Melamine of metalen frame",
    tekst: `Melamine mat schuren met P320 en ontstoffen
1 laag **Omniprim Extreme**
Afwerken met bv. **Persisto PU Satin**` },
  { soort: "verfsysteem", categorie: "Binnen", titel: "Stone Art Stuc",
    tekst: `1 laag **Stucprimer Epoxy**
2 lagen **Stone Art**, aanbrengen met stucmes
Afwerken met 2 lagen **Aqua Sensa Finish** onverdund` },

];
