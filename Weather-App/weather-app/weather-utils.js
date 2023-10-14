

class WeatherUtils {

  static convertResponse(responseJSON){

    const weatherResponse = {
      LOCATION_PLACE: `${responseJSON.name}, ${responseJSON.sys.country}`,
      DATE: WeatherUtils.getDate(),
      TEMPERATURE: responseJSON.main.temp,
      TEMPERATURE_TYPE: responseJSON.weather[0].main,
      LOW_TEMPERATURE: responseJSON.main.temp_min,
      HIGH_TEMPERATURE: responseJSON.main.temp_max
    };

    return weatherResponse;
  }

  static getDate(){

    const today = new Date();

    return today.toLocaleDateString("en-IN", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric"
    });
  }
}

export {WeatherUtils};