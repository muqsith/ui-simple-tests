import { sha256 } from 'js-sha256';

const canvas = document.createElement('canvas');
const context = canvas.getContext('2d');
context.font = '18pt Arial';
context.textBaseline = 'top';
context.fillText('Hello, user.', 2, 2);

const str = canvas.toDataURL();
const fingerprint = sha256(str);
console.log(fingerprint);

document.getElementById('hash').innerHTML = fingerprint;
