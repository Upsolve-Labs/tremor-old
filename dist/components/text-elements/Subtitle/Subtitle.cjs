"use strict";var e=require("tslib"),r=require("../../../lib/theme.cjs"),t=require("../../../lib/tremorTwMerge.cjs"),s=require("../../../lib/utils.cjs");function l(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=l(require("react"));const o=a.default.forwardRef(((l,o)=>{const{color:c,children:i,className:u}=l,n=e.__rest(l,["color","children","className"]);return a.default.createElement("p",Object.assign({ref:o,className:t.tremorTwMerge(c?s.getColorClassNames(c,r.colorPalette.lightText).textColor:"text-tremor-content-emphasis dark:text-dark-tremor-content-emphasis",u)},n),i)}));o.displayName="Subtitle",module.exports=o;
