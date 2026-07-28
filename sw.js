const CACHE='japon2026-v33';
const FILES=['./','./index.html','./manifest.json','./icon-192.png','./icon-512.png'];

self.addEventListener('install',e=>{
  // toma el control en cuanto se instala, sin esperar a que se cierren las pestañas viejas
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()));
});

self.addEventListener('activate',e=>{
  e.waitUntil(
    caches.keys().then(ks=>Promise.all(
      ks.filter(k=>k!==CACHE).map(k=>caches.delete(k))
    )).then(()=>self.clients.claim())
  );
});

// permite que la página fuerce la activación del SW nuevo sin recargar dos veces
self.addEventListener('message',e=>{ if(e.data==='skipWaiting') self.skipWaiting(); });

function isDoc(req){
  // el HTML principal: siempre lo queremos fresco si hay red
  return req.mode==='navigate' || (req.destination==='document') ||
         /\/(index\.html)?(\?.*)?$/.test(new URL(req.url).pathname);
}

self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET') return;

  // index.html / navegación: RED PRIMERO SIEMPRE; la caché es solo el plan B sin conexión
  if(isDoc(e.request)){
    e.respondWith(
      fetch(e.request,{cache:'no-store'}).then(r=>{
        const cp=r.clone();
        caches.open(CACHE).then(c=>c.put('./index.html',cp)).catch(()=>{});
        return r;
      }).catch(()=>caches.match(e.request).then(m=>m||caches.match('./index.html')))
    );
    return;
  }

  // resto de archivos (iconos, manifest): red primero, con respaldo en caché
  e.respondWith(
    fetch(e.request).then(r=>{
      const cp=r.clone();
      caches.open(CACHE).then(c=>c.put(e.request,cp)).catch(()=>{});
      return r;
    }).catch(()=>caches.match(e.request))
  );
});
