'use client';
"use strict";var e=require("tslib"),r=require("@headlessui/react"),a=require("../../../lib/tremorTwMerge.cjs"),t=require("../../../lib/utils.cjs");function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var s=n(require("react"));const l=t.makeClassName("TabGroup"),d=s.default.forwardRef(((t,n)=>{const{defaultIndex:d,index:u,onIndexChange:i,children:o,className:c}=t,f=e.__rest(t,["defaultIndex","index","onIndexChange","children","className"]);return s.default.createElement(r.Tab.Group,Object.assign({as:"div",ref:n,defaultIndex:d,selectedIndex:u,onChange:i,className:a.tremorTwMerge(l("root"),"w-full",c)},f),o)}));d.displayName="TabGroup",module.exports=d;
