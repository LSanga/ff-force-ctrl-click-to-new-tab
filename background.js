chrome.runtime.onMessage.addListener((m,s,r)=>{
  if(m&&m.type==="openInTab"&&m.href)chrome.tabs.create({url:m.href,active:false});
});
