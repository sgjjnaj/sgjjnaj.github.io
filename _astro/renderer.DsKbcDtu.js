import{a as e,i as t,n,r,t as i}from"./particles.Bj80oobR.js";import{o as a,t as o}from"./galaxy.BEMMpHV0.js";var s=()=>{let e=window;return e.__pyuyiScenes??={},e.__pyuyiScenes},c=2;function l(e){let t=s(),n=t[e];t[e]=void 0,n?.stop()}function u(e,t,n,r){if(t&&s()[e]?.root===t||(l(e),!t))return;let i=t,a=i.querySelector(n),o=()=>void 0,u=0,d=0,f=e=>{e.preventDefault(),!(u>=c||d)&&(u++,d=requestAnimationFrame(()=>{if(d=0,m(),a){let e=a.cloneNode(!1);a.replaceWith(e),a=e}p()}))};function p(){a?.addEventListener(`webglcontextlost`,f),o=r(i)}function m(){a?.removeEventListener(`webglcontextlost`,f),o(),o=()=>void 0}p(),s()[e]={root:i,stop(){cancelAnimationFrame(d),d=0,m()}}}var d={lift:0,sway:0,tilt:0},f=48*Math.PI/180,p=[0,1,0],m=(e,t)=>[e[0]+t[0],e[1]+t[1],e[2]+t[2]],h=(e,t)=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]],g=(e,t)=>[e[0]*t,e[1]*t,e[2]*t],_=(e,t)=>e[0]*t[0]+e[1]*t[1]+e[2]*t[2],v=(e,t)=>[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]],y=e=>g(e,1/(Math.hypot(e[0],e[1],e[2])||1)),b=(e,t,n)=>m(e,g(h(t,e),n)),x=e=>Math.min(1,Math.max(0,e)),S=e=>e*e*(3-2*e),C=[{kind:`blogs`,center:[0,0,0],radius:12,view:y([.12,.3,1]),distance:2.55,inclination:.5,roll:.3,spin:-.034},{kind:`papers`,center:[-44,14,-115],radius:13,view:y([-.22,.22,1]),distance:2.55,inclination:.55,roll:.65,spin:-.026},{kind:`photos`,center:[38,-10,-225],radius:9.5,view:y([.25,.08,1]),distance:2.65,inclination:.28,roll:0,spin:.022},{kind:`moments`,center:[-16,6,-330],radius:10.5,view:y([-.1,.18,1]),distance:2.45,inclination:.9,roll:.4,spin:.009}],w={center:[26,-4,-455],radius:14,view:y([.12,.14,1]),distance:1.45,inclination:Math.PI/2-.16,roll:0,spin:0,frameWidth:.55,shift:.05},T=[...C,w];function E(e,t=0){let{view:n,roll:r}=e,i=e.inclination+t,a=y(h(p,g(n,_(n,p)))),o=y(m(g(n,Math.cos(i)),g(a,Math.sin(i)))),s=y(v(p,o)),c=v(s,o);return{x:m(g(s,Math.cos(r)),g(c,Math.sin(r))),y:o,z:m(g(s,-Math.sin(r)),g(c,Math.cos(r)))}}function D(e,t){let n=(e,n)=>Math.sin(t*2*Math.PI/e+n);return{lift:.032*n(13,e*1.7)+.006*n(5.6,e*.9),sway:.013*n(19,e*2.1),tilt:.03*n(15,e*2.3)}}function O(e,t){let n=y(v(p,e.view));return m(e.center,m(g(p,t.lift*e.radius),g(n,t.sway*e.radius)))}function k(e,t=d){let{x:n,y:r,z:i}=E(e,t.tilt),a=e.radius,[o,s,c]=O(e,t);return new Float32Array([n[0]*a,n[1]*a,n[2]*a,0,r[0]*a,r[1]*a,r[2]*a,0,i[0]*a,i[1]*a,i[2]*a,0,o,s,c,1])}function A(e,t,n,r=d){let i=Math.hypot(n[0],n[2]),a=Math.atan2(n[2],n[0])+t,{x:o,y:s,z:c}=E(e,r.tilt),l=e.radius;return m(O(e,r),m(m(g(o,i*Math.cos(a)*l),g(s,n[1]*l)),g(c,i*Math.sin(a)*l)))}function ee(e,t){let n=T[e],r=Math.tan(f/2)*t,i=Math.max(1,Math.min(2.4,(n.frameWidth??1.25)/r/n.distance)),a=m(n.center,g(n.view,n.distance*n.radius*i)),o=x((t-1.15)/.55),s=y(v(g(n.view,-1),p));return{eye:a,target:h(n.center,g(s,n.radius*(n.shift??.42)*o))}}function te(e,t,n,r,i){let a=i*i,o=a*i,s=s=>.5*(2*t[s]+(-e[s]+n[s])*i+(2*e[s]-5*t[s]+4*n[s]-r[s])*a+(-e[s]+3*t[s]-3*n[s]+r[s])*o);return[s(0),s(1),s(2)]}function ne(e,t,n=[0,0]){let r=T.length-1,i=Math.min(r,Math.max(0,e)),a=Math.min(r-1,Math.floor(i)),o=i-a,s=o+(S(o)-o)*.35,c=T.map((e,n)=>ee(n,t)),l=e=>e<0?b(c[0].eye,c[1].eye,-.5):e>r?b(c[r].eye,c[r-1].eye,-.5):c[e].eye,u=te(l(a-1),l(a),l(a+1),l(a+2),s),d=S(x((s-.12)/.7)),f=b(c[a].target,c[a+1].target,d),_=y(h(f,u)),C=y(v(_,p)),w=Math.sin(Math.PI*s)*.06*(a%2==0?1:-1),E=y(m(g(p,Math.cos(w)),g(C,Math.sin(w)))),D=v(C,_);return{eye:m(u,m(g(C,n[0]),g(D,n[1]))),target:f,up:E}}function re(e,t,n,r){let i=1/Math.tan(e/2),a=1/(n-r);return new Float32Array([i/t,0,0,0,0,i,0,0,0,0,(n+r)*a,-1,0,0,2*n*r*a,0])}function ie(e,t,n){let r=y(h(e,t)),i=y(v(n,r)),a=v(r,i);return new Float32Array([i[0],a[0],r[0],0,i[1],a[1],r[1],0,i[2],a[2],r[2],0,-_(i,e),-_(a,e),-_(r,e),1])}function ae(e,t){let n=new Float32Array(16);for(let r=0;r<4;r++)for(let i=0;i<4;i++){let a=0;for(let n=0;n<4;n++)a+=e[n*4+i]*t[r*4+n];n[r*4+i]=a}return n}function oe(e,t,n,r){let i=e,a=i[0]*t[0]+i[4]*t[1]+i[8]*t[2]+i[12],o=i[1]*t[0]+i[5]*t[1]+i[9]*t[2]+i[13],s=i[3]*t[0]+i[7]*t[1]+i[11]*t[2]+i[15];return s<=1e-4?{x:0,y:0,depth:s}:{x:(a/s+1)/2*n,y:(1-o/s)/2*r,depth:s}}var j=(e,t)=>[e[0]+t[0],e[1]+t[1],e[2]+t[2]],M=(e,t)=>[e[0]*t,e[1]*t,e[2]*t],N=(e,t)=>[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]],P=e=>M(e,1/(Math.hypot(e[0],e[1],e[2])||1)),F=[0,0,-220],I=1010;function se(e){let t=(t,n,r)=>{let i=Math.imul(t,374761393)^Math.imul(n,668265263)^Math.imul(r,1440662683)^Math.imul(e,2246822519);return i=Math.imul(i^i>>>13,1274126177),((i^i>>>16)>>>0)/4294967296},n=e=>e*e*(3-2*e),r=(e,r,i)=>{let[a,o,s]=[Math.floor(e),Math.floor(r),Math.floor(i)],[c,l,u]=[n(e-a),n(r-o),n(i-s)],d=(e,n,r)=>t(a+e,o+n,s+r),f=(e,t,n)=>e+(t-e)*n;return f(f(f(d(0,0,0),d(1,0,0),c),f(d(0,1,0),d(1,1,0),c),l),f(f(d(0,0,1),d(1,0,1),c),f(d(0,1,1),d(1,1,1),c),l),u)};return([e,t,n])=>{let i=0,a=.5,o=1;for(let s=0;s<4;s++)i+=a*r(e*o,t*o,n*o),o*=2.07,a*=.5;return i/.94}}var L=e=>Math.min(60,e.next()**-.75);function R(t,r){let i=t.next(),a=Math.min(.45,.12+r*.01);return i<a*.45?n.old:i<a?t.next()<.6?n.young:n.hot:i<.62?n.white:e(n.white,n.warm,t.next())}function z(e,t,n,r,i){let a=L(t),o=a<6?.8+.3*Math.log2(a):1.6+1.5*Math.log2(a/6);e.add(n[0],n[1],n[2],R(t,a),Math.min(3.2,.1+.1*a)*i,o*r/I)}function ce(i){let a=t(4242),o=se(17),s=r(),c=()=>P([a.normal(),a.normal(),a.normal()]),l=P([.35,1,.2]),u=P(N(l,[0,0,1])),d=N(l,u),f=e=>{let t=a.between(0,Math.PI*2),n=a.normal()*e;return P(j(j(M(u,Math.cos(t)),M(d,Math.sin(t))),M(l,n)))},p=e=>o(M(e,3.2));for(let e=0;e<i*.32;e++){let e=a.between(450,700);z(s,a,j(F,M(c(),e)),e,1)}for(let e=0,t=0;e<i*.26&&t<i*3;t++){let t=f(.15);if(a.next()>p(t)**2.2*1.9)continue;e++;let n=a.between(520,720);z(s,a,j(F,M(t,n)),n,.75)}for(let t=0,r=0;t<i*.36&&r<i*5;r++){let r=f(.12),i=p(r);if(a.next()>i**2.6*2.2)continue;t++;let o=a.between(560,720),c=j(F,M(r,o)),l=e(n.young,n.warm,Math.min(1,i*1.4-.2));s.add(c[0],c[1],c[2],l,a.between(.1,.26),a.between(.7,1.3)*o/I)}let m=[{d:f(.05),tints:[n.hydrogen,n.rose]},{d:f(.05),tints:[n.violet,n.young]},{d:f(.05),tints:[n.teal,n.young]},{d:f(.05),tints:[n.rose,n.violet]}];for(let t of m){let n=j(F,M(t.d,600));for(let r=0,c=0;r<i*.025&&c<i*.4;c++){let i=j(n,[a.normal()*26,a.normal()*18,a.normal()*26]);if(a.next()>o(M(i,.045))**3*3)continue;r++;let c=e(t.tints[0],t.tints[1],a.next());a.next()<.88?s.add(i[0],i[1],i[2],c,a.between(.04,.12),a.between(.7,1.4)*600/I):s.add(i[0],i[1],i[2],c,a.between(.003,.007),a.between(4,9))}}for(let e=0;e<i*.17;e++){let e=[a.between(-150,150),a.between(-95,95),a.between(-560,90)],t=L(a);s.add(e[0],e[1],e[2],R(a,t),Math.min(1.6,.08*t),.03+.012*Math.log2(t))}for(let t=0;t<50;t++){let t=j(F,M(c(),a.between(300,480))),r=[a.between(1.2,3),a.between(.3,.9),a.between(1.2,3)];for(let i=0;i<60;i++)s.add(t[0]+a.normal()*r[0],t[1]+a.normal()*r[1],t[2]+a.normal()*r[2],e(n.warm,n.white,a.next()),.05,.9)}let h=C[2],g=P(N(M(h.view,-1),[0,1,0])),_=N(g,M(h.view,-1)),v=j(h.center,j(M(h.view,-h.radius*5),j(M(_,h.radius*1.1),M(g,h.radius*.8))));for(let t=0;t<700;t++){let r=t<140,i=a.between(0,Math.PI*2),o=r?Math.abs(a.normal())*.25:1.25+a.normal()*.12,c=j(v,j(M(g,o*Math.cos(i)),M(_,o*Math.sin(i))));s.add(c[0],c[1],c[2],r?n.old:e(n.old,n.hydrogen,.4),r?.2:.14,.14)}return s.build(a)}var le={blogs:5194,papers:1300,photos:1950,moments:292};function B(e,t,n,r,i,a=!1){let{random:o}=e;for(let s=0;s<t;s++){let t,s,c;if(a){let e=o.exponential(1),n=o.between(-1,1),r=Math.sqrt(1-n*n),i=o.between(0,Math.PI*2);t=e*r*Math.cos(i),s=e*n,c=e*r*Math.sin(i)}else t=o.normal(),s=o.normal(),c=o.normal();let[l,u,d]=i(o);e.light.add(n[0]+t*r[0],n[1]+s*r[1],n[2]+c*r[2],l,u,d)}}function V(e,t,n,r,i){let[o,s]=a(e,t,n),c=Math.hypot(o,s)||1,l=o/c,u=s/c;return[o+l*r-u*i,s+u*r+l*i]}var H=t=>r=>r.next()<.05?[e(n.hot,n.white,r.next()*.3),.6*t,.009]:r.next()<.2?[e(n.warm,n.white,r.next()),.11*t,.0055]:[e(n.young,n.white,r.next()*.35),.14*t,.0055],U=t=>r=>[e(n.old,n.warm,r.next()),.17*t,.007];function W(t,r,i,a,o,s){let{random:c}=t;for(let l=0;l<i;l++){let i=l%2,u=c.between(a,o),[d,f]=V(r,i,u,c.normal()*s(u)*.5,c.normal()*s(u)*.3),p=c.between(.005,.013),m=c.next()<.7;B(t,22+Math.floor(c.next()*40),[d,0,f],[p,p*.5,p],t=>[m?e(n.hydrogen,n.rose,t.next()*.6):e(n.hot,n.young,t.next()),.42,.005]),B(t,3,[d,0,f],[p,p*.4,p],()=>[m?n.hydrogen:n.young,.09,.026])}}function G(t,r,i,a,o){let{random:s}=t;for(let c=0;c<i;c++){let i=s.between(0,a),[l,u]=V(r,c%2,i,s.normal()*o(i)*1.4,s.normal()*o(i)),d=1.2-i/a*.6,f=s.next()<.2?e(n.rose,n.violet,s.next()):e(n.young,n.violet,s.next()*.3);t.light.add(l,s.normal()*.01,u,f,.016*d,s.between(.035,.07))}}function K(e,t,n,r,a){let{random:o}=e;for(let s=0;s<n;s++){let n=o.between(.02,r),[c,l]=V(t,s%2,n,-a(n)*.8+o.normal()*a(n)*.75,o.normal()*.02),u=o.next()<.15?o.between(.12,.2):o.between(.04,.1);e.dust.add(c,o.normal()*.006,l,i,u,o.between(.035,.07))}}function q(e,t,n,r,i,a,o){B(e,t,n,[r,r*.6,r],e=>[i,a,o*e.between(.8,1.2)])}function J(t,r,i,a,o){let{random:s}=t;for(let c=0;c<r;c++){let r=s.exponential(i);if(r>a)continue;let c=s.between(0,Math.PI*2),l=e(n.warm,n.young,Math.min(1,r*1.4));t.light.add(r*Math.cos(c),s.normal()*.012,r*Math.sin(c),l,o,s.between(.08,.16))}}function Y(t,r,i,a,o){let{random:s}=t;for(let c=0;c<r;c++){let r=s.exponential(i);if(r>a)continue;let c=s.between(0,Math.PI*2),l=e(n.warm,n.young,Math.min(1,r*1.3));t.light.add(r*Math.cos(c),s.normal()*.018,r*Math.sin(c),l,o*.75,.006)}}function ue(e,t){let{random:r}=e,o=e=>.018+.045*e;B(e,t*.008,[0,0,0],[.01,.007,.01],()=>[n.white,.5,.006],!0),B(e,t*.09,[0,0,0],[.06,.04,.06],U(1),!0),q(e,30,[0,0,0],.03,n.warm,.035,.3),Y(e,t*.2,.3,1.2,.07);for(let n=0;n<t*.38;n++){let t=r.next()**.85,[i,a]=V(`blogs`,n%2,t,r.normal()*o(t),r.normal()*o(t)*.6),[s,c,l]=H(1.25-.55*t)(r);e.light.add(i,r.normal()*.015,a,s,c,l)}G(e,`blogs`,t*.13,1,o),J(e,t*.035,.26,1.1,.01),W(e,`blogs`,90,.12,.98,o),K(e,`blogs`,t*.09,.95,o);let[s,c]=a(`blogs`,1,1),l=[s*1.2,.04,c*1.2];B(e,t*.004,l,[.01,.008,.01],()=>[n.white,.8,.006],!0),B(e,t*.045,l,[.05,.04,.045],U(1),!0),q(e,10,l,.02,n.warm,.04,.15);for(let i=0;i<t*.012;i++){let t=r.between(.86,1),i=(t-.86)/.14,[a,o]=V(`blogs`,1,t,r.normal()*.04,r.normal()*.03),s=[a+(l[0]-a)*i*.6,l[1]*i,o+(l[2]-o)*i*.6];e.light.add(s[0],s[1]+r.normal()*.01,s[2],n.warm,.06,.006)}for(let n=0;n<t*.003;n++)e.dust.add(l[0]+r.normal()*.035,.05,l[2]+r.normal()*.008,i,.2,.025);for(let n=0;n<t*.006;n++){let t=r.between(0,Math.PI*2),n=r.between(.05,.12);e.dust.add(n*Math.cos(t),0,n*Math.sin(t),i,.12,.02)}}function de(e,t){let{random:r}=e,a=e=>.02+.06*e;B(e,t*.008,[0,0,0],[.01,.007,.01],()=>[n.white,.5,.006],!0),B(e,t*.05,[0,0,0],[.045,.03,.045],U(1),!0),q(e,24,[0,0,0],.02,n.warm,.05,.22);for(let a=0;a<t*.012;a++){let t=r.next(),o=a%2*Math.PI+t*3*Math.PI,s=.012+.05*t,c=r.normal()*.004;e.light.add((s+c)*Math.cos(o),0,(s+c)*Math.sin(o),n.white,.25,.005),a%4==0&&e.dust.add((s-.006)*Math.cos(o-.3),0,(s-.006)*Math.sin(o-.3),i,.05,.022)}for(let n=0;n<t*.17;n++){let t=(r.next()+r.next()+r.next()-1.5)/1.5*.44,n=1-.5*Math.abs(t)/.44,[i,a]=U(.9)(r);e.light.add(t,r.normal()*.02,r.normal()*.045*n,i,a,.0065)}for(let n of[-1,1])B(e,t*.0075,[n*.4,0,0],[.03,.015,.025],U(.6));for(let n=0;n<t*.022;n++){let t=(n%2?1:-1)*r.between(.07,.42),a=Math.abs(t)/.42,o=Math.sign(t)*(.035+.045*a**2),s=r.between(.012,.03)*Math.min(1,(Math.abs(t)-.05)/.1);e.dust.add(t,r.normal()*.006,o+r.normal()*.026,i,s,r.between(.06,.11))}Y(e,t*.1,.22,1,.05);for(let n=0;n<t*.36;n++){let t=r.next()*1.08,[i,o]=V(`papers`,n%2,t,r.normal()*a(t),r.normal()*a(t)*.6),[s,c,l]=H(1.2-.5*Math.min(1,t))(r);e.light.add(i,r.normal()*.015,o,s,c*(t>1?.5:1),l)}G(e,`papers`,t*.11,1.05,a),J(e,t*.025,.3,1.1,.008),W(e,`papers`,60,.1,1,a),K(e,`papers`,t*.07,1,a);for(let i=0;i<t*.06;i++){let t=.5+r.exponential(.25);if(t>1.3)continue;let i=r.between(0,Math.PI*2);e.light.add(t*Math.cos(i),r.normal()*.02,t*Math.sin(i),n.young,.03,.006)}}function fe(t,r){let{random:a}=t;B(t,r*.008,[0,0,0],[.012,.012,.012],()=>[n.white,.45,.006],!0),B(t,r*.24,[0,0,0],[.07,.066,.07],t=>[e(n.old,n.warm,t.next()*.7),.16,.007],!0),q(t,25,[0,0,0],.035,n.old,.035,.26);for(let e=0;e<r*.012;e++){let e=a.between(.25,.62),r=a.between(0,Math.PI*2);t.light.add(e*Math.cos(r),a.normal()*.03,e*Math.sin(r),n.warm,.04,.006)}let o=Array.from({length:70},()=>({angle:a.between(0,Math.PI*2),shift:a.normal()*.02}));for(let e=0;e<r*.42;e++){let r=a.next()<.7?o[e%o.length]:null,i=r?r.angle+a.normal()*.022:a.between(0,Math.PI*2),s=.74+(r?r.shift:0)+a.normal()*.026,c=a.next()<.1?[n.warm,.1,.0058]:H(1.1)(a);t.light.add(s*Math.cos(i),a.normal()*.018,s*Math.sin(i),c[0],c[1],c[2])}for(let r=0;r<20;r++){let r=a.between(0,Math.PI*2),i=[.74*Math.cos(r),0,.74*Math.sin(r)];B(t,20+Math.floor(a.next()*20),i,[.012,.006,.012],t=>[e(n.rose,n.hydrogen,t.next()),.3,.0055])}for(let i=0;i<r*.04;i++){let r=a.between(0,Math.PI*2),i=.74+a.normal()*.04;t.light.add(i*Math.cos(r),a.normal()*.01,i*Math.sin(r),e(n.young,n.violet,a.next()*.3),.03,a.between(.04,.085))}for(let e=0;e<r*.025;e++){let e=a.between(0,Math.PI*2),r=.95+a.normal()*.04;t.light.add(r*Math.cos(e),a.normal()*.02,r*Math.sin(e),n.young,.03,.006)}for(let e=0;e<r*.02;e++){let e=a.between(0,Math.PI*2),n=.68+a.normal()*.015;t.dust.add(n*Math.cos(e),0,n*Math.sin(e),i,.12,a.between(.02,.035))}}function pe(t,r){let{random:a}=t,s=.6,c=(e,t)=>[e*Math.cos(s)-t*Math.sin(s),e*Math.sin(s)+t*Math.cos(s)];for(let i=0;i<r*.36;i++){let[r,i]=c(a.normal()*.42,a.normal()*.18);t.light.add(r,a.normal()*.14,i,e(n.warm,n.white,a.next()),.07,.0065)}for(let[i,a]of o)B(t,r*.07,[i,0,a],[.085,.06,.085],H(1.15)),B(t,r*.006,[i,0,a],[.07,.05,.07],t=>[e(n.young,n.violet,t.next()*.4),.022,t.between(.04,.07)]);B(t,r*.08,[.55,.02,-.42],[.16,.08,.1],H(.75));for(let e=0;e<40;e++){let[e,r]=c(a.normal()*.4,a.normal()*.16);B(t,12+Math.floor(a.next()*12),[e,a.normal()*.05,r],[.006,.006,.006],()=>[n.hot,.5,.006])}for(let i=0;i<r*.03;i++){let[r,i]=c(a.normal()*.45,a.normal()*.2);t.light.add(r,a.normal()*.1,i,e(n.young,n.violet,a.next()),.008,a.between(.06,.12))}let l=[o[3][0]-.04,.02,o[3][1]+.02];B(t,r*.03,l,[.035,.025,.035],t=>[e(n.hydrogen,n.rose,t.next()),.3,.0055]),B(t,300,l,[.008,.008,.008],()=>[n.hot,.7,.006]),q(t,40,l,.03,n.hydrogen,.06,.08);for(let r=0;r<22;r++){let[r,i]=c(a.normal()*.4,a.normal()*.16);B(t,15+Math.floor(a.next()*15),[r,a.normal()*.05,i],[.012,.008,.012],t=>[e(n.hydrogen,n.rose,t.next()),.28,.0055])}let u=[-.78,.12,.42];B(t,r*.035,u,[.014,.014,.014],t=>[e(n.warm,n.white,t.next()),.4,.005],!0),q(t,6,u,.01,n.warm,.06,.06),B(t,r*.008,[.62,-.04,-.58],[.01,.01,.01],()=>[n.warm,.35,.005],!0);for(let e=0;e<r*.015;e++){let[e,n]=c(a.normal()*.38,a.normal()*.16);t.dust.add(e,a.normal()*.06,n,i,a.between(.06,.14),a.between(.03,.06))}}var me={blogs:ue,papers:de,photos:fe,moments:pe};function he(e,n){let i=t(le[e]),a={light:r({starSize:.72,starGain:1.45}),dust:r(),random:i};return me[e](a,Math.max(2e3,Math.round(n))),{light:a.light.build(i),dust:a.dust.build(i)}}function ge(e=w){let{x:t,y:n,z:r}=E(e);return{center:e.center,scale:e.radius/14,toLocal:new Float32Array([t[0],n[0],r[0],t[1],n[1],r[1],t[2],n[2],r[2]])}}function _e(e){let[t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g]=e,_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(Math.abs(k)<1e-12)return null;let A=1/k;return new Float32Array([(o*O-s*D+c*E)*A,(r*D-n*O-i*E)*A,(m*S-h*x+g*b)*A,(d*x-u*S-f*b)*A,(s*T-a*O-c*w)*A,(t*O-r*T+i*w)*A,(h*y-p*S-g*v)*A,(l*S-d*y+f*v)*A,(a*D-o*T+c*C)*A,(n*T-t*D-i*C)*A,(p*x-m*y+g*_)*A,(u*y-l*x-f*_)*A,(o*w-a*E-s*C)*A,(t*E-n*w+r*C)*A,(m*v-p*b-h*_)*A,(l*b-u*v+d*_)*A])}function ve(e){let t=e.maxRatio,n=1,r=0,i=0;return{get maxRatio(){return t},tick(a,o){o&&(a>1/38?r++:a<1/57&&i++,r>45?(r=0,i=0,t>1?(t=1,e.onRatioChange()):n>.35&&(n*=.8,e.onDetailChange(n))):i>240&&(r=0,i=0,n<1&&(n=Math.min(1,n*1.1),e.onDetailChange(n))))}}}var ye={blogs:17e4,papers:14e4,photos:9e4,moments:1e5},be=11e4,X=new Map,xe=e=>{let t=X.get(e.id);return t&&t.budget>=e.budget*.98?t.model:null};function Se(e){let{small:t,progress:n,onBuilt:r,only:i,share:a=1}=e,o=[{id:`backdrop`,kind:`backdrop`,budget:be*(t?.6:1)}],s=C.map((e,t)=>t).sort((e,t)=>Math.abs(e-n)-Math.abs(t-n));for(let e of s){let{kind:n}=C[e];i&&!i.includes(n)||o.push({id:n,kind:n,budget:ye[n]*(t?.5:1)*a})}let c=new Set(o.map(e=>e.id)),l=new Map(o.map(e=>[e.id,e])),u=(e,t=!1)=>{let n=l.get(e.id);n&&!t&&(X.get(e.id)?.budget??0)<n.budget&&X.set(e.id,{budget:n.budget,model:e}),c.delete(e.id)&&r(e,t)};for(let e of o){let t=xe(e);t&&u(t,!0)}if(o=o.filter(e=>c.has(e.id)),!o.length)return{busy:!1,stop(){}};let d=0,f=()=>{let e=o.find(e=>c.has(e.id));e&&(e.kind===`backdrop`?u({id:e.id,light:ce(e.budget)}):u({id:e.id,...he(e.kind,e.budget)}),d=window.setTimeout(f,16))},p=null;try{p=new Worker(new URL(`/_astro/model-worker-BmN0PJT-.js`,``+import.meta.url),{type:`module`}),p.onmessage=e=>u(e.data),p.onerror=()=>{p?.terminate(),p=null,f()};for(let e of o)p.postMessage(e)}catch{p=null,d=window.setTimeout(f,0)}return{get busy(){return c.size>0},stop(){window.clearTimeout(d),c.clear(),p?.terminate()}}}var Z=`#version 300 es
out vec2 v_uv;
void main() {
  vec2 p = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2));
  v_uv = p;
  gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0);
}`;function Q(e,t,n){let r=e.createProgram();for(let[i,a]of[[e.VERTEX_SHADER,t],[e.FRAGMENT_SHADER,n]]){let t=e.createShader(i);if(!t)throw Error(`shader`);if(e.shaderSource(t,a),e.compileShader(t),!e.getShaderParameter(t,e.COMPILE_STATUS))throw Error(e.getShaderInfoLog(t)??`shader`);e.attachShader(r,t)}if(e.linkProgram(r),!e.getProgramParameter(r,e.LINK_STATUS))throw Error(e.getProgramInfoLog(r)??`link`);let i=new Map;return{program:r,uniform:t=>(i.has(t)||i.set(t,e.getUniformLocation(r,t)),i.get(t)??null)}}function Ce(e,t,n,r){let i=e.createTexture();e.bindTexture(e.TEXTURE_2D,i),e.texImage2D(e.TEXTURE_2D,0,t?e.RGBA16F:e.RGBA8,n,r,0,e.RGBA,t?e.HALF_FLOAT:e.UNSIGNED_BYTE,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE);let a=e.createFramebuffer();return e.bindFramebuffer(e.FRAMEBUFFER,a),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,i,0),{framebuffer:a,texture:i,width:n,height:r}}function $(e,t){t&&(e.deleteFramebuffer(t.framebuffer),e.deleteTexture(t.texture))}var we=`#version 300 es
precision highp float;
in vec2 v_uv;
uniform sampler2D u_scene;
uniform mat4 u_viewProjection;
uniform mat4 u_inverseViewProjection;
uniform mat3 u_toLocal;
uniform vec3 u_eye;
uniform vec3 u_center;
uniform float u_scale;
uniform float u_time;
uniform float u_alpha;
out vec4 outColor;

const float BOUND = 20.0;
const float R_IN = 2.6;
const float R_OUT = 14.0;
const float FLOW_PERIOD = 6.0;

float hash3(vec3 p) {
  p = fract(p * 0.3183099 + 0.1);
  p *= 17.0;
  return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
}

float noise3(vec3 x) {
  vec3 i = floor(x);
  vec3 f = fract(x);
  f = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(mix(hash3(i), hash3(i + vec3(1, 0, 0)), f.x), mix(hash3(i + vec3(0, 1, 0)), hash3(i + vec3(1, 1, 0)), f.x), f.y),
    mix(mix(hash3(i + vec3(0, 0, 1)), hash3(i + vec3(1, 0, 1)), f.x), mix(hash3(i + vec3(0, 1, 1)), hash3(i + vec3(1, 1, 1)), f.x), f.y),
    f.z);
}

float fbm(vec3 p) {
  float value = 0.0;
  float amplitude = 0.5;
  for (int i = 0; i < 4; i++) {
    value += amplitude * noise3(p);
    p = p * 2.03 + vec3(1.7, 9.2, 3.1);
    amplitude *= 0.5;
  }
  return value;
}

// Emission (rgb, already weighted) and opacity of the disk where a ray crosses it.
vec4 disk(vec3 p, vec3 dir) {
  float r = length(p.xz);
  // Keplerian flow: the inner edge laps the hole in about four seconds, the outer gas drifts behind.
  // Two texture layers advance in turn and cross-fade, so the shear never winds the streaks
  // into ever finer stripes, however long the page stays open.
  float theta = atan(p.z, p.x);
  float sweep = FLOW_PERIOD * 6.5 / pow(r, 1.5);
  float phase = fract(u_time / FLOW_PERIOD);
  float weight = 1.0 - abs(2.0 * phase - 1.0);
  float a1 = theta - sweep * phase;
  float a2 = theta - sweep * fract(phase + 0.5) + 2.1;
  float streaks = mix(
    fbm(vec3(cos(a2) * 2.2, sin(a2) * 2.2, r * 3.2 + 5.0)),
    fbm(vec3(cos(a1) * 2.2, sin(a1) * 2.2, r * 3.2)),
    weight);
  float fine = mix(
    noise3(vec3(cos(a2) * 7.0, sin(a2) * 7.0, r * 12.0 + 3.0)),
    noise3(vec3(cos(a1) * 7.0, sin(a1) * 7.0, r * 12.0)),
    weight);
  // Cross-fading two layers flattens the contrast a little; win it back.
  streaks = clamp((streaks - 0.5) * 1.45 + 0.5, 0.0, 1.0);
  float t = clamp((r - R_IN) / (R_OUT - R_IN), 0.0, 1.0);
  float profile = smoothstep(R_IN * 0.96, R_IN * 1.25, r) * (1.0 - smoothstep(0.5, 1.0, t)) * pow(R_IN / r, 1.5);
  // Slowly boiling turbulence on top of the flow, so the gas never looks like a turning picture.
  float boil = noise3(vec3(cos(theta) * 3.0, sin(theta) * 3.0, r * 2.0 + u_time * 0.9));
  float density = profile * (0.3 + 1.2 * streaks * (0.65 + 0.7 * fine)) * (0.82 + 0.36 * boil);
  // White-hot at the inner edge, cooling to silver and graphite at the rim.
  vec3 color = mix(vec3(1.0, 0.99, 0.97), vec3(0.92), smoothstep(0.0, 0.3, t));
  color = mix(color, vec3(0.55), smoothstep(0.28, 0.9, t));
  // Relativistic beaming: the side of the disk moving towards us is brighter, and Doppler-shifted
  // bluer; the receding side dims and turns pinker.
  vec3 orbit = normalize(vec3(-p.z, 0.0, p.x));
  float beta = clamp(0.62 / sqrt(r), 0.0, 0.6);
  float g = sqrt(1.0 - beta * beta) / (1.0 - beta * dot(orbit, -dir));
  float beaming = mix(1.0, g * g * g, 0.6);
  float shift = clamp((g - 1.0) * 1.4, -1.0, 1.0);
  color = mix(color, shift > 0.0 ? vec3(1.0) : vec3(0.45), abs(shift) * 0.55);
  return vec4(color * density * 1.25 * beaming, clamp(density * 1.8, 0.0, 0.97));
}

// The smooth space gradient the scene is painted on (SKY_FRAGMENT in renderer.ts, keep in step).
vec3 space(vec2 uv) {
  vec2 c = uv - 0.5;
  return mix(vec3(0.002), vec3(0.006), uv.y) + vec3(0.004) * exp(-dot(c, c) * 3.0);
}

vec3 sky(vec3 direction) {
  // Rays bent off screen (or behind us) see the rendered sky mirrored back in at the edges, so the
  // lensed region keeps the scene's own stars instead of a synthetic field. Only what lies on top
  // of the smooth space gradient is bent: the gradient is laid back down at the pixel's own place,
  // so the lens cannot drag the brighter middle of the sky outwards into a glowing disc.
  vec4 clip = u_viewProjection * vec4(u_eye + direction * 900.0, 1.0);
  if (clip.w <= 0.0) clip = u_viewProjection * vec4(u_eye - direction * 900.0, 1.0);
  vec2 uv = clip.xy / max(clip.w, 1e-4) * 0.5 + 0.5;
  uv = 1.0 - abs(1.0 - mod(uv, 2.0));
  return max(texture(u_scene, uv).rgb - space(uv), 0.0) + space(v_uv);
}

void main() {
  vec4 farPoint = u_inverseViewProjection * vec4(v_uv * 2.0 - 1.0, 1.0, 1.0);
  vec3 direction = normalize(farPoint.xyz / farPoint.w - u_eye);
  vec3 pos = u_toLocal * ((u_eye - u_center) / u_scale);
  vec3 vel = normalize(u_toLocal * direction);
  float b = dot(pos, vel);
  float disc = b * b - (dot(pos, pos) - BOUND * BOUND);
  if (disc < 0.0 || -b + sqrt(disc) < 0.0) {
    outColor = vec4(0.0);
    return;
  }
  pos += vel * max(0.0, -b - sqrt(disc));
  vec3 momentum = cross(pos, vel);
  float h2 = dot(momentum, momentum);
  vec3 color = vec3(0.0);
  float alpha = 0.0;
  bool escaped = false;
  int crossings = 0;
  for (int i = 0; i < 220; i++) {
    float r2 = dot(pos, pos);
    if (r2 < 1.0) break;
    if (r2 > BOUND * BOUND * 1.01 && dot(pos, vel) > 0.0) {
      escaped = true;
      break;
    }
    float r = sqrt(r2);
    float dt = clamp(0.08 * (r - 0.9) * r, 0.012, 0.9);
    vec3 previous = pos;
    vel += -1.5 * h2 * pos / (r2 * r2 * r) * dt;
    pos += vel * dt;
    if (previous.y * pos.y < 0.0) {
      vec3 hit = mix(previous, pos, previous.y / (previous.y - pos.y));
      float rr = length(hit.xz);
      crossings++;
      if (rr > R_IN * 0.9 && rr < R_OUT) {
        vec4 emission = disk(hit, normalize(vel));
        // The direct image and the first lensed one (arching over and under the shadow) are drawn
        // in full; light that loops the hole again forms the photon ring, a hairline far too thin
        // for this resolution that would break into dots, so it only adds a faint glow.
        if (crossings > 2) emission *= 0.12;
        // Rays skimming the photon sphere draw their second image as a hairline round the shadow,
        // too thin for this resolution: it would break into dashes, so it thins out to nothing.
        if (crossings > 1) emission *= smoothstep(2.62, 3.05, sqrt(h2));
        color += (1.0 - alpha) * emission.rgb;
        alpha += (1.0 - alpha) * emission.a;
        if (alpha > 0.985) break;
      }
    }
  }
  // Only rays that really got away see the sky. Rays still circling the photon sphere when the
  // step budget runs out stay dark: sampling the sky along their last heading would scatter random
  // stars into a dotted ring round the shadow. Just outside the shadow the whole sky is squeezed
  // into a sliver, so there it is dimmed a little rather than crowding into bright specks.
  float clear = smoothstep(2.62, 3.4, sqrt(h2));
  // Far from the hole real light is still bent, and cutting the bend off at the bounding sphere
  // would leave a seam: a circle where the shifted sky meets the unshifted one. So the bend itself
  // tapers away with distance, easing the lensed view into the plain scene until, at the edge, the
  // two are the same and there is nothing to see.
  float reach = 1.0 - smoothstep(BOUND * 0.18, BOUND * 0.92, sqrt(h2));
  vec3 bent = normalize(mix(direction, normalize(transpose(u_toLocal) * vel), reach * reach * (3.0 - 2.0 * reach)));
  vec3 background = escaped ? sky(bent) * mix(0.3, 1.0, clear) : vec3(0.0);
  // How much the lensed view replaces the plain scene follows how far the ray was actually bent,
  // measured in screen pixels: where the bend is under a pixel the untouched full-resolution
  // scene shows, and the lensing grows in smoothly from there. There is no edge to see; the
  // bounding sphere only trims what is already invisible.
  float bend = 1.0;
  if (escaped) {
    vec4 clip = u_viewProjection * vec4(u_eye + bent * 900.0, 1.0);
    vec2 landed = clip.w > 0.0 ? clip.xy / clip.w * 0.5 + 0.5 : vec2(-9.0);
    float pixels = length((landed - v_uv) * vec2(textureSize(u_scene, 0)));
    bend = smoothstep(0.5, 14.0, pixels);
  }
  float cover = (1.0 - smoothstep(BOUND * 0.8, BOUND * 0.98, sqrt(h2))) * max(alpha, bend);
  outColor = vec4(color + (1.0 - alpha) * background, cover * u_alpha);
}`,Te=`#version 300 es
precision highp float;
in vec2 v_uv;
uniform sampler2D u_scene;
uniform sampler2D u_hole;
out vec4 outColor;
void main() {
  vec4 hole = texture(u_hole, v_uv);
  outColor = vec4(mix(texture(u_scene, v_uv).rgb, hole.rgb, hole.a), 1.0);
}`;function Ee(e,t){let n,r;try{n=Q(e,Z,we),r=Q(e,Z,Te)}catch{return null}let i=null;return{resize(n,r){$(e,i),i=Ce(e,t,Math.max(1,Math.floor(n/2)),Math.max(1,Math.floor(r/2)))},draw(t,a,o,s){i&&(e.bindVertexArray(s),e.bindFramebuffer(e.FRAMEBUFFER,i.framebuffer),e.viewport(0,0,i.width,i.height),e.useProgram(n.program),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,t.texture),e.uniform1i(n.uniform(`u_scene`),0),e.uniformMatrix4fv(n.uniform(`u_viewProjection`),!1,o.viewProjection),e.uniformMatrix4fv(n.uniform(`u_inverseViewProjection`),!1,o.inverseViewProjection),e.uniformMatrix3fv(n.uniform(`u_toLocal`),!1,o.toLocal),e.uniform3f(n.uniform(`u_eye`),o.eye[0],o.eye[1],o.eye[2]),e.uniform3f(n.uniform(`u_center`),o.center[0],o.center[1],o.center[2]),e.uniform1f(n.uniform(`u_scale`),o.scale),e.uniform1f(n.uniform(`u_time`),o.time),e.uniform1f(n.uniform(`u_alpha`),o.alpha),e.drawArrays(e.TRIANGLES,0,3),e.bindFramebuffer(e.FRAMEBUFFER,a.framebuffer),e.viewport(0,0,a.width,a.height),e.useProgram(r.program),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,t.texture),e.uniform1i(r.uniform(`u_scene`),0),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,i.texture),e.uniform1i(r.uniform(`u_hole`),1),e.drawArrays(e.TRIANGLES,0,3),e.activeTexture(e.TEXTURE0))},destroy(){$(e,i),i=null}}}var De=`#version 300 es
layout(location = 0) in vec3 a_polar;
layout(location = 1) in vec3 a_color;
layout(location = 2) in float a_size;
layout(location = 3) in float a_phase;
uniform mat4 u_model;
uniform mat4 u_view;
uniform mat4 u_projection;
uniform float u_spin;
uniform float u_time;
uniform float u_wobble;
uniform float u_pixels;
uniform float u_scale;
uniform float u_alpha;
uniform vec2 u_sizeRange;
uniform vec2 u_soft;
out vec3 v_color;
out float v_soft;
void main() {
  float r = a_polar.x;
  float theta = a_polar.y + u_spin + u_wobble * sin(u_time * 0.35 + a_phase * 6.2832) / (0.6 + r * 3.0);
  vec4 view = u_view * (u_model * vec4(r * cos(theta), a_polar.z, r * sin(theta), 1.0));
  gl_Position = u_projection * view;
  float depth = -view.z;
  if (depth < 0.05) {
    gl_PointSize = 0.0;
    v_color = vec3(0.0);
    v_soft = 0.0;
    return;
  }
  v_soft = smoothstep(u_soft.x, u_soft.y, a_size);
  // Scintillation: about 40% of stars flicker, each at its own uneven rhythm (two detuned waves),
  // the strongest dipping almost to nothing. Soft puffs of gas stay steady.
  float twinkle = 1.0;
  float pick = fract(a_phase * 13.7);
  if (pick > 0.6) {
    float speed = 1.4 + fract(a_phase * 7.31) * 5.0;
    float wave = 0.6 * sin(u_time * speed + a_phase * 50.0) + 0.4 * sin(u_time * speed * 1.73 + a_phase * 91.0);
    float strength = 0.35 + 0.6 * (pick - 0.6) / 0.4;
    twinkle = mix(max(0.04, 1.0 + wave * strength), 1.0, v_soft);
  }
  float px = a_size * u_scale * u_pixels / depth;
  float size = clamp(px, u_sizeRange.x, u_sizeRange.y);
  // Sub-pixel stars keep their light by dimming; huge sprites right next to the camera fade away.
  float energy = px < size ? (px * px) / (size * size) : size / px;
  float near = smoothstep(0.4, 3.0, depth);
  v_color = a_color * energy * twinkle * near * u_alpha;
  gl_PointSize = size;
}`,Oe=`#version 300 es
precision highp float;
in vec3 v_color;
in float v_soft;
uniform float u_spikes;
out vec4 outColor;
void main() {
  vec2 p = gl_PointCoord * 2.0 - 1.0;
  float d2 = dot(p, p);
  if (d2 > 1.0) discard;
  // Background stars are sharper points, and the larger (brighter) ones carry the faint cross of
  // diffraction spikes a telescope gives them.
  float star = exp(-d2 * mix(7.0, 20.0, u_spikes)) + mix(0.12, 0.06, u_spikes) * exp(-d2 * 2.2);
  vec2 a = abs(p);
  star += u_spikes * 0.3 * (exp(-a.y * 38.0) * (1.0 - a.x) + exp(-a.x * 38.0) * (1.0 - a.y));
  float puff = exp(-d2 * 3.0) * (1.0 - d2);
  outColor = vec4(v_color * mix(star, puff, v_soft), 1.0);
}`,ke=`#version 300 es
precision highp float;
in vec2 v_uv;
uniform sampler2D u_source;
uniform vec2 u_texel;
uniform float u_threshold;
out vec4 outColor;
vec3 tap(vec2 uv) { return texture(u_source, uv).rgb; }
void main() {
  vec3 c = tap(v_uv) * 4.0 + tap(v_uv - u_texel) + tap(v_uv + u_texel)
    + tap(v_uv + vec2(u_texel.x, -u_texel.y)) + tap(v_uv + vec2(-u_texel.x, u_texel.y));
  c /= 8.0;
  if (u_threshold > 0.0) {
    float bright = max(c.r, max(c.g, c.b));
    float knee = clamp(bright - u_threshold + 0.5, 0.0, 1.0);
    c *= max(knee * knee * 0.5, bright - u_threshold) / max(bright, 1e-4);
  }
  outColor = vec4(c, 1.0);
}`,Ae=`#version 300 es
precision highp float;
in vec2 v_uv;
uniform sampler2D u_source;
uniform vec2 u_texel;
out vec4 outColor;
void main() {
  vec2 h = u_texel;
  vec3 c = texture(u_source, v_uv + vec2(-h.x * 2.0, 0.0)).rgb + texture(u_source, v_uv + vec2(h.x * 2.0, 0.0)).rgb
    + texture(u_source, v_uv + vec2(0.0, -h.y * 2.0)).rgb + texture(u_source, v_uv + vec2(0.0, h.y * 2.0)).rgb
    + (texture(u_source, v_uv + vec2(-h.x, h.y)).rgb + texture(u_source, v_uv + vec2(h.x, h.y)).rgb
    + texture(u_source, v_uv + vec2(h.x, -h.y)).rgb + texture(u_source, v_uv + vec2(-h.x, -h.y)).rgb) * 2.0;
  outColor = vec4(c / 12.0, 1.0);
}`,je=`#version 300 es
precision highp float;
in vec2 v_uv;
out vec4 outColor;
void main() {
  vec2 c = v_uv - 0.5;
  vec3 space = mix(vec3(0.002), vec3(0.006), v_uv.y) + vec3(0.004) * exp(-dot(c, c) * 3.0);
  outColor = vec4(space, 1.0);
}`,Me=`#version 300 es
precision highp float;
in vec2 v_uv;
uniform sampler2D u_scene;
uniform sampler2D u_bloom;
uniform float u_exposure;
uniform float u_bloomStrength;
uniform float u_time;
out vec4 outColor;
vec3 aces(vec3 x) {
  return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0);
}
float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
void main() {
  vec2 c = v_uv - 0.5;
  vec3 hdr = texture(u_scene, v_uv).rgb + texture(u_bloom, v_uv).rgb * u_bloomStrength;
  vec3 mapped = aces(hdr * u_exposure);
  // Monochrome scene: brightness carries structure, colour is dropped entirely.
  mapped = max(vec3(dot(mapped, vec3(0.2126, 0.7152, 0.0722))), 0.0);
  vec3 color = pow(mapped, vec3(1.0 / 2.2));
  color *= 1.0 - dot(c, c) * 0.6;
  color += (hash(gl_FragCoord.xy + fract(u_time) * 97.0) - 0.5) / 255.0;
  outColor = vec4(color, 1.0);
}`,Ne=5;function Pe(e){let t=e.getContext(`webgl2`,{antialias:!1,alpha:!1,premultipliedAlpha:!1,powerPreference:`high-performance`});if(!t)return null;let n=t,r,i,a,o,s;try{r=Q(n,De,Oe),i=Q(n,Z,ke),a=Q(n,Z,Ae),o=Q(n,Z,Me),s=Q(n,Z,je)}catch{return null}let c=!!n.getExtension(`EXT_color_buffer_float`),l=n.getParameter(n.ALIASED_POINT_SIZE_RANGE)[1]??64,u=n.createVertexArray(),d=new Map,f=Ee(n,c),p=null,m=null,h=[],g=1,_=1,v=(e,t)=>Ce(n,c,e,t);function y(){for(let e of[p,m,...h])$(n,e);p=null,m=null,h=[]}function b(e,t,r,i,a){n.bindFramebuffer(n.FRAMEBUFFER,t?.framebuffer??null),n.viewport(0,0,t?.width??n.drawingBufferWidth,t?.height??n.drawingBufferHeight),n.useProgram(e.program),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,r.texture),n.uniform1i(e.uniform(`u_source`),0),n.uniform2f(e.uniform(`u_texel`),1/i.width,1/i.height),a?.(),n.bindVertexArray(u),n.drawArrays(n.TRIANGLES,0,3)}return{upload(e,t){let r=n.createVertexArray();n.bindVertexArray(r);let i=[t.polar,t.color,t.size,t.phase].map((e,t)=>{let r=n.createBuffer();return n.bindBuffer(n.ARRAY_BUFFER,r),n.bufferData(n.ARRAY_BUFFER,e,n.STATIC_DRAW),n.enableVertexAttribArray(t),n.vertexAttribPointer(t,t<2?3:1,n.FLOAT,!1,0,0),r});n.bindVertexArray(null);let a=d.get(e);if(a){n.deleteVertexArray(a.vao);for(let e of a.buffers)n.deleteBuffer(e)}d.set(e,{vao:r,buffers:i,count:t.count})},resize(t,n,r){g=r;let i=Math.max(1,Math.round(t*r)),a=Math.max(1,Math.round(n*r));if(e.width===i&&e.height===a&&p)return;e.width=i,e.height=a,y(),p=v(i,a),m=v(i,a),f?.resize(i,a);let o=i,s=a;for(let e=0;e<Ne;e++)o=Math.max(1,Math.floor(o/2)),s=Math.max(1,Math.floor(s/2)),h.push(v(o,s))},setDetail(e){_=Math.min(1,Math.max(.15,e))},render(e){if(!p||n.isContextLost())return;n.bindFramebuffer(n.FRAMEBUFFER,p.framebuffer),n.viewport(0,0,p.width,p.height),n.useProgram(s.program),n.bindVertexArray(u),n.drawArrays(n.TRIANGLES,0,3),n.enable(n.BLEND),n.useProgram(r.program);let t=r.uniform;n.uniformMatrix4fv(t(`u_view`),!1,e.view),n.uniformMatrix4fv(t(`u_projection`),!1,e.projection),n.uniform1f(t(`u_time`),e.time),n.uniform1f(t(`u_pixels`),p.height/(2*Math.tan(e.fieldOfView/2))),n.uniform2f(t(`u_sizeRange`),Math.max(1,g),Math.min(l,64*g));for(let r of e.layers){let e=d.get(r.mesh);!e||r.alpha<=.001||(r.dust?n.blendFunc(n.ZERO,n.ONE_MINUS_SRC_COLOR):n.blendFunc(n.ONE,n.ONE),n.uniformMatrix4fv(t(`u_model`),!1,r.model),n.uniform1f(t(`u_scale`),r.modelScale),n.uniform1f(t(`u_spin`),r.spin),n.uniform1f(t(`u_wobble`),r.wobble),n.uniform1f(t(`u_alpha`),r.alpha),n.uniform2f(t(`u_soft`),r.soft[0],r.soft[1]),n.uniform1f(t(`u_spikes`),r.spikes??0),n.bindVertexArray(e.vao),n.drawArrays(n.POINTS,0,Math.floor(e.count*_)))}n.disable(n.BLEND);let v=p;e.blackHole&&f&&m&&(f.draw(p,m,e.blackHole,u),v=m),b(i,h[0],v,v,()=>n.uniform1f(i.uniform(`u_threshold`),1.1));for(let e=1;e<h.length;e++)b(i,h[e],h[e-1],h[e-1],()=>n.uniform1f(i.uniform(`u_threshold`),0));n.enable(n.BLEND),n.blendFunc(n.ONE,n.ONE);for(let e=h.length-1;e>0;e--)b(a,h[e-1],h[e],h[e]);n.disable(n.BLEND),n.bindFramebuffer(n.FRAMEBUFFER,null),n.viewport(0,0,n.drawingBufferWidth,n.drawingBufferHeight),n.useProgram(o.program),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,v.texture),n.uniform1i(o.uniform(`u_scene`),0),n.activeTexture(n.TEXTURE1),n.bindTexture(n.TEXTURE_2D,h[0].texture),n.uniform1i(o.uniform(`u_bloom`),1),n.uniform1f(o.uniform(`u_exposure`),e.exposure),n.uniform1f(o.uniform(`u_bloomStrength`),c?.7:.45),n.uniform1f(o.uniform(`u_time`),e.time),n.bindVertexArray(u),n.drawArrays(n.TRIANGLES,0,3)},destroy(){y(),f?.destroy();for(let e of d.values()){n.deleteVertexArray(e.vao);for(let t of e.buffers)n.deleteBuffer(t)}d.clear(),n.getExtension(`WEBGL_lose_context`)?.loseContext()}}}export{u as _,_e as a,T as c,k as d,A as f,oe as g,re as h,ge as i,ne as l,ae as m,Se as n,f as o,ie as p,ve as r,C as s,Pe as t,D as u,l as v};