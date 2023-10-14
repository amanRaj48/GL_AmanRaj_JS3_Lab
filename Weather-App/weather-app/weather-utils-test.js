
import { WeatherAPI } from "./weather-api";
import { WeatherUtils } from "./weather-utils";

async function testResponseConversion(){

  const weatherAPIObj = new WeatherAPI();
  weatherAPIObj.constructURL("Pune");
  const responseJSON = await weatherAPIObj.invokeURL();

  const responseObj = WeatherUtils.convertResponse(responseJSON);
  console.log(responseObj);

}

testResponseConversion();