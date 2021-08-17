// Import stylesheets
import './style.css';
import { Cookie } from './models/Cookie';
import { Colours } from './models/CookieEnums';
import { SprinkleCookie} from './models/SprinkleCookie';

const cookies: Cookie[] = [];
const sprinkleCookies: Cookie[] = [];

const cookiesDiv = document.getElementById('cookiesDiv');

const sprinkleCookie = document.getElementById(
  'sprinkleCookie'
) as HTMLButtonElement;
const cookieColourInp = document.getElementById(
  'cookieColour-inp'
) as HTMLInputElement;
const cookieSelector = document.getElementById(
  'cookieSelector'
) as HTMLSelectElement;

const changeColourBtn = document.getElementById('changeColour-btn');
changeColourBtn.addEventListener('click', changeColour);
const addChocChip = document.getElementById('addChocolateChip-btn');
addChocChip.addEventListener('click', addChocolateChip);

// create an init() function
function init() {
  // Two cookies added
  const cookie1: Cookie = new Cookie('Cookie1');
  const cookie2: Cookie = new Cookie('Cookie2');
  cookies.push(cookie1);
  cookies.push(cookie2);
  // initialise the cookieColour-inp to the colour of the first cookie create
  for (let i = 0; i <= Cookie.length; i++) {
    cookieSelector.innerHTML += `<option value=${i}>${
      cookies[i].name
    }</option>`;
  }
  updateDisplay();
}

function cookieNames(){
  cookieSelector.innerHTML='';
  for (let c in cookies) {
    // console.log(cookies[c].name);
    let newOption: HTMLOptionElement = document.createElement('option');
    newOption.innerHTML = cookies[c].name;
    newOption.value = String(cookies.indexOf(cookies[c]));
    cookieSelector.add(newOption);
  }
}

//TODO: this function needs to go through the list of cookies and draw them to cookiesDiv
// create the cookies as divs with the class name of cookie - see style.css
// number of chocolatechips needs to be shown on the cookie
function drawCookies() {
  cookiesDiv.innerHTML = '';
  for (let c in cookies) {
    let cd = document.createElement('div');
    cookiesDiv.innerHTML = String(cookies[c].chocolateChipNum);
    cd.className = 'Cookie1';    
    document.getElementById('cookiesDiv').append(cd);
  }
}
  updateDisplay();

//TODO: this fuction needs to be triggered by button changeColour-btn
// upon pressing the button it should change the colour of the cookie selected in the dropdown to the colour typed in the input element (cookieColour-inp)
function changeColour() {
  cookies[cookieSelector.value].colour = cookieColourInp.value;
  updateDisplay();
}

//TODO: this fuction needs to be triggered by button addChocolateChip-btn
// upon pressing the button it should add a chocolate chip to cookies selected from the dropdown
function addChocolateChip() {
  cookies[cookieSelector.value].chocolateChipNum++;
  updateDisplay();
}

function updateDisplay() {
  drawCookies();
}

init();
