'use client';
import{__rest as e}from"tslib";import t from"react";import{ResponsiveContainer as a,AreaChart as o,YAxis as r,XAxis as n,Area as l}from"recharts";import{BaseColors as i}from"../../../lib/constants.js";import{themeColorRange as s,colorPalette as m}from"../../../lib/theme.js";import{tremorTwMerge as c}from"../../../lib/tremorTwMerge.js";import{getColorClassNames as u}from"../../../lib/utils.js";import{constructCategoryColors as d,getYAxisDomain as p}from"../../chart-elements/common/utils.js";import f from"../../chart-elements/common/NoData.js";const y=t.forwardRef(((y,h)=>{const{data:x=[],categories:g=[],index:E,stack:N=!1,colors:k=s,showAnimation:v=!1,animationDuration:C=900,showGradient:j=!0,curveType:w="linear",connectNulls:b=!1,noDataText:D,autoMinValue:G=!1,minValue:A,maxValue:T,className:V}=y,O=e(y,["data","categories","index","stack","colors","showAnimation","animationDuration","showGradient","curveType","connectNulls","noDataText","autoMinValue","minValue","maxValue","className"]),M=d(g,k),K=p(G,A,T);return t.createElement("div",Object.assign({ref:h,className:c("w-28 h-12",V)},O),t.createElement(a,{className:"h-full w-full"},(null==x?void 0:x.length)?t.createElement(o,{data:x,margin:{top:1,left:1,right:1,bottom:1}},t.createElement(r,{hide:!0,domain:K}),t.createElement(n,{hide:!0,dataKey:E}),g.map((e=>{var a,o;return t.createElement("defs",{key:e},j?t.createElement("linearGradient",{className:u(null!==(a=M.get(e))&&void 0!==a?a:i.Gray,m.text).textColor,id:M.get(e),x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"currentColor",stopOpacity:.4}),t.createElement("stop",{offset:"95%",stopColor:"currentColor",stopOpacity:0})):t.createElement("linearGradient",{className:u(null!==(o=M.get(e))&&void 0!==o?o:i.Gray,m.text).textColor,id:M.get(e),x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{stopColor:"currentColor",stopOpacity:.3})))})),g.map((e=>{var a;return t.createElement(l,{className:u(null!==(a=M.get(e))&&void 0!==a?a:i.Gray,m.text).strokeColor,strokeOpacity:1,dot:!1,key:e,name:e,type:w,dataKey:e,stroke:"",fill:`url(#${M.get(e)})`,strokeWidth:2,strokeLinejoin:"round",strokeLinecap:"round",isAnimationActive:v,animationDuration:C,stackId:N?"a":void 0,connectNulls:b})}))):t.createElement(f,{noDataText:D})))}));y.displayName="AreaChart";export{y as default};
