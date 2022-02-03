const citymap = {
  Surat: {
    center: { lat: 21.170, lng: 72.831 },
    population: 710,
  },
  Ahmedabad: {
    center: { lat: 23.022, lng: 72.571 },
    population: 820,
  },
  vadodara: {
    center: { lat: 22.307, lng: 73.181 },
    population: 200,
  },
  rajkot: {
    center: { lat: 22.303, lng: 70.802 },
    population: 200,
  },
   Junagadh: {
   center: { lat: 21.522, lng: 70.457 },
   population: 435,
  },
};

function initMap() {
  // Create the map.
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 7,
    center: { lat: 22.258, lng: 71.192 },
    mapTypeId: "terrain",
  });

  // Construct the circle for each value in citymap.
  // Note: We scale the area of the circle based on the population.
  for (const city in citymap) {
    // Add the circle for this city to the map.
    const cityCircle = new google.maps.Circle({
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FF0000",
      fillOpacity: 0.35,
      map,
      center: citymap[city].center,
      radius: Math.sqrt(citymap[city].population) * 100,
    });
  }
}
