const f=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function a(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(t){if(t.ep)return;t.ep=!0;const i=a(t);fetch(t.href,i)}};f();let u=navigator.userAgent;const c=({ua:e})=>e.indexOf("Opera")>-1?"Opera":e.indexOf("Chrome")>-1?"Chrome":e.indexOf("Firefox")>-1?"Firefox":e.indexOf("Safari")>-1?"Safari":e.indexOf("MSIE")>-1||e.indexOf("Trident")>-1?"IE":e.indexOf("Edge")>-1?"Edge":"unknown";let n=c({ua:u});function p(){const e=navigator.userAgent;return/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(e)?"tablet":/(iPhone|iPod|iPad)/i.test(e)||/(android)/i.test(e)||/(windows phone)/i.test(e)||/(blackberry)/i.test(e)||/(bb10)/i.test(e)||/(opera mini)/i.test(e)||/(opera mobi)/i.test(e)||/(iemobile)/i.test(e)||/(symbian)/i.test(e)||/(maemo)/i.test(e)||/(webos)/i.test(e)||/(mobile)/i.test(e)||/(tablet)/i.test(e)||/(symbianos)/i.test(e)||/(up.browser)/i.test(e)||/(up.link)/i.test(e)||/(mmp)/i.test(e)||/(symbianos)/i.test(e)||/(midp)/i.test(e)||/(wap)/i.test(e)||/(phone)/i.test(e)||/(pocket)/i.test(e)||/(mobile)/i.test(e)||/(pda)/i.test(e)||/(avantgo)/i.test(e)||/(eudoraweb)/i.test(e)||/(brew)|(bada)/i.test(e)||/(blackberry)/i.test(e)||/(hpwos)/i.test(e)||/(kindle)/i.test(e)||/(lge.netcast)/i.test(e)||/(lg;lx)|(lg;lx)/i.test(e)||/(lge.netcast)/i.test(e)||/(nintendo.3ds)/i.test(e)||/(nintendo.ds)/i.test(e)||/(nintendo.wiiu)/i.test(e)||/(nintendo.wii)/i.test(e)||/(playstation.3ds)/i.test(e)||/(playstation.ds)/i.test(e)||/(playstation.wiiu)/i.test(e)||/(playstation.wii)/i.test(e)||/(webos)/i.test(e)?"mobile":"desktop"}let b=p();function w(){const e=navigator.userAgent;return/(iPhone|iPod|iPad)/i.test(e)?(console.log("iOS"),"iOS"):/Android/i.test(e)?(console.log("Android"),"Android"):/BlackBerry/i.test(e)?(console.log("BlackBerry"),"BlackBerry"):/Windows Phone/i.test(e)?(console.log("Windows Phone"),"Windows Phone"):/webOS/i.test(e)?(console.log("webOS"),"webOS"):(console.log("ERR: Unknown Device"),"unknown")}w();const g=({ua:e})=>e.indexOf("Windows")>-1?"Windows":e.indexOf("Mac")>-1?"Mac":e.indexOf("Linux")>-1?"Linux":e.indexOf("Android")>-1?"Android":e.indexOf("iPhone")>-1||e.indexOf("iPad")>-1||e.indexOf("iPod")>-1?"iOS":"unknown";g({ua:navigator.userAgent});let l=!0;$(document).ready(()=>{d()});$(window).on("orientationchange",e=>{d()});const d=()=>(l=window.innerHeight<=window.innerWidth,l),m=()=>navigator.deviceMemory,O=e=>{if(n=="Chrome"&&e(),n=="Firefox")return"RAM API not availible in Firefox";if(n=="Safari")return"RAM API not availible in Safari";if(n=="IE")return"RAM API not availible in IE";n=="Opera"&&e()};O(m);let y=document.querySelector(".navText");b==="mobile"&&(y.style.display="block");
