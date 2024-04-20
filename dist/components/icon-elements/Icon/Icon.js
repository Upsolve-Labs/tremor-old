'use client';
import{__rest as e}from"tslib";import o from"react";import t,{useTooltip as r}from"../../util-elements/Tooltip/Tooltip.js";import{Sizes as i}from"../../../lib/constants.js";import{tremorTwMerge as s}from"../../../lib/tremorTwMerge.js";import{mergeRefs as l,makeClassName as n}from"../../../lib/utils.js";import{getIconColors as a,shape as m,wrapperProportions as c,iconSizes as p}from"./styles.js";const d=n("Icon"),f={Simple:"simple",Light:"light",Shadow:"shadow",Solid:"solid",Outlined:"outlined"},g=o.forwardRef(((n,g)=>{const{icon:h,variant:b=f.Simple,tooltip:j,size:u=i.SM,color:w,className:N}=n,S=e(n,["icon","variant","tooltip","size","color","className"]),x=h,C=a(b,w),{tooltipProps:y,getReferenceProps:E}=r();return o.createElement("span",Object.assign({ref:l([g,y.refs.setReference]),className:s(d("root"),"inline-flex shrink-0 items-center justify-center",C.bgColor,C.textColor,C.borderColor,C.ringColor,m[b].rounded,m[b].border,m[b].shadow,m[b].ring,c[u].paddingX,c[u].paddingY,N)},E,S),o.createElement(t,Object.assign({text:j},y)),o.createElement(x,{className:s(d("icon"),"shrink-0",p[u].height,p[u].width)}))}));g.displayName="Icon";export{f as IconVariants,g as default};
