/*! For license information please see 4.54651ec5.chunk.js.LICENSE.txt */
(this["webpackJsonpresearch-lab-website"]=this["webpackJsonpresearch-lab-website"]||[]).push([[4],{114:function(e,a,t){"use strict";t.r(a);var r=t(0),c=t.n(r),s=t(91),l=t(61),n=t(86),o=t(83),i=t(94),m=t(89);const d=Object(m.a)("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);var b=t(29),u=(t(97),t(17));const f=e=>{const a=["#FF6B6B","#4ECDC4","#45B7D1","#96CEB4","#FFEEAD","#D4A5A5","#9B59B6","#3498DB"];return a[e.split("").reduce((e,a)=>e+a.charCodeAt(0),0)%a.length]},j=e=>{let{member:a,isExpanded:t,onToggle:l}=e;const n=Object(r.useRef)(null),[o,m]=Object(r.useState)(!1),[b,j]=Object(r.useState)(!1),[O,N]=Object(r.useState)(!1),{language:p}=Object(u.b)();Object(r.useEffect)(()=>{const e=()=>{if(n.current){const e=n.current,a=e.scrollHeight>e.clientHeight+5;m(!t&&a)}};e();const a=new ResizeObserver(()=>{e()});return n.current&&a.observe(n.current),()=>a.disconnect()},[a.description,p,t]);return c.a.createElement(s.a,{className:"team-card ".concat(t?"expanded":""),onClick:e=>{(o||t)&&l()}},c.a.createElement("div",{className:"team-overlay"}),c.a.createElement(s.a.Body,null,c.a.createElement("div",{className:"team-profile-container"},a.image_url?c.a.createElement(c.a.Fragment,null,!b&&!O&&c.a.createElement("div",{className:"team-loading-placeholder"},"Loading..."),c.a.createElement("img",{src:(e=>{if(e&&e.includes("drive.google.com")&&e.includes("/file/d/")){const a=e.split("/file/d/")[1].split("/")[0];return"https://drive.google.com/thumbnail?id=".concat(a,"&sz=s512")}return e})(a.image_url),alt:a.nom,className:"team-profile-image ".concat(b?"visible":"hidden"),onLoad:()=>{j(!0),N(!1)},onError:()=>{N(!0),j(!1)},style:{display:O?"none":"block",opacity:b?1:0,transition:"opacity 0.3s ease"}}),O&&c.a.createElement("div",{className:"team-initials-circle error-state",style:{backgroundColor:f(a.nom)}},c.a.createElement(i.a,{size:32}))):c.a.createElement("div",{className:"team-initials-circle",style:{backgroundColor:f(a.nom)}},a.nom.split(" ").map(e=>e[0]).join("").toUpperCase())),c.a.createElement(s.a.Title,null,a.personal_link?c.a.createElement("a",{href:a.personal_link,onClick:e=>e.stopPropagation(),className:"team-link",target:"_blank",rel:"noopener noreferrer"},a.nom,c.a.createElement(d,{className:"inline-block",size:14})):a.nom),c.a.createElement(s.a.Subtitle,{className:"text-muted"},a.role),a.description&&c.a.createElement("div",{className:"team-description-container"},c.a.createElement("div",{ref:n,className:"team-description-fade ".concat(!t&&o?"has-fade":""),style:{maxHeight:t?"none":"80px",overflow:"hidden"}},c.a.createElement(s.a.Text,null,a.description)),o&&!t&&c.a.createElement("button",{className:"team-read-more-btn",onClick:e=>{e.stopPropagation(),l()}},"fr"!==p?"Read more":"Lire la suite"))))};a.default=function(){const{data:e,loading:a,error:t}=Object(b.b)(),[s,i]=Object(r.useState)(null),{language:m}=Object(u.b)();return a?c.a.createElement(l.a,{className:"my-5"},c.a.createElement("h2",null,"fr"!==m?"Loading...":"Chargement...")):t?c.a.createElement(l.a,{className:"my-5"},c.a.createElement("h2",null,"fr"!==m?"Loading error":"Erreur de chargement")):e.team&&0!==e.team.length?c.a.createElement(l.a,{className:"my-5"},c.a.createElement("h1",null,"fr"!==m?"Our Team Members":"Nos Collaborateurs"),c.a.createElement("br",null),c.a.createElement(n.a,null,e.team.map((e,a)=>c.a.createElement(o.a,{md:4,key:a,className:"mb-4"},c.a.createElement(j,{member:e,isExpanded:s===a,onToggle:()=>i(s===a?null:a)}))))):c.a.createElement(l.a,{className:"my-5"},c.a.createElement("h2",null,"fr"!==m?"No team member available":"Aucun membre disponible"))}},89:function(e,a,t){"use strict";t.d(a,"a",(function(){return d}));var r=t(3),c=t(6),s=t(0);const l=function(){for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];return a.filter((e,a,t)=>Boolean(e)&&t.indexOf(e)===a).join(" ")};var n={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const o=["color","size","strokeWidth","absoluteStrokeWidth","className","children","iconNode"],i=Object(s.forwardRef)((e,a)=>{let{color:t="currentColor",size:i=24,strokeWidth:m=2,absoluteStrokeWidth:d,className:b="",children:u,iconNode:f}=e,j=Object(c.a)(e,o);return Object(s.createElement)("svg",Object(r.a)(Object(r.a)({ref:a},n),{},{width:i,height:i,stroke:t,strokeWidth:d?24*Number(m)/Number(i):m,className:l("lucide",b)},j),[...f.map(e=>{let[a,t]=e;return Object(s.createElement)(a,t)}),...Array.isArray(u)?u:[u]])}),m=["className"],d=(e,a)=>{const t=Object(s.forwardRef)((t,n)=>{let{className:o}=t,d=Object(c.a)(t,m);return Object(s.createElement)(i,Object(r.a)({ref:n,iconNode:a,className:l("lucide-".concat((b=e,b.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase())),o)},d));var b});return t.displayName="".concat(e),t}},91:function(e,a,t){"use strict";var r=t(3),c=t(6),s=t(8),l=t.n(s),n=t(0),o=t(9),i=t(4);const m=["className","bsPrefix","as"],d=n.forwardRef((e,a)=>{let{className:t,bsPrefix:s,as:n="div"}=e,d=Object(c.a)(e,m);return s=Object(o.c)(s,"card-body"),Object(i.jsx)(n,Object(r.a)({ref:a,className:l()(t,s)},d))});d.displayName="CardBody";var b=d;const u=["className","bsPrefix","as"],f=n.forwardRef((e,a)=>{let{className:t,bsPrefix:s,as:n="div"}=e,m=Object(c.a)(e,u);return s=Object(o.c)(s,"card-footer"),Object(i.jsx)(n,Object(r.a)({ref:a,className:l()(t,s)},m))});f.displayName="CardFooter";var j=f,O=t(51);const N=["bsPrefix","className","as"],p=n.forwardRef((e,a)=>{let{bsPrefix:t,className:s,as:m="div"}=e,d=Object(c.a)(e,N);const b=Object(o.c)(t,"card-header"),u=Object(n.useMemo)(()=>({cardHeaderBsPrefix:b}),[b]);return Object(i.jsx)(O.a.Provider,{value:u,children:Object(i.jsx)(m,Object(r.a)(Object(r.a)({ref:a},d),{},{className:l()(s,b)}))})});p.displayName="CardHeader";var h=p;const x=["bsPrefix","className","variant","as"],g=n.forwardRef((e,a)=>{let{bsPrefix:t,className:s,variant:n,as:m="img"}=e,d=Object(c.a)(e,x);const b=Object(o.c)(t,"card-img");return Object(i.jsx)(m,Object(r.a)({ref:a,className:l()(n?"".concat(b,"-").concat(n):b,s)},d))});g.displayName="CardImg";var y=g;const v=["className","bsPrefix","as"],E=n.forwardRef((e,a)=>{let{className:t,bsPrefix:s,as:n="div"}=e,m=Object(c.a)(e,v);return s=Object(o.c)(s,"card-img-overlay"),Object(i.jsx)(n,Object(r.a)({ref:a,className:l()(t,s)},m))});E.displayName="CardImgOverlay";var k=E;const w=["className","bsPrefix","as"],C=n.forwardRef((e,a)=>{let{className:t,bsPrefix:s,as:n="a"}=e,m=Object(c.a)(e,w);return s=Object(o.c)(s,"card-link"),Object(i.jsx)(n,Object(r.a)({ref:a,className:l()(t,s)},m))});C.displayName="CardLink";var P=C,R=t(50);const B=["className","bsPrefix","as"],L=Object(R.a)("h6"),A=n.forwardRef((e,a)=>{let{className:t,bsPrefix:s,as:n=L}=e,m=Object(c.a)(e,B);return s=Object(o.c)(s,"card-subtitle"),Object(i.jsx)(n,Object(r.a)({ref:a,className:l()(t,s)},m))});A.displayName="CardSubtitle";var z=A;const S=["className","bsPrefix","as"],T=n.forwardRef((e,a)=>{let{className:t,bsPrefix:s,as:n="p"}=e,m=Object(c.a)(e,S);return s=Object(o.c)(s,"card-text"),Object(i.jsx)(n,Object(r.a)({ref:a,className:l()(t,s)},m))});T.displayName="CardText";var H=T;const M=["className","bsPrefix","as"],F=Object(R.a)("h5"),W=n.forwardRef((e,a)=>{let{className:t,bsPrefix:s,as:n=F}=e,m=Object(c.a)(e,M);return s=Object(o.c)(s,"card-title"),Object(i.jsx)(n,Object(r.a)({ref:a,className:l()(t,s)},m))});W.displayName="CardTitle";var D=W;const I=["bsPrefix","className","bg","text","border","body","children","as"],_=n.forwardRef((e,a)=>{let{bsPrefix:t,className:s,bg:n,text:m,border:d,body:u=!1,children:f,as:j="div"}=e,O=Object(c.a)(e,I);const N=Object(o.c)(t,"card");return Object(i.jsx)(j,Object(r.a)(Object(r.a)({ref:a},O),{},{className:l()(s,N,n&&"bg-".concat(n),m&&"text-".concat(m),d&&"border-".concat(d)),children:u?Object(i.jsx)(b,{children:f}):f}))});_.displayName="Card";a.a=Object.assign(_,{Img:y,Title:D,Subtitle:z,Body:b,Link:P,Text:H,Header:h,Footer:j,ImgOverlay:k})},94:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var r=t(89);const c=Object(r.a)("ImageOff",[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M10.41 10.41a2 2 0 1 1-2.83-2.83",key:"1bzlo9"}],["line",{x1:"13.5",x2:"6",y1:"13.5",y2:"21",key:"1q0aeu"}],["line",{x1:"18",x2:"21",y1:"12",y2:"15",key:"5mozeu"}],["path",{d:"M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59",key:"mmje98"}],["path",{d:"M21 15V5a2 2 0 0 0-2-2H9",key:"43el77"}]])},97:function(e,a,t){}}]);
//# sourceMappingURL=4.54651ec5.chunk.js.map