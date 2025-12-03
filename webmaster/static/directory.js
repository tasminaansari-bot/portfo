// export const ZiptoCity = {
// 	"80134": "Parker, CO",
//   	"80138": "Parker, CO",

//   	"80501": "Longmont, CO",
//   	"80503": "Longmont, CO",
//   	"80504": "Longmont, CO",

//   	"80520": "Firestone, CO",

//   	"80530": "Frederick, CO",

//   	"80514": "Dacono, CO",

//   	"80621": "Fort Lupton, CO",

//   	"80516": "Erie, CO",

//   	"80642": "Hudson, CO",

//   	"80601": "Brighton, CO",
//   	"80602": "Brighton, CO",
//   	"80603": "Brighton, CO",

//   	"80301": "Boulder, CO",
//   	"80303": "Boulder, CO",

//   	"80027": "Louisville, CO",

//   	"80026": "Lafayette, CO",

//   	"80020": "Broomfield, CO",
//   	"80021": "Broomfield, CO",
//   	"80023": "Broomfield, CO",

//   	"80614": "Eastlake, CO",

//   	"80030": "Westminster, CO",
//   	"80031": "Westminster, CO",
//   	"80234": "Westminster, CO",
//   	"80260": "Westminster, CO",

//   	"80229": "Thornton, CO",
//   	"80233": "Thornton, CO",
//   	"80241": "Thornton, CO",

//   	"80640": "Henderson, CO",

//   	"80022": "Commerce City, CO",

//   	"80002": "Arvada, CO",
//   	"80003": "Arvada, CO",
//   	"80004": "Arvada, CO",
//   	"80005": "Arvada, CO",
//   	"80007": "Arvada, CO",

//   	"80202": "Denver, CO",
//   	"80203": "Denver, CO",
//   	"80204": "Denver, CO",
//   	"80205": "Denver, CO",
//   	"80206": "Denver, CO",
//   	"80207": "Denver, CO",
//   	"80209": "Denver, CO",
//   	"80210": "Denver, CO",
//   	"80211": "Denver, CO",
//   	"80212": "Denver, CO",
//   	"80214": "Denver, CO",
//   	"80215": "Denver, CO",
//   	"80216": "Denver, CO",
//   	"80218": "Denver, CO",
//   	"80219": "Denver, CO",
//   	"80220": "Denver, CO",
//   	"80222": "Denver, CO",
//   	"80223": "Denver, CO",
//   	"80224": "Denver, CO",
//   	"80226": "Denver, CO",
//   	"80227": "Denver, CO",
//   	"80228": "Denver, CO",
//   	"80230": "Denver, CO",
//   	"80231": "Denver, CO",
//   	"80232": "Denver, CO",
//   	"80235": "Denver, CO",
//   	"80236": "Denver, CO",
//   	"80237": "Denver, CO",
//   	"80238": "Denver, CO",
//   	"80239": "Denver, CO",
//   	"80246": "Denver, CO",
//   	"80247": "Denver, CO",
//   	"80249": "Denver, CO",
  	
//   	"80226": "Lakewood, CO",
//   	"80227": "Lakewood, CO",
//   	"80228": "Lakewood, CO",
//   	"80232": "Lakewood, CO",
//   	"80235": "Lakewood, CO",

//   	"80110": "Englewood, CO",
//   	"80113": "Englewood, CO",

//   	"80010": "Aurora, CO",
//   	"80011": "Aurora, CO",
//   	"80012": "Aurora, CO",
//   	"80013": "Aurora, CO",
//   	"80014": "Aurora, CO",
//   	"80015": "Aurora, CO",
//   	"80016": "Aurora, CO",
//   	"80017": "Aurora, CO",
//   	"80018": "Aurora, CO",
//   	"80019": "Aurora, CO",

//   	"80465": "Morrison, CO",

//   	"80120": "Littleton, CO",
//   	"80121": "Littleton, CO",
//   	"80122": "Littleton, CO",
//   	"80123": "Littleton, CO",
//   	"80124": "Littleton, CO",
//   	"80125": "Littleton, CO",
//   	"80127": "Littleton, CO",
//   	"80128": "Littleton, CO",

//   	"80126": "Highlands Ranch, CO",
//   	"80129": "Highlands Ranch, CO",
//   	"80130": "Highlands Ranch, CO",

//   	"80135": "Sedalia, CO",

//   	"80104": "Castle Rock, CO",
//   	"80108": "Castle Rock, CO",
//   	"80109": "Castle Rock, CO",

//   	"80134": "Parker, CO",
//   	"80138": "Parker, CO",

//   	"80116": "Franktown, CO"
// };

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}