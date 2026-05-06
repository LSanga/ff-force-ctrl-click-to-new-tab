(function(){
  const isMac = navigator.platform.toLowerCase().includes("mac");
  addEventListener("click",e=>{
    if(e.defaultPrevented) return;
    if(e.button!==0) return;
    const mod = isMac?e.metaKey:e.ctrlKey;
    if(!mod) return;
    let a = e.target;
    while(a && a.nodeName!=="A") a = a.parentElement;
    if(!a || !a.href) return;
    e.preventDefault();
    e.stopImmediatePropagation();
    chrome.runtime.sendMessage({type:"openInTab",href:a.href});
  }, true);
})();
