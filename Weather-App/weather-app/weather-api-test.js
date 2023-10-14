
import { WeatherAPI } from "./weather-api";

function testConstructURL(){

  const weatherAPIObj = new WeatherAPI();
  weatherAPIObj.constructURL("Pune");

}

testConstructURL();

async function testInvokeURL(){

  const weatherAPIObj = new WeatherAPI();

  weatherAPIObj.constructURL("Pune");

  const responseJSON = await weatherAPIObj.invokeURL();

  
  console.log(responseJSON);
}

testInvokeURL();
