"use strict";(self.webpackChunkfirezone_docs=self.webpackChunkfirezone_docs||[]).push([[6343],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var o=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=o.createContext({}),c=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return o.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(t),m=i,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||r;return t?o.createElement(h,a(a({ref:n},u),{},{components:t})):o.createElement(h,a({ref:n},u))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,a=new Array(r);a[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<r;c++)a[c]=t[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9709:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=t(87462),i=(t(67294),t(3905));const r={title:"Troubleshoot",sidebar_position:6,description:"Troubleshoot common connectivity and configuration issues with Firezone's WireGuard\xae-based secure access platform."},a=void 0,s={unversionedId:"administer/troubleshoot",id:"administer/troubleshoot",title:"Troubleshoot",description:"Troubleshoot common connectivity and configuration issues with Firezone's WireGuard\xae-based secure access platform.",source:"@site/docs/administer/troubleshoot.mdx",sourceDirName:"administer",slug:"/administer/troubleshoot",permalink:"/administer/troubleshoot",draft:!1,editUrl:"https://github.com/firezone/firezone/tree/master/docs/docs/administer/troubleshoot.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Troubleshoot",sidebar_position:6,description:"Troubleshoot common connectivity and configuration issues with Firezone's WireGuard\xae-based secure access platform."},sidebar:"tutorialSidebar",previous:{title:"Uninstall",permalink:"/administer/uninstall"},next:{title:"Regenerate Secret Keys",permalink:"/administer/regen-keys"}},l={},c=[{value:"Application crash loop preventing config changes",id:"application-crash-loop-preventing-config-changes",level:2},{value:"Debugging portal WebSocket connectivity issues",id:"debugging-portal-websocket-connectivity-issues",level:2},{value:"Debugging WireGuard connectivity issues",id:"debugging-wireguard-connectivity-issues",level:2},{value:"Internet connectivity drops when tunnel is active",id:"internet-connectivity-drops-when-tunnel-is-active",level:3},{value:"Admin login isn&#39;t working",id:"admin-login-isnt-working",level:2},{value:"Re-enable local authentication in CLI",id:"re-enable-local-authentication-in-cli",level:2},{value:"Need additional help?",id:"need-additional-help",level:2}],u=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",n)},p=u("Tabs"),d=u("TabItem"),m={toc:c};function h(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,o.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This guide documents common configuration and connectivity issues. For\nany problems that arise, a good first bet is to check the Firezone logs."),(0,i.kt)(p,{mdxType:"Tabs"},(0,i.kt)(d,{value:"docker",label:"Docker",default:!0,mdxType:"TabItem"},(0,i.kt)("p",null,"Each container stores logs as a JSON file on the host machine. These can be shown with the\n",(0,i.kt)("inlineCode",{parentName:"p"},"docker logs {CONTAINER}")," command. Log files are found at\n",(0,i.kt)("inlineCode",{parentName:"p"},"var/lib/docker/containers/{CONTAINER_ID}/{CONTAINER_ID}-json.log")," by default."),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"../debug-logs"},"debug logs")," for additional details.")),(0,i.kt)(d,{value:"omnibus",label:"Omnibus",mdxType:"TabItem"},(0,i.kt)("p",null,"Firezone logs are stored in ",(0,i.kt)("inlineCode",{parentName:"p"},"/var/log/firezone")," and can be viewed with\n",(0,i.kt)("inlineCode",{parentName:"p"},"sudo firezone-ctl tail"),"."))),(0,i.kt)("h2",{id:"application-crash-loop-preventing-config-changes"},"Application crash loop preventing config changes"),(0,i.kt)("p",null,"In cases where the application is crash looping because of corrupt, inaccessible, or\ninvalid data in the DB, you can try clearing the affected fields."),(0,i.kt)("p",null,"For example, to clear OIDC configs:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"psql -d firezone -h 127.0.0.1 -U postgres -c \"UPDATE configurations SET openid_connect_providers = '{}'\"\n")),(0,i.kt)("p",null,"Similarly, to clear SAML configs:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"psql -d firezone -h 127.0.0.1 -U postgres -c \"UPDATE configurations SET saml_providers = '{}'\"\n")),(0,i.kt)("h2",{id:"debugging-portal-websocket-connectivity-issues"},"Debugging portal WebSocket connectivity issues"),(0,i.kt)("p",null,"The portal UI requires a secure websocket connection to function. To facilitate\nthis, the Firezone phoenix service checks the ",(0,i.kt)("inlineCode",{parentName:"p"},"Host")," header for inbound\nwebsocket connections and only permits the connection if it matches the host\nportion of your ",(0,i.kt)("inlineCode",{parentName:"p"},"default['firezone']['external_url']")," variable."),(0,i.kt)("p",null,"If a secure websocket connection can't be established, you'll see a red dot\nindicator in the upper-right portion of the Firezone web UI and a corresponding\nmessage when you hover over it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Secure websocket not connected! ...\n")),(0,i.kt)("p",null,"If you're accessing Firezone using the same URL defined in your\n",(0,i.kt)("inlineCode",{parentName:"p"},"default['firezone']['external_url']")," variable from above, the issue is likely\nto be in your reverse proxy configuration."),(0,i.kt)("p",null,"In most cases, you'll find clues in one or more of the following locations:"),(0,i.kt)(p,{mdxType:"Tabs"},(0,i.kt)(d,{value:"omnibus",label:"Omnibus",mdxType:"TabItem"},(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Your browser's developer tool logs, specifically the ",(0,i.kt)("inlineCode",{parentName:"li"},"Network")," tab."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sudo firezone-ctl tail nginx")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sudo firezone-ctl tail phoenix"))),(0,i.kt)("p",null,"If the websocket connection is successful, you should see output in the\n",(0,i.kt)("inlineCode",{parentName:"p"},"phoenix")," service logs similar the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},'2022-09-23_15:05:47.29158 15:05:47.291 [info] CONNECTED TO Phoenix.LiveView.Socket in 24\xb5s\n2022-09-23_15:05:47.29160   Transport: :websocket\n2022-09-23_15:05:47.29160   Serializer: Phoenix.Socket.V2.JSONSerializer\n2022-09-23_15:05:47.29161   Parameters: %{"_csrf_token" => "XFEFCHQ2fRQABQwtKQdCJDlFAzEcCCJvn7LqDsMXE4eGZtsBzuwVRCJ6", "_mounts" => "0", "_track_static" => %{"0" => "https://demo.firez.one/dist/admin-02fabe0f543c64122dbf5bc5b3451e51.css?vsn=d", "1" => "https://demo.firez.one/dist/admin-04e75c78295062c2c07af61be50248b0.js?vsn=d"}, "vsn" => "2.0.0"}\n2022-09-23_15:05:47.33655 15:05:47.336 [info] CONNECTED TO FzHttpWeb.UserSocket in 430\xb5s\n2022-09-23_15:05:47.33657   Transport: :websocket\n2022-09-23_15:05:47.33658   Serializer: Phoenix.Socket.V2.JSONSerializer\n2022-09-23_15:05:47.33658   Parameters: %{"token" => "SFMyNTY.g2gDYQFuBgB6HeJqgwFiAAFRgA.qKoC2bi9DubPkE0tfaRSPERWUFyQQPQV5n4nFKVppxc", "vsn" => "2.0.0"}\n2022-09-23_15:05:47.35063 15:05:47.350 [info] JOINED notification:session in 636\xb5s\n2022-09-23_15:05:47.35065   Parameters: %{"token" => "SFMyNTY.g2gDYQFuBgB6HeJqgwFiAAFRgA.zSG7pefm-Vgf_zvduxa5E9VK4s8PKqzc0xBDGNx5FQE", "user_agent" => "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:106.0) Gecko/20100101 Firefox/106.0"}\n')))),(0,i.kt)("h2",{id:"debugging-wireguard-connectivity-issues"},"Debugging WireGuard connectivity issues"),(0,i.kt)("p",null,"Most connectivity issues with Firezone are caused by other ",(0,i.kt)("inlineCode",{parentName:"p"},"iptables")," or\n",(0,i.kt)("inlineCode",{parentName:"p"},"nftables")," rules which interfere with Firezone's operation. If you have rules\nactive, you'll need to ensure these don't conflict with the Firezone rules."),(0,i.kt)("h3",{id:"internet-connectivity-drops-when-tunnel-is-active"},"Internet connectivity drops when tunnel is active"),(0,i.kt)("p",null,"If your Internet connectivity drops whenever you activate your WireGuard\ntunnel, you should make sure that the ",(0,i.kt)("inlineCode",{parentName:"p"},"FORWARD")," chain allows packets\nfrom your WireGuard clients to the destinations you want to allow through\nFirezone."),(0,i.kt)("p",null,"If you're using ",(0,i.kt)("inlineCode",{parentName:"p"},"ufw"),", this can be done by making sure the default routing\npolicy is ",(0,i.kt)("inlineCode",{parentName:"p"},"allow"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"ubuntu@fz:~$ sudo ufw default allow routed\nDefault routed policy changed to 'allow'\n(be sure to update your rules accordingly)\n")),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"ufw")," status for a typical Firezone server might look like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"ubuntu@fz:~$ sudo ufw status verbose\nStatus: active\nLogging: on (low)\nDefault: deny (incoming), allow (outgoing), allow (routed)\nNew profiles: skip\n\nTo                         Action      From\n--                         ------      ----\n22/tcp                     ALLOW IN    Anywhere\n80/tcp                     ALLOW IN    Anywhere\n443/tcp                    ALLOW IN    Anywhere\n51820/udp                  ALLOW IN    Anywhere\n22/tcp (v6)                ALLOW IN    Anywhere (v6)\n80/tcp (v6)                ALLOW IN    Anywhere (v6)\n443/tcp (v6)               ALLOW IN    Anywhere (v6)\n51820/udp (v6)             ALLOW IN    Anywhere (v6)\n")),(0,i.kt)("h2",{id:"admin-login-isnt-working"},"Admin login isn't working"),(0,i.kt)("p",null,"If the password for the account with email ",(0,i.kt)("inlineCode",{parentName:"p"},"ADMIN_EMAIL")," isn't working, you can reset it using the process below."),(0,i.kt)(p,{mdxType:"Tabs"},(0,i.kt)(d,{value:"docker",label:"Docker",mdxType:"TabItem"},(0,i.kt)("p",null,"First change directory to your Firezone root, then run the ",(0,i.kt)("inlineCode",{parentName:"p"},"bin/create-or-reset-admin")," script\nto reset the admin user's password. The password for the user specified by\n",(0,i.kt)("inlineCode",{parentName:"p"},"ADMIN_EMAIL"),"\nin ",(0,i.kt)("inlineCode",{parentName:"p"},"$HOME/.firezone/.env")," will be reset to the ",(0,i.kt)("inlineCode",{parentName:"p"},"DEFAULT_ADMIN_PASSWORD")," variable."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"  cd $HOME/.firezone\n  docker compose exec firezone bin/create-or-reset-admin\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note"),": If local authentication is disabled, resetting the admin user's\npassword will not re-enable it.")),(0,i.kt)(d,{value:"omnibus",label:"Omnibus",mdxType:"TabItem"},(0,i.kt)("p",null,"Run the following command to reset the password on the default admin user."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"sudo firezone-ctl create-or-reset-admin\n")))),(0,i.kt)("h2",{id:"re-enable-local-authentication-in-cli"},"Re-enable local authentication in CLI"),(0,i.kt)("p",null,"For production deployments, we recommend adding a TOTP-based second factor to\nadmin accounts. If you promoted an account authenticated through an identity\nprovider, you can consider disabling local authentication for additional\nsecurity."),(0,i.kt)("p",null,"If issues arise with your identity provider integration, it's possible you\ncould be locked out of the admin portal. To re-enable local authentication so\nyou can log in and resolve the issue, run the following query on the host of\nyour Firezone instance:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"cd $HOME/.firezone\ndocker compose exec postgres psql -U postgres -h 127.0.0.1 -d firezone -c \"UPDATE configurations SET local_auth_enabled = 't'\"\n")),(0,i.kt)("h2",{id:"need-additional-help"},"Need additional help?"),(0,i.kt)("p",null,"Try asking on one of our community-powered support channels:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://discourse.firez.one/"},"Discussion Forums"),": ask questions, report bugs,\nand suggest features"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://join.slack.com/t/firezone-users/shared_invite/zt-111043zus-j1lP_jP5ohv52FhAayzT6w"},"Public Slack Group"),":\njoin discussions, meet other users, and meet the contributors")),(0,i.kt)("p",null,"We highly recommend considering ",(0,i.kt)("a",{parentName:"p",href:"https://firezone.dev/pricing"},"priority support"),"\nif you're deploying Firezone in a production capacity."))}h.isMDXComponent=!0}}]);