const data = {
  objectIdFieldName: "OBJECTID",
  uniqueIdField: { name: "OBJECTID", isSystemMaintained: true },
  globalIdFieldName: "",
  geometryType: "esriGeometryPoint",
  spatialReference: { wkid: 4326, latestWkid: 4326 },
  fields: [
    {
      name: "University_Chapter",
      type: "esriFieldTypeString",
      alias: "University Chapter",
      sqlType: "sqlTypeOther",
      length: 255,
      domain: null,
      defaultValue: null
    },
    {
      name: "City",
      type: "esriFieldTypeString",
      alias: "City",
      sqlType: "sqlTypeOther",
      length: 255,
      domain: null,
      defaultValue: null
    },
    {
      name: "State",
      type: "esriFieldTypeString",
      alias: "State",
      sqlType: "sqlTypeOther",
      length: 255,
      domain: null,
      defaultValue: null
    }
  ],
  exceededTransferLimit: true,
  features: [
    {
      attributes: {
        University_Chapter: "Florida State University",
        City: "Tallahassee",
        State: "FL"
      },
      geometry: { x: -84.30427263699994, y: 30.438110943000027 }
    },
    {
      attributes: {
        University_Chapter: "Abraham Baldwin Agricultural College",
        City: "Tifton",
        State: "GA"
      },
      geometry: { x: -83.51006446699995, y: 31.463418268000055 }
    },
    {
      attributes: {
        University_Chapter: "University of Georgia",
        City: "Athens",
        State: "GA"
      },
      geometry: { x: -83.383246442999962, y: 33.955464353000025 }
    },
    {
      attributes: {
        University_Chapter: "Georgia Southern University",
        City: "Statesboro",
        State: "GA"
      },
      geometry: { x: -81.779237338999963, y: 32.445146145000024 }
    },
    {
      attributes: {
        University_Chapter: "Georgia Tech University",
        City: "Atlanta",
        State: "GA"
      },
      geometry: { x: -84.40317324099999, y: 33.759509211000079 }
    },
    {
      attributes: {
        University_Chapter: "University of Alabama",
        City: "Tuscaloosa",
        State: "AL"
      },
      geometry: { x: -87.534609192999937, y: 33.206536696000057 }
    },
    {
      attributes: {
        University_Chapter: "Auburn University",
        City: "Auburn",
        State: "AL"
      },
      geometry: { x: -85.488982012405472, y: 32.602128983247155 }
    },
    {
      attributes: {
        University_Chapter: "Iowa State University",
        City: "Ames",
        State: "IA"
      },
      geometry: { x: -93.631582490999961, y: 42.027336331000072 }
    },
    {
      attributes: {
        University_Chapter: "Southern Illinois University",
        City: "Carbondale",
        State: "IL"
      },
      geometry: { x: -89.220273631999987, y: 37.726417706000063 }
    },
    {
      attributes: {
        University_Chapter: "University of Indiana",
        City: "Bloomington",
        State: "IN"
      },
      geometry: { x: -86.529045688999986, y: 39.162145813000052 }
    },
    {
      attributes: {
        University_Chapter: "Purdue University",
        City: "West Lafayette",
        State: "IN"
      },
      geometry: { x: -86.912409518999937, y: 40.441936883000039 }
    },
    {
      attributes: {
        University_Chapter: "Kansas State University",
        City: "Manhattan",
        State: "KS"
      },
      geometry: { x: -96.58681835799996, y: 39.190145864000044 }
    },
    {
      attributes: {
        University_Chapter: "California Polytechnic State University",
        City: "San Luis Obispo",
        State: "CA"
      },
      geometry: { x: -120.66319100299995, y: 35.274309145000075 }
    },
    {
      attributes: {
        University_Chapter: "Louisiana Tech University",
        City: "Ruston ",
        State: "LA"
      },
      geometry: { x: -92.640463850999936, y: 32.529673327000069 }
    },
    {
      attributes: {
        University_Chapter: "University of Central Arkansas",
        City: "Conway",
        State: "AR"
      },
      geometry: { x: -92.453318654999975, y: 35.087336876000052 }
    }
  ]
};

let States = [];
let Locations = [];

locationsTransformer();

function locationsTransformer() {
  let { features } = data;
  features.forEach((element) => {
    let place = {
      location_name: element.attributes.University_Chapter,
      latLng: [element.geometry.x, element.geometry.y]
    };

    if (States.indexOf(element.attributes.State) === -1)
      States.push(element.attributes.State);
    
    Locations.push(place);
  });

  console.log(States);
  console.log(Locations);

  return States, Locations;
}