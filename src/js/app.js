import '../css/style.scss';
import hero from './dom-loader';

let today = new Date();
let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

console.log('hero element:');
console.log(hero);
console.log(time);