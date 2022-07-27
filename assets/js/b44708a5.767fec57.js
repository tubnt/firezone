"use strict";(self.webpackChunknew_docs=self.webpackChunknew_docs||[]).push([[6794],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),f=l(t),d=o,y=f["".concat(c,".").concat(d)]||f[d]||u[d]||a;return t?r.createElement(y,i(i({ref:n},s),{},{components:t})):r.createElement(y,i({ref:n},s))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},1566:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return u}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],p={title:"HAProxy",sidebar_position:3},c=void 0,l={unversionedId:"deploy/reverse-proxies/haproxy",id:"deploy/reverse-proxies/haproxy",title:"HAProxy",description:"The following is an example configuration for the",source:"@site/docs/deploy/reverse-proxies/haproxy.md",sourceDirName:"deploy/reverse-proxies",slug:"/deploy/reverse-proxies/haproxy",permalink:"/deploy/reverse-proxies/haproxy",draft:!1,editUrl:"https://github.com/firezone/firezone/docs/deploy/reverse-proxies/haproxy.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"HAProxy",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Traefik",permalink:"/deploy/reverse-proxies/traefik"},next:{title:"Authenticate",permalink:"/authenticate/"}},s={},u=[],f={toc:u};function d(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The following is an example configuration for the\n",(0,a.kt)("a",{parentName:"p",href:"https://www.haproxy.org/"},"HAProxy")," proxy. we assume\n",(0,a.kt)("inlineCode",{parentName:"p"},"default['firezone']['phoenix']['port']")," to be ",(0,a.kt)("inlineCode",{parentName:"p"},"13000")," and the proxy running on\nthe same host as the Firezone app."),(0,a.kt)("p",null,"There is not SSL termination in this configuration so a previous proxy will\nneed to terminate the SSL connection."),(0,a.kt)("p",null,"You can also configure HAProxy to handle the SSL termination as explained\n",(0,a.kt)("a",{parentName:"p",href:"https://www.haproxy.com/blog/haproxy-ssl-termination/"},"here")," but take into\naccount that the ",(0,a.kt)("inlineCode",{parentName:"p"},"pem")," file expected by ",(0,a.kt)("inlineCode",{parentName:"p"},"ssl crt")," option needs to contain\nboth the ",(0,a.kt)("inlineCode",{parentName:"p"},"crt")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"key")," file."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"/etc/haproxy/haproxy.cfg"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-conf"},"defaults\n    mode http\n\nfrontend app1\n    bind *:80\n    option forwardfor\n    default_backend             backend_app1\n\nbackend backend_app1\n    server mybackendserver 127.0.0.1:13000\n")))}d.isMDXComponent=!0}}]);