function getResponseFromAPI() {
  return new Promise((resolve, reject) => {

    setTimeout(() => {
      const apiResponse = { data: "Some data from API" };
      resolve(apiResponse
    }, 1000);
  });
}

export default getResponseFromAPI;
// New line here

