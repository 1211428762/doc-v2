import{ah as i,ai as a}from"./mermaid.core-eed1883f.js";const c=n=>{const{r,g:t,b:o}=i.parse(n),s=.2126*a.channel.toLinear(r)+.7152*a.channel.toLinear(t)+.0722*a.channel.toLinear(o);return a.lang.round(s)},e=c,l=n=>e(n)>=.5,u=l,h=n=>!u(n),L=h;export{L as i};