const themeKey='ghe-theme',root=document.documentElement;
const savedTheme=localStorage.getItem(themeKey);
if(savedTheme==='light'||savedTheme==='dark')root.dataset.theme=savedTheme;
document.addEventListener('DOMContentLoaded',()=>{
  const toggle=document.querySelector('[data-theme-toggle]');
  if(!toggle)return;
  const dark=()=>root.dataset.theme?root.dataset.theme==='dark':matchMedia('(prefers-color-scheme: dark)').matches;
  const sync=()=>{toggle.setAttribute('aria-pressed',String(dark()));toggle.textContent=dark()?'Light mode':'Dark mode'};
  toggle.addEventListener('click',()=>{root.dataset.theme=dark()?'light':'dark';localStorage.setItem(themeKey,root.dataset.theme);sync()});
  matchMedia('(prefers-color-scheme: dark)').addEventListener('change',()=>{if(!root.dataset.theme)sync()});
  sync();
});
