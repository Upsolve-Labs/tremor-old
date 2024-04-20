'use client';
import{__rest as e}from"tslib";import t from"react";import{DayPicker as r,useNavigation as a}from"react-day-picker";import o from"../../../assets/ArrowLeftHeadIcon.js";import n from"../../../assets/ArrowRightHeadIcon.js";import s from"../../../assets/DoubleArrowLeftHeadIcon.js";import c from"../../../assets/DoubleArrowRightHeadIcon.js";import{addYears as d,format as l}from"date-fns";import m from"../../text-elements/Text/Text.js";import{NavButton as i}from"./NavButton.js";function u(u){var{mode:b,defaultMonth:f,selected:k,onSelect:x,locale:p,disabled:h,enableYearNavigation:g,classNames:v,weekStartsOn:w=0}=u,y=e(u,["mode","defaultMonth","selected","onSelect","locale","disabled","enableYearNavigation","classNames","weekStartsOn"]);return t.createElement(r,Object.assign({showOutsideDays:!0,mode:b,defaultMonth:f,selected:k,onSelect:x,locale:p,disabled:h,weekStartsOn:w,classNames:Object.assign({months:"flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",month:"space-y-4",caption:"flex justify-center pt-2 relative items-center",caption_label:"text-tremor-default text-tremor-content-emphasis dark:text-dark-tremor-content-emphasis font-medium",nav:"space-x-1 flex items-center",nav_button:"flex items-center justify-center p-1 h-7 w-7 outline-none focus:ring-2 transition duration-100 border border-tremor-border dark:border-dark-tremor-border hover:bg-tremor-background-muted dark:hover:bg-dark-tremor-background-muted rounded-tremor-small focus:border-tremor-brand-subtle dark:focus:border-dark-tremor-brand-subtle focus:ring-tremor-brand-muted dark:focus:ring-dark-tremor-brand-muted text-tremor-content-subtle dark:text-dark-tremor-content-subtle hover:text-tremor-content dark:hover:text-dark-tremor-content",nav_button_previous:"absolute left-1",nav_button_next:"absolute right-1",table:"w-full border-collapse space-y-1",head_row:"flex",head_cell:"w-9 font-normal text-center text-tremor-content-subtle dark:text-dark-tremor-content-subtle",row:"flex w-full mt-0.5",cell:"text-center p-0 relative focus-within:relative text-tremor-default text-tremor-content-emphasis dark:text-dark-tremor-content-emphasis",day:"h-9 w-9 p-0 hover:bg-tremor-background-subtle dark:hover:bg-dark-tremor-background-subtle outline-tremor-brand dark:outline-dark-tremor-brand rounded-tremor-default",day_today:"font-bold",day_selected:"aria-selected:bg-tremor-background-emphasis aria-selected:text-tremor-content-inverted dark:aria-selected:bg-dark-tremor-background-emphasis dark:aria-selected:text-dark-tremor-content-inverted ",day_disabled:"text-tremor-content-subtle dark:text-dark-tremor-content-subtle disabled:hover:bg-transparent",day_outside:"text-tremor-content-subtle dark:text-dark-tremor-content-subtle"},v),components:{IconLeft:r=>{var a=e(r,[]);return t.createElement(o,Object.assign({className:"h-4 w-4"},a))},IconRight:r=>{var a=e(r,[]);return t.createElement(n,Object.assign({className:"h-4 w-4"},a))},Caption:r=>{var u=e(r,[]);const{goToMonth:b,nextMonth:f,previousMonth:k,currentMonth:x}=a();return t.createElement("div",{className:"flex justify-between items-center"},t.createElement("div",{className:"flex items-center space-x-1"},g&&t.createElement(i,{onClick:()=>x&&b(d(x,-1)),icon:s}),t.createElement(i,{onClick:()=>k&&b(k),icon:o})),t.createElement(m,{className:"text-tremor-default tabular-nums capitalize text-tremor-content-emphasis dark:text-dark-tremor-content-emphasis font-medium"},l(u.displayMonth,"LLLL yyy",{locale:p})),t.createElement("div",{className:"flex items-center space-x-1"},t.createElement(i,{onClick:()=>f&&b(f),icon:n}),g&&t.createElement(i,{onClick:()=>x&&b(d(x,1)),icon:c})))}}},y))}u.displayName="DateRangePicker";export{u as default};
