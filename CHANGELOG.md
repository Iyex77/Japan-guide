# Historial de cambios

Cada fila es un commit real en `main`. Si algo se rompe, puedes volver
al estado de un commit concreto sin perder el historial:

```bash
git checkout <hash> -- index.html   # recupera solo ese archivo a como estaba en ese commit
git commit -m "Vuelta atrás a <hash>"
```

O si quieres deshacer solo el ÚLTIMO cambio (más seguro, mantiene todo lo de después):

```bash
git revert HEAD          # deshace el commit más reciente con uno nuevo
git push origin main
```

Para ver qué cambió exactamente en un commit: `git show <hash>`.

---

| Fecha | Commit | Qué cambia |
|---|---|---|
| 2026-08-22 | `47a50dd` | Borra info personal para poder publicar la app: hoteles reales (nombre/dirección/teléfono) pasan a placeholders editables vía ✏️ Editar (se sincronizan por tu sala, no van en el código); quita fecha de póliza y una mención de nombre de un comentario |
| 2026-08-22 | `327d4ac` | Formulario visual también en las URLs de foto y el nombre del saludo (antes prompt()) |
| 2026-08-22 | `23a8238` | Formularios visuales en vez de prompt() para editar el día y la fecha de inicio del viaje |
| 2026-08-22 | `1dcbc65` | Verificación de datos: precios de goshuin y dudas pendientes de restaurantes/tiendas |
| 2026-08-22 | `7a14f96` | Avisa de tiendas y restaurantes cerca según tu ubicación real (GPS), activable en Ayuda |
| 2026-08-22 | `a26d0df` | Corrige zonas/barrio mal asignadas y rellena las que faltaban en restaurantes y tiendas (PZONE) |
| 2026-08-22 | `c5b8a62` | Separa Restaurantes de Tiendas en la ruta del día en dos bloques plegables independientes, cerrados por defecto |
| 2026-08-22 | `090f8d2` | Tiendas y restaurantes de la zona, después de las actividades de cada día (recorrido del día) |
| 2026-08-22 | `4bc54f0` | Reduce el punto de prioridad a 22px, 32px era demasiado grande |
| 2026-08-22 | `fca4c47` | Punto de prioridad más grande y movido al hueco vacío de la derecha |
| 2026-08-22 | `3963b31` | Añade CHANGELOG.md con el historial de commits para poder restaurar |
| 2026-08-22 | `4dbdc43` | "Ver nota" del itinerario pasa a su propia línea (mismo estilo que "Ver ficha del lugar ›"); quita el kanji 御朱印 de la insignia de goshuin en las actividades del día |
| 2026-08-22 | `361431d` | El icono de notas se cambia por un enlace de texto "› Ver nota" (mismo estilo que la etiqueta Goshuin); se añade también en el itinerario, no solo en Lugares |
| 2026-08-21 | `48ec615` | Verificación de datos: restaurantes de Tokio y todas las tiendas (SHOP) contra fuentes actuales — ningún cierre encontrado, horarios rellenados |
| 2026-08-21 | `76a08e9` | Verificación de datos: horarios, precios de entrada, precios de goshuin y última admisión de ~130 sitios y restaurantes contra fuentes oficiales de jul-2026 |
| 2026-08-21 | `d8b0223` | Etiqueta "Goshuin" en castellano (antes kanji) con tipografía propia; notas de un sitio visibles y desplegables desde Lugares |
| 2026-08-21 | `de84944` | Arregla que las fotos no llegaran a converger entre dispositivos: cada uno se ofrece su estado al conectar, y los cambios solo-foto no fuerzan recarga |
| 2026-08-21 | `5a1bc06` | Sincroniza también la caché de fotos automáticas (Wikipedia) entre dispositivos |
| 2026-08-21 | `d646379` | Arregla que la app recargara sola cada pocos segundos: ya no se sincroniza por cambios que no son datos compartidos (pestaña activa, scroll…) |
| 2026-08-21 | `8f6e997` | Arregla que la app siempre volviera a Inicio al recargar (bug de orden en la restauración de estado) + arregla que un favorito quitado en un dispositivo reapareciera desde el otro |
| 2026-08-21 | `1e6c0d4` | Sincronización silenciosa entre dispositivos (como en gym-rutines): sin aviso que haya que tocar, se aplica sola |
| 2026-08-21 | `993200e` | Arregla que las fotos de Lugares no cargaran solas al abrir la app (bug real de scope, no de timing) |
| 2026-08-21 | `0fbf9f9` | Borra el bloque de agrupación de días por ciudad (v28), muerto y sustituido por v29 |
