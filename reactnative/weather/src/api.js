import axios from 'axios';
import _ from 'lodash';

const rootUrl = 'http://api.openweathermap.org/data/2.5/weather?APPID=6c909f13868efe9e59a918642ab21987';

const kelvinToF = (kelvin) => {
  return Math.round((kelvin - 273.15) * 1.8 + 32) + ' °F';
}

export default (latitude, longitude) =>   {
  const url = `${rootUrl}&lat=${latitude}&lon=${longitude}`;
  return axios.get(url).then(({ data }) => {
    return {
      city: data.name,
      temperature: kelvinToF(data.main.temp),
      description: _.capitalize(data.weather[0].description)
    };
  });
}