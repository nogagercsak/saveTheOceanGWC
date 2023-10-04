/* .js files add interaction to your website */

var factList = [ 
  "Oceans generate over 50% of the world's oxygen, benefiting all life on Earth, regardless of proximity to coastlines.",
  "Healthy oceans regulate global climate patterns, influencing weather systems that impact both coastal and inland regions.",
  "Ocean ecosystems provide essential resources like fish that support food security for billions of people",
  "Coastal tourism, a major industry, depends on thriving marine environments, contributing to economies worldwide.",
  " Biodiversity in the oceans directly affects terrestrial ecosystems, playing a role in pollination and nutrient cycles.",
  "Plastic waste has created vast garbage patches in the oceans, harming marine life and entering the food chain.",
  "Overfishing has caused the depletion of once-abundant fish stocks, disrupting marine ecosystems and livelihoods.",
  " Climate change has led to coral bleaching, endangering entire reef systems and impacting ocean biodiversity.",
  "Urban development and deforestation result in coastal erosion and sediment runoff, damaging nearby marine habitats.",
  "Noise pollution from shipping, oil drilling, and construction disrupts marine animals' communication and behaviors."]

var fact = document.getElementById("fact");
var factButton = document.getElementById("factButton");
var count = 0;

if (factButton) {
  factButton.addEventListener("click", displayFact);
}

function displayFact() {
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}
