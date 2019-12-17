/*List for language*/
var LanguageList = {
  "SU" : "Suomi",
  "EN" : "English",
};

/*Language Translation*/

//In English
var WORDS_EN = {
  "introduction"		 : "Introduction",
  "pricelist" 			 : "Price List",
  "contact" 			   : "Contact",
  "service"          : "Service",
  "location" 			   : "Location",
  "brand"            : "Brands",
  "feedback"         : "Feedback",
  "name"             : "Name",
  "email"            : "E-mail",
  "message"          : "Message",
  "experience"       : "How do you rate your overall experience?",
  "bad"              : "Bad",
  "average"          : "Average",
  "good"             : "Good",
  "submit"           : "Submit",
  "notification"     : "Notification",
  "notification1"    : "Thank you so much for your feedback!",
  "introduction1"    : "Barber and",
  "introduction2"    : "hair salon services ",
  "introduction3"    : "in Seija`s salon",
  "introduction4"    : "with long experience",
  "introduction5"    : "and professional skill.",
  "introduction6"    : "Choose hair services",
  "introduction7"    : "to all your life events!",
  "introduction8"		 : "Opening time:",
  "introduction9"		 : "weekdays:",
  "introduction10"		 : "9-18",
  "introduction11"		 : "on Saturday/Sunday",
  "introduction12"		 : "according to agreement.",
  "introduction13"		 : "Phone-number:",
  "introduction14"		 : "09-463013, 050-3252702",
  "serviceIntroduction1" : "Our services are traditional hairdressing services:",
  "serviceIntroduction2" : "Hair cut: men, women, children",
  "serviceIntroduction3" : "Coloring",
  "serviceIntroduction4" : "Various hairstyles such as feast and bridal",
  "serviceIntroduction5" : "Support and permanent treatment",
  "serviceIntroduction6" : "Student discount 10%",
  "serviceIntroduction7" : "Look at price list",
  "service1"       : " Our hairdressing services:",
  "service2" 			 : "men's, women's and children's hair cuts",
  "service3" 			 : "coloring",
  "service4" 			 : "various hairstyles such as feast and baptismal support and permanent treatments",
  "service5" 			 : "Student Discount 10%!",
  "contact1" 			 : "Contact",
  "contact2" 			 : "Address:",
  "contact3" 			 : "Otakuja 2 A 1",
  "contact4" 			 : "02150 Espoo",
  "contact5" 			 : "Phone-number:",
  "contact6" 			 : "09-463013",
  "contact7" 			 : "050-3252702",
  "contact8"       : "Call to Seija’s salon",
  "footer1" 			 : "Kampaamo Seija Lehtinen",
  "footer2" 			 : "| Address:",
  "footer3" 			 : "Otakuja 2 A 1, 02150 Espoo",
  "footer4" 			 : "| Phone-number:",
  "footer5" 			 : "09-463 013, 050-3252702",
  "footer6" 			 : "| E-mail:",
  "footer7" 			 : "seijahelena@live.com",
  "footer8" 			 : "|"
};

//In Suomi
var WORDS_SU = {
  "introduction"		 : "Etusivu",
  "pricelist"				 : "Hinnasto",
  "contact" 			   : "Yhteystiedot",
  "service"          : "Palvelumme",
  "location"			   : "Sijainti",
  "brand"            : "Tuotemerkkejä",
  "feedback"         : "Yhteydenotto",
  "name"             : "Nimi",
  "email"            : "Sähköposti",
  "message"          : "Viesti",
  "experience"       : "Miten arvioit yleiskokemustasi?",
  "bad"              : "Huono",
  "average"          : "Keskiverto",
  "good"             : "Hyvä",
  "submit"           : "Lähetä",
  "notification"     : "Ilmoitus",
  "notification1"    : "Kiitos paljon palautteestasi!",
  "introduction1"    : "Parturikampaamo",
  "introduction2"    : "Seija Lehtinen",
  "introduction3"    : "tarjoaa laadukkaita parturi-",
  "introduction4"    : "ja kampaamopalveluita Otaniemessä.",
  "introduction5"    : "Hemmottele itseäsi ja",
  "introduction6"    : "valitse sopivat hiuspalvelut,",
  "introduction7"    : "arkeen ja juhlaan!",
  "introduction8"		 : "Avoinna:",
  "introduction9"		 : "arkisin:",
  "introduction10"		 : "9-18",
  "introduction11"		 : "lauantaisin/sunnuntaisin",
  "introduction12"		 : "sopimuksen mukaan.",
  "introduction13"		 : "Puhelin:",
  "introduction14"		 : "09-463013, 050-3252702",
  "serviceIntroduction1" : "Meiltä saat korkealaatuiset parturi- ja kampaamopalvelut:",
  "serviceIntroduction2" : "Hiusten leikkaus: miehet, naiset, lapset",
  "serviceIntroduction3" : "Värjäykset",
  "serviceIntroduction4" : "Erilaiset kampaukset, kuten juhla- ja morsiuskampaukset",
  "serviceIntroduction5" : "Tuki- ja permanenttikäsittelyt",
  "serviceIntroduction6" : "Opiskelija-alennus 10%",
  "serviceIntroduction7" : "Katso hinnasto",
  "service1" 			 : "Palveluihimme kuuluvat perinteiset parturi- ja kampaamopalvelut:",
  "service2" 			 : "miesten, naisten ja lasten hiusten leikkaukset",
  "service3" 			 : "värjäykset",
  "service4" 			 : "erilaiset kampaukset kuten juhla- ja morsiuskampaukset tuki- ja permanenttikäsittelyt",
  "service5" 			 : "Opiskelija-alennus 10%!",
  "contact1" 			 : "Yhteystiedot",
  "contact2" 			 : "Osoite:",
  "contact3" 			 : "Otakuja 2 A 1",
  "contact4" 			 : "02150 Espoo",
  "contact5" 			 : "Puhelin:",
  "contact6" 			 : "09-463013",
  "contact7" 			 : "050-3252702",
  "contact8"       : "Soita Seijalle tästä",
  "footer1" 			 : "Kampaamo Seija Lehtinen",
  "footer2" 			 : " | Osoite:",
  "footer3" 			 : "Otakuja 2 A 1, 02150 Espoo",
  "footer4" 			 : " | Puhelin:",
  "footer5" 			 : "09-463 013, 050-3252702",
  "footer6" 			 : " | Sähköposti:",
  "footer7" 			 : "seijahelena@live.com",
  "footer8" 			 : " | "
};

window.onload = initialize;

/*Function for selecting language button*/
function initialize() {
  loadsLanguage("SU");
}

/*Function for loading Language*/
function loadsLanguage(lang){
  /*fills all the span tags with class=lang pattern*/ 
  $('span[class^="lang"]').each(function(){
    var LangVar = (this.className).replace('lang-','');
    var Text = window["WORDS_"+lang][LangVar];
    $(this).text(Text);      
  });
  $("#page2-article1").each(function(){
    $(this).css("background-image", "url(img/pricelist-"+lang+".jpg)");
  });
}