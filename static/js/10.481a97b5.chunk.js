(this["webpackJsonpresearch-lab-website"]=this["webpackJsonpresearch-lab-website"]||[]).push([[10],{109:function(e,a,r){"use strict";r.r(a);var t=r(0),l=r.n(t),n=r(61),m=r(100),c=r(95),s=r(86),o=r(83),i=r(91),E=r(99),u=r.n(E),d=r(49),b=r(13);a.default=()=>{var e;const{data:a,loading:r,error:t}=Object(d.b)(),{language:E}=Object(b.b)();if(r)return l.a.createElement(n.a,{className:"my-5"},l.a.createElement("h2",null,"fr"!==E?"Loading...":"Chargement..."));if(t)return l.a.createElement(n.a,{className:"my-5"},l.a.createElement("h2",null,"fr"!==E?"Loading error":"Erreur de chargement"));const h=(null===(e=a.contact)||void 0===e?void 0:e[0])||{},p=Object.keys(h||{}),f=e=>e?e.split("\n").map((e,a,r)=>l.a.createElement("p",{key:a,className:a<r.length-1?"mb-1":"mb-0"},e.trim())):null;return l.a.createElement(l.a.Fragment,null,l.a.createElement(n.a,{className:"my-5"},l.a.createElement("h1",{className:"mb-4"},"fr"!==E?"Contact us":"Contactez-nous"),l.a.createElement("br",null),l.a.createElement(m.a,{onSubmit:async e=>{e.preventDefault();const a=new FormData(e.target);a.append("access_key","8901efb7-f355-4b35-b993-947bf8dd2cc8");const r=Object.fromEntries(a),l=JSON.stringify(r);try{(await fetch("https://api.web3forms.com/submit",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:l}).then(e=>e.json())).success&&u.a.fire({title:"fr"!==E?"Success!":"Succ\xe8s!",text:"fr"!==E?"The mail has been sent!":"Le mail a \xe9t\xe9 envoy\xe9!",icon:"success"})}catch(t){console.error("Error submitting form:",t),u.a.fire({title:"fr"!==E?"Error!":"Erreur!",text:"fr"!==E?"An error has occurred while sending the message":"Une erreur est survenue lors de l'envoi du message.",icon:"error"})}},className:"mb-5"},l.a.createElement(m.a.Group,{className:"mb-3",controlId:"formName"},l.a.createElement(m.a.Label,null,"fr"!==E?"Name":"Nom"),l.a.createElement(m.a.Control,{name:"name",type:"text",placeholder:"fr"!==E?"Enter your name":"Entrez votre nom",required:!0})),l.a.createElement(m.a.Group,{className:"mb-3",controlId:"formEmail"},l.a.createElement(m.a.Label,null,"fr"!==E?"Email address":"Adresse email"),l.a.createElement(m.a.Control,{name:"email",type:"email",placeholder:"fr"!==E?"Enter your email":"Entrez votre email",required:!0})),l.a.createElement(m.a.Group,{className:"mb-3",controlId:"formMessage"},l.a.createElement(m.a.Label,null,"Message"),l.a.createElement(m.a.Control,{name:"message",as:"textarea",rows:3,placeholder:"fr"!==E?"Enter your message":"Entrez votre message",required:!0})),l.a.createElement(c.a,{variant:"primary",type:"submit"},"fr"!==E?"Send":"Envoyer"))),l.a.createElement(n.a,{fluid:!0,className:"my-5 p-0",style:{backgroundColor:"#F1F2FA"}},l.a.createElement(n.a,{className:"my-5"},l.a.createElement(s.a,{className:"mb-5"},l.a.createElement(o.a,{md:7},l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h2",null,"fr"!==E?"How to find us":"O\xf9 nous trouver"," "),l.a.createElement("hr",{className:"border-3 border-primary opacity-50"}))),l.a.createElement(s.a,null,l.a.createElement(o.a,{md:7},l.a.createElement(i.a,{className:"border-0 shadow-sm mb-4"},l.a.createElement(i.a.Body,null,l.a.createElement("h2",{className:"h4 mb-4 text-primary"},p[0]),f(h[p[0]]))),l.a.createElement(s.a,null,l.a.createElement(o.a,{md:6},l.a.createElement(i.a,{className:"border-0 shadow-sm mb-4 h-100"},l.a.createElement(i.a.Body,null,[1,2].map(e=>l.a.createElement("div",{key:p[e]},l.a.createElement("h3",{className:"h4 mb-3 text-primary"},p[e]),f(h[p[e]]),l.a.createElement("br",null)))))),l.a.createElement(o.a,{md:6},l.a.createElement(i.a,{className:"border-0 shadow-sm mb-4 h-100"},l.a.createElement(i.a.Body,null,[3,4].map(e=>l.a.createElement("div",{key:p[e]},l.a.createElement("h3",{className:"h4 mb-3 text-primary"},p[e]),f(h[p[e]]),l.a.createElement("br",null)))))))),l.a.createElement(o.a,{md:5,className:"d-flex align-items-center"},l.a.createElement("div",{className:"ratio ratio-1x1 h-60"},l.a.createElement("iframe",{src:h.map_url,className:"border-0",allowFullScreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade",title:"Location map"}))))),l.a.createElement("br",null)))}}}]);
//# sourceMappingURL=10.481a97b5.chunk.js.map