parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({3:[function(require,module,exports) {
var n={10001:"1","01001":"2",11000:"3","00101":"4",10100:"5","01100":"6","00011":"7",10010:"8","01010":"9","00110":"10"},r={"01000":"0","00100":"10","00010":"20",10000:"30"},t=["1","2","3","4","5","6","7","8","9","0","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","-",".","␣","*"],e=function(e){e.push(3);for(var u="",o=function(o){var i=e.slice(o,o+10),c=Math.round(i.reduce(function(n,r){return n+r},0)/i.length),f=i.map(function(n){return n>c?1:0}),a=f.filter(function(n,r){return r%2==0}).join(""),l=f.filter(function(n,r){return r%2!=0}).join("");u+=t[parseInt(n[a],10)-1+parseInt(r[l],10)]},i=1;i<e.length;i+=10)o(i);return u.substring(1,u.length-1)};module.exports={decode:e};
},{}],4:[function(require,module,exports) {
var r={3211:"0",2221:"1",2122:"2",1411:"3",1132:"4",1231:"5",1114:"6",1312:"7",1213:"8",3112:"9"},e=function(e){for(var n="",o=~~((e[1]+e[2]+e[3])/3),t=1;t<e.length;t+=1){var d=void 0;d=n.length<6?e.slice(4*t,4*t+4):e.slice(4*t+5,4*t+9);var a=[Math.round(d[0]/o),Math.round(d[1]/o),Math.round(d[2]/o),Math.round(d[3]/o)];if(12===(n+=r[a.join("")]||r[a.reverse().join("")]||"X").length)return n}return-1===n.indexOf("X")&&n||!1};module.exports={decode:e};
},{}],1:[function(require,module,exports) {
"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=require("./code-39"),r=n(o),t=require("./ean-13"),a=n(t);function n(e){return e&&e.__esModule?e:{default:e}}var d={"code-39":r.default,"ean-13":a.default},u=function(o,r){var t=document,a="object"===(void 0===o?"undefined":e(o))?o:t.getElementById(o),n=a.naturalWidth,u=a.naturalHeight,f=t.createElement("canvas");f.width=n,f.height=u;var c=f.getContext("2d"),i=[1,9,2,8,3,7,4,6,5],l=i.length,p=u/(l+1);for(c.drawImage(a,0,0);l-=1;){for(var y=c.getImageData(0,p*i[l],n,2).data,m=[],v=0,s=0,b=0;b<2;b+=1)for(var g=0;g<n;g+=1){var h=4*(b*n+g),x=(3*y[h]+4*y[h+1]+2*y[h+2])/9,S=m[g];y[h]=x,y[h+1]=x,y[h+2]=x,m[g]=x+(void 0===S?0:S)}for(var D=0;D<n;D+=1){m[D]/=2;var I=m[D];I<v&&(v=I),I>s&&(s=I)}for(var q=v+(s-v)/2,w=[],E=0;E<n;E+=1){for(var _=0,j=0;j<2;j+=1)y[4*(j*n+E)]>q&&(_+=1);w.push(_>1)}for(var B=w[0],C=1,H=[],M=0;M<n;M+=1)w[M]===B?C+=1:(H.push(C),C=1,B=w[M]);return d[r.barcode].decode(H)}return!1};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=u,module.exports=u),exports.barcodeDecoder=u):root.barcodeDecoder=u;
},{"./code-39":3,"./ean-13":4}]},{},[1], null)
//# sourceMappingURL=/javascript-barcode-reader.map