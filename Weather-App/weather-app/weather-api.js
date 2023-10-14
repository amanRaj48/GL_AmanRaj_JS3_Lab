

const API_BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
const APP_ID = "305d31dd358ed0b5783b8b6c12af79a0";
const UNITS = "metric";

class WeatherAPI {

  constructURL(userInput){

    this.apiURL = new URL(API_BASE_URL);
    
    this.apiURL.searchParams.append("q", userInput);
    this.apiURL.searchParams.append("appid", APP_ID);
    this.apiURL.searchParams.append("units", UNITS);
  }


  async invokeURL(){

    const responseObj = await fetch(this.apiURL.toString());

    const responseJSON = await responseObj.json();

    return responseJSON;
    
  }

}

export {WeatherAPI};