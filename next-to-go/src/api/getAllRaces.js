const axios = require("axios");

export const getAllRaces = () => {
  return axios.get(
    "https://api.neds.com.au/rest/v1/racing/?method=nextraces&count=10"
  );
};
