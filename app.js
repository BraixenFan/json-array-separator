fetchFile();

async function fetchFile() {
  const requestURL =
    "https://services2.arcgis.com/5I7u4SJE1vUr79JC/arcgis/rest/services/UniversityChapters_Public/FeatureServer/0/query?where=1%3D1&outFields=University_Chapter,City,State&outSR=4326&resultRecordCount=15&f=json";
  const request = new Request(requestURL);

  const response = await fetch(request);
  const fileText = await response.text();

  const data = JSON.parse(fileText);
  locationsTransformer(data);

}

function locationsTransformer(rawData) {
  console.log(rawData);
}
