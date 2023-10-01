import dotenv from 'dotenv'

dotenv.config();

const API_KEY = process.env.API_KEY;

const URL = "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0"
const _URL = URL;

function fetch() {

  console.log(API_KEY);

}

fetch();