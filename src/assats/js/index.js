export const fetchData = async (query, method) => {
  const myHeaders = new Headers();
  let url = "https://striveschool-api.herokuapp.com/api/profile/";
  try {
    console.log("api");
    if (query !== null || query !== undefined) {
      let response = await fetch(url + query, {
        method: method,
        headers: {
          Authorization: process.env.REACT_APP_API_KEY,
        },
      });

      if (response.ok) {
        let data = await response.json();
        console.log("response ok part");
        return data;
      } else {
        console.log('error with the fetch, with "METHOD" ');
      }
    } else {
      let response = await fetch(url, {
        method: "GET",
        headers: myHeaders,
      });
      if (response.ok) {
        let data = await response.json();
        return data;
      } else {
        console.log('error with the fetch, method "GET" ');
      }
    }
  } catch (err) {
    console.log(err);
  }
};
