(this["webpackJsonpresearch-lab-website"]=this["webpackJsonpresearch-lab-website"]||[]).push([[8],{100:function(e,a,t){"use strict";t.r(a);var c=t(0),s=t.n(c),r=t(90),l=t(60),n=t(85),i=t(82),b=t(48);t(95);const d=e=>{let{project:a,isExpanded:t,onToggle:l}=e;const n=Object(c.useRef)(null),[i,b]=Object(c.useState)(!1);Object(c.useEffect)(()=>{if(n.current){const e=n.current;b(e.scrollHeight>e.clientHeight+5)}},[a.description]);return s.a.createElement(r.a,{className:"project-card ".concat(t?"expanded":""),onClick:e=>{i&&l()}},s.a.createElement("div",{className:"card-overlay"}),s.a.createElement(r.a.Body,null,s.a.createElement(r.a.Title,null,a.titre),s.a.createElement(r.a.Subtitle,{className:"mb-2 text-muted"},a.sous_titre),s.a.createElement("div",{className:"description-container"},s.a.createElement("div",{ref:n,className:"description-fade ".concat(!t&&i?"has-fade":""),style:{maxHeight:t?"none":"160px",overflow:"hidden",whiteSpace:"pre-line",textAlign:"justify"}},s.a.createElement(r.a.Text,null,a.description)),i&&!t&&s.a.createElement("button",{className:"read-more-btn",onClick:e=>{e.stopPropagation(),l()}},"Lire la suite"))))};a.default=function(){const{data:e,loading:a,error:t}=Object(b.b)(),[r,m]=Object(c.useState)(null);return a?s.a.createElement(l.a,{className:"my-5"},s.a.createElement("h2",null,"Chargement...")):t?s.a.createElement(l.a,{className:"my-5"},s.a.createElement("h2",null,"Erreur de chargement")):e.research&&0!==e.research.length?s.a.createElement(l.a,{className:"my-5"},s.a.createElement("h1",null,"Nos Recherches"),s.a.createElement("br",null),s.a.createElement(n.a,null,e.research.map(e=>s.a.createElement(i.a,{md:6,key:e.id,className:"mb-4"},s.a.createElement(d,{project:e,isExpanded:r===e.id,onToggle:()=>m(r===e.id?null:e.id)}))))):s.a.createElement(l.a,{className:"my-5"},s.a.createElement("h2",null,"Aucun projet disponible"))}},90:function(e,a,t){"use strict";var c=t(3),s=t(6),r=t(8),l=t.n(r),n=t(0),i=t(9),b=t(4);const d=["className","bsPrefix","as"],m=n.forwardRef((e,a)=>{let{className:t,bsPrefix:r,as:n="div"}=e,m=Object(s.a)(e,d);return r=Object(i.c)(r,"card-body"),Object(b.jsx)(n,Object(c.a)({ref:a,className:l()(t,r)},m))});m.displayName="CardBody";var o=m;const j=["className","bsPrefix","as"],f=n.forwardRef((e,a)=>{let{className:t,bsPrefix:r,as:n="div"}=e,d=Object(s.a)(e,j);return r=Object(i.c)(r,"card-footer"),Object(b.jsx)(n,Object(c.a)({ref:a,className:l()(t,r)},d))});f.displayName="CardFooter";var O=f,u=t(49);const N=["bsPrefix","className","as"],x=n.forwardRef((e,a)=>{let{bsPrefix:t,className:r,as:d="div"}=e,m=Object(s.a)(e,N);const o=Object(i.c)(t,"card-header"),j=Object(n.useMemo)(()=>({cardHeaderBsPrefix:o}),[o]);return Object(b.jsx)(u.a.Provider,{value:j,children:Object(b.jsx)(d,Object(c.a)(Object(c.a)({ref:a},m),{},{className:l()(r,o)}))})});x.displayName="CardHeader";var p=x;const h=["bsPrefix","className","variant","as"],v=n.forwardRef((e,a)=>{let{bsPrefix:t,className:r,variant:n,as:d="img"}=e,m=Object(s.a)(e,h);const o=Object(i.c)(t,"card-img");return Object(b.jsx)(d,Object(c.a)({ref:a,className:l()(n?"".concat(o,"-").concat(n):o,r)},m))});v.displayName="CardImg";var y=v;const E=["className","bsPrefix","as"],g=n.forwardRef((e,a)=>{let{className:t,bsPrefix:r,as:n="div"}=e,d=Object(s.a)(e,E);return r=Object(i.c)(r,"card-img-overlay"),Object(b.jsx)(n,Object(c.a)({ref:a,className:l()(t,r)},d))});g.displayName="CardImgOverlay";var P=g;const w=["className","bsPrefix","as"],C=n.forwardRef((e,a)=>{let{className:t,bsPrefix:r,as:n="a"}=e,d=Object(s.a)(e,w);return r=Object(i.c)(r,"card-link"),Object(b.jsx)(n,Object(c.a)({ref:a,className:l()(t,r)},d))});C.displayName="CardLink";var R=C,k=t(47);const T=["className","bsPrefix","as"],H=Object(k.a)("h6"),S=n.forwardRef((e,a)=>{let{className:t,bsPrefix:r,as:n=H}=e,d=Object(s.a)(e,T);return r=Object(i.c)(r,"card-subtitle"),Object(b.jsx)(n,Object(c.a)({ref:a,className:l()(t,r)},d))});S.displayName="CardSubtitle";var B=S;const I=["className","bsPrefix","as"],L=n.forwardRef((e,a)=>{let{className:t,bsPrefix:r,as:n="p"}=e,d=Object(s.a)(e,I);return r=Object(i.c)(r,"card-text"),Object(b.jsx)(n,Object(c.a)({ref:a,className:l()(t,r)},d))});L.displayName="CardText";var A=L;const F=["className","bsPrefix","as"],J=Object(k.a)("h5"),M=n.forwardRef((e,a)=>{let{className:t,bsPrefix:r,as:n=J}=e,d=Object(s.a)(e,F);return r=Object(i.c)(r,"card-title"),Object(b.jsx)(n,Object(c.a)({ref:a,className:l()(t,r)},d))});M.displayName="CardTitle";var _=M;const q=["bsPrefix","className","bg","text","border","body","children","as"],z=n.forwardRef((e,a)=>{let{bsPrefix:t,className:r,bg:n,text:d,border:m,body:j=!1,children:f,as:O="div"}=e,u=Object(s.a)(e,q);const N=Object(i.c)(t,"card");return Object(b.jsx)(O,Object(c.a)(Object(c.a)({ref:a},u),{},{className:l()(r,N,n&&"bg-".concat(n),d&&"text-".concat(d),m&&"border-".concat(m)),children:j?Object(b.jsx)(o,{children:f}):f}))});z.displayName="Card";a.a=Object.assign(z,{Img:y,Title:_,Subtitle:B,Body:o,Link:R,Text:A,Header:p,Footer:O,ImgOverlay:P})},95:function(e,a,t){}}]);
//# sourceMappingURL=8.4932ee9f.chunk.js.map