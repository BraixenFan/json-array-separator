let States = [];
let Locations = [];

LocationsTransformer();

async function LocationsTransformer() {
  const requestURL =
    "https://services2.arcgis.com/5I7u4SJE1vUr79JC/arcgis/rest/services/UniversityChapters_Public/FeatureServer/0/query?where=1%3D1&outFields=University_Chapter,City,State&outSR=4326&resultRecordCount=15&f=json";
  const request = new Request(requestURL);

  const response = await fetch(request);
  const data = await response.json();

  universities = data.features;
  universities.forEach(element => {

    let place = { location_name: element.attributes.University_Chapter, latLng: [element.geometry.x, element.geometry.y] };
    
    if (States.indexOf(element.attributes.State) === -1) {States.push(element.attributes.State)}
    Locations.push(place);
  });

  console.log(States);
  console.log(Locations);
}