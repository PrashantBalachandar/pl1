const citymap = {
  NewDelhi: {
    center: { lat: 28.613, lng: 77.209 },
    population: 30700000,
  },
  Ahmedabad: {
    center: { lat: 23.022, lng: 72.571 },
    population: 8253000,
  },
  Mumbai: {
    center: { lat: 19.076, lng: 72.877 },
    population: 20000000,
  },
  Kolkata: {
    center: { lat: 22.572, lng: 88.363 },
    population: 14850000,
  },
   Chennai: {
   center: { lat: 22.572, lng: 88.363 },
   population: 8653521,
  },
};

function initMap() {
  // Create the map.
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 5,
    center: { lat: 20.593, lng: 78.962 },
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
