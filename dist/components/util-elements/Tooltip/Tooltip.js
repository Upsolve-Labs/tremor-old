import{useFloating as e,autoUpdate as t,offset as o,flip as r,shift as s,useHover as a,useFocus as i,useDismiss as l,useRole as n,useInteractions as p}from"@floating-ui/react";import{tremorTwMerge as m}from"../../../lib/tremorTwMerge.js";import g,{useState as c}from"react";const f=m=>{const[g,f]=c(!1),[d,u]=c(),{x:x,y:y,refs:b,strategy:w,context:h}=e({open:g,onOpenChange:e=>{if(e&&m){const t=setTimeout((()=>{f(e)}),m);u(t)}else clearTimeout(d),f(e)},placement:"top",whileElementsMounted:t,middleware:[o(5),r({fallbackAxisSideDirection:"start"}),s()]}),P=a(h,{move:!1}),k=i(h),F=l(h),T=n(h,{role:"tooltip"}),{getReferenceProps:j,getFloatingProps:v}=p([P,k,F,T]);return{tooltipProps:{open:g,x:x,y:y,refs:b,strategy:w,getFloatingProps:v},getReferenceProps:j}},d=({text:e,open:t,x:o,y:r,refs:s,strategy:a,getFloatingProps:i})=>t&&e?g.createElement("div",Object.assign({className:m("max-w-xs text-sm z-20 rounded-tremor-default opacity-100 px-2.5 py-1 whitespace-nowrap","text-white bg-tremor-background-emphasis","text-white dark:bg-dark-tremor-background-subtle"),ref:s.setFloating,style:{position:a,top:null!=r?r:0,left:null!=o?o:0}},i()),e):null;d.displayName="Tooltip";export{d as default,f as useTooltip};
