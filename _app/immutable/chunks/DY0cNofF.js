import{l as a,s as f}from"./Bb5XChYg.js";const u="https://www.google.com";function i(){return window.top??window}function d(){const e=i();return e?e.location.href:"/"}function w(){const e=i()?.document,t=e?.querySelector('link[rel~="icon"]')??null;return{title:e?.title||"Classroom",icon:t?.href||""}}function r({fixedIframe:e}){const{title:t,icon:n}=w(),o=n?`<link rel="icon" href="${n}" />`:"";return`<!DOCTYPE html>
<html>
	<head>
		<title>${t}</title>
		${o}
		<style>
			html, body { margin: 0; height: 100%; overflow: hidden; background: #000; }
			iframe { ${e?"position: fixed; inset: 0;":""} width: 100vw; height: 100vh; border: 0; }
		</style>
	</head>
	<body>
		<iframe src="${d()}"></iframe>
	</body>
</html>`}function s(){i()?.location.replace(u)}function b(){const e=window.open("about:blank","_blank");return e?(e.document.documentElement.innerHTML=r({fixedIframe:!1}),e.document.close(),s(),!0):!1}function m(){const e=new Blob([r({fixedIframe:!0})],{type:"text/html"}),t=URL.createObjectURL(e);return window.open(t)?(s(),!0):(URL.revokeObjectURL(t),!1)}function l(e){e.preventDefault()}function p(e){const t=i();if(!t)return;const n=t;if(e){if(n.__galaxyAntiClose)return;n.__galaxyAntiClose=l,t.addEventListener("beforeunload",l)}else n.__galaxyAntiClose&&(t.removeEventListener("beforeunload",n.__galaxyAntiClose),n.__galaxyAntiClose=null)}function c(e,t){const n=i()?.document;if(n&&(e&&(n.title=e),t)){let o=n.querySelector('link[rel~="icon"]');o||(o=n.createElement("link"),o.rel="icon",n.head.appendChild(o)),o.href=t}}async function k(e,t){await f("tabPreset",{name:e,icon:t}),c(e,t)}async function h(){const e=await a("tabPreset",null);e&&(e.name||e.icon)&&c(e.name,e.icon)}async function _(){if(await h(),p(await a("antiClose",!1)),window.self!==window.top)return;const[e,t]=await Promise.all([a("autoAB",!1),a("autoBlob",!1)]);e?b():t&&m()}export{_ as a,m as b,p as c,b as o,k as s};
