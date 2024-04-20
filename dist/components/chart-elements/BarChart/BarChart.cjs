'use client';
"use strict";var e=require("tslib"),t=require("../../../lib/constants.cjs"),a=require("../../../lib/theme.cjs"),l=require("../../../lib/tremorTwMerge.cjs"),r=require("../../../lib/utils.cjs"),i=require("react"),o=require("recharts"),n=require("../common/ChartLegend.cjs"),s=require("../common/ChartTooltip.cjs"),c=require("../common/NoData.cjs"),d=require("../common/utils.cjs");function u(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var m=u(i);const v=m.default.forwardRef(((u,v)=>{const{data:g=[],categories:h=[],index:f,colors:p=a.themeColorRange,valueFormatter:y=r.defaultValueFormatter,layout:k="horizontal",stack:b=!1,relative:x=!1,startEndOnly:w=!1,animationDuration:T=900,showAnimation:E=!1,showXAxis:C=!0,showYAxis:A=!0,yAxisWidth:j=56,intervalType:L="equidistantPreserveStart",showTooltip:q=!0,showLegend:O=!0,showGridLines:N=!0,autoMinValue:D=!1,minValue:M,maxValue:S,allowDecimals:G=!0,noDataText:V,onValueChange:F,enableLegendSlider:K=!1,customTooltip:X,rotateLabelX:B,tickGap:P=5,className:Y}=u,z=e.__rest(u,["data","categories","index","colors","valueFormatter","layout","stack","relative","startEndOnly","animationDuration","showAnimation","showXAxis","showYAxis","yAxisWidth","intervalType","showTooltip","showLegend","showGridLines","autoMinValue","minValue","maxValue","allowDecimals","noDataText","onValueChange","enableLegendSlider","customTooltip","rotateLabelX","tickGap","className"]),R=X,H=C||A?20:0,[W,_]=i.useState(60),I=d.constructCategoryColors(h,p),[$,J]=m.default.useState(void 0),[Q,U]=i.useState(void 0),Z=!!F;function ee(e,t,a){var l,r,i,o;a.stopPropagation(),F&&(d.deepEqual($,Object.assign(Object.assign({},e.payload),{value:e.value}))?(U(void 0),J(void 0),null==F||F(null)):(U(null===(r=null===(l=e.tooltipPayload)||void 0===l?void 0:l[0])||void 0===r?void 0:r.dataKey),J(Object.assign(Object.assign({},e.payload),{value:e.value})),null==F||F(Object.assign({eventType:"bar",categoryClicked:null===(o=null===(i=e.tooltipPayload)||void 0===i?void 0:i[0])||void 0===o?void 0:o.dataKey},e.payload))))}const te=d.getYAxisDomain(D,M,S);return m.default.createElement("div",Object.assign({ref:v,className:l.tremorTwMerge("w-full h-80",Y)},z),m.default.createElement(o.ResponsiveContainer,{className:"h-full w-full"},(null==g?void 0:g.length)?m.default.createElement(o.BarChart,{data:g,stackOffset:b?"sign":x?"expand":"none",layout:"vertical"===k?"vertical":"horizontal",onClick:Z&&(Q||$)?()=>{J(void 0),U(void 0),null==F||F(null)}:void 0},N?m.default.createElement(o.CartesianGrid,{className:l.tremorTwMerge("stroke-1","stroke-tremor-border","dark:stroke-dark-tremor-border"),horizontal:"vertical"!==k,vertical:"vertical"===k}):null,"vertical"!==k?m.default.createElement(o.XAxis,{padding:{left:H,right:H},hide:!C,dataKey:f,interval:w?"preserveStartEnd":L,tick:{transform:"translate(0, 6)"},ticks:w?[g[0][f],g[g.length-1][f]]:void 0,fill:"",stroke:"",className:l.tremorTwMerge("mt-4 text-tremor-label","fill-tremor-content","dark:fill-dark-tremor-content"),tickLine:!1,axisLine:!1,angle:null==B?void 0:B.angle,dy:null==B?void 0:B.verticalShift,height:null==B?void 0:B.xAxisHeight,minTickGap:P}):m.default.createElement(o.XAxis,{hide:!C,type:"number",tick:{transform:"translate(-3, 0)"},domain:te,fill:"",stroke:"",className:l.tremorTwMerge("text-tremor-label","fill-tremor-content","dark:fill-dark-tremor-content"),tickLine:!1,axisLine:!1,tickFormatter:y,minTickGap:P,allowDecimals:G,angle:null==B?void 0:B.angle,dy:null==B?void 0:B.verticalShift,height:null==B?void 0:B.xAxisHeight}),"vertical"!==k?m.default.createElement(o.YAxis,{width:j,hide:!A,axisLine:!1,tickLine:!1,type:"number",domain:te,tick:{transform:"translate(-3, 0)"},fill:"",stroke:"",className:l.tremorTwMerge("text-tremor-label","fill-tremor-content","dark:fill-dark-tremor-content"),tickFormatter:x?e=>`${(100*e).toString()} %`:y,allowDecimals:G}):m.default.createElement(o.YAxis,{width:j,hide:!A,dataKey:f,axisLine:!1,tickLine:!1,ticks:w?[g[0][f],g[g.length-1][f]]:void 0,type:"category",interval:"preserveStartEnd",tick:{transform:"translate(0, 6)"},fill:"",stroke:"",className:l.tremorTwMerge("text-tremor-label","fill-tremor-content","dark:fill-dark-tremor-content")}),m.default.createElement(o.Tooltip,{wrapperStyle:{outline:"none"},isAnimationActive:!1,cursor:{fill:"#d1d5db",opacity:"0.15"},content:q?({active:e,payload:a,label:l})=>R?m.default.createElement(R,{payload:null==a?void 0:a.map((e=>{var a;return Object.assign(Object.assign({},e),{color:null!==(a=I.get(e.dataKey))&&void 0!==a?a:t.BaseColors.Gray})})),active:e,label:l}):m.default.createElement(s.default,{active:e,payload:a,label:l,valueFormatter:y,categoryColors:I}):m.default.createElement(m.default.Fragment,null),position:{y:0}}),O?m.default.createElement(o.Legend,{verticalAlign:"top",height:W,content:({payload:e})=>n({payload:e},I,_,Q,Z?e=>{return t=e,void(Z&&(t!==Q||$?(U(t),null==F||F({eventType:"category",categoryClicked:t})):(U(void 0),null==F||F(null)),J(void 0)));var t}:void 0,K)}):null,h.map((e=>{var i;return m.default.createElement(o.Bar,{className:l.tremorTwMerge(r.getColorClassNames(null!==(i=I.get(e))&&void 0!==i?i:t.BaseColors.Gray,a.colorPalette.background).fillColor,F?"cursor-pointer":""),key:e,name:e,type:"linear",stackId:b||x?"a":void 0,dataKey:e,fill:"",isAnimationActive:E,animationDuration:T,shape:e=>((e,t,a,l)=>{const{fillOpacity:r,name:i,payload:o,value:n}=e;let{x:s,width:c,y:u,height:v}=e;return"horizontal"===l&&v<0?(u+=v,v=Math.abs(v)):"vertical"===l&&c<0&&(s+=c,c=Math.abs(c)),m.default.createElement("rect",{x:s,y:u,width:c,height:v,opacity:t||a&&a!==i?d.deepEqual(t,Object.assign(Object.assign({},o),{value:n}))?r:.3:r})})(e,$,Q,k),onClick:ee})}))):m.default.createElement(c,{noDataText:V})))}));v.displayName="BarChart",module.exports=v;
