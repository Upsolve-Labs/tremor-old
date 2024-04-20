"use strict";var e=require("tslib"),r=require("react"),t=require("@headlessui/react"),a=require("../../../lib/tremorTwMerge.cjs"),o=require("../../../lib/utils.cjs");require("../../../contexts/BaseColorContext.cjs"),require("../../../contexts/IndexContext.cjs");var n=require("../../../contexts/RootStylesContext.cjs");function l(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}require("../../../contexts/SelectedValueContext.cjs");var s=l(r);const i=o.makeClassName("dialog"),c=s.default.forwardRef(((r,o)=>{var l;const{children:c,className:d}=r,u=e.__rest(r,["children","className"]),m=null!==(l=s.default.useContext(n))&&void 0!==l?l:a.tremorTwMerge("rounded-tremor-default p-6");return s.default.createElement(t.Transition.Child,{as:s.default.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95"},s.default.createElement(t.Dialog.Panel,Object.assign({ref:o,className:a.tremorTwMerge(i("panel"),"w-full max-w-lg overflow-hidden text-left ring-1 shadow-tremor transition-all transform","bg-tremor-background  text-tremor-content ring-tremor-ring","dark:bg-dark-tremor-background dark:text-dark-tremor-content dark:ring-dark-tremor-ring",m,d)},u),c))}));c.displayName="DialogPanel",module.exports=c;
