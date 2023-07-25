const{test, expect} = require('@playwright/test')

const {helloo, helloworld} = require('./demo/hello')
//import { helloo, helloworld } from './demo/hello'
console.log(helloo());

console.log(helloworld());