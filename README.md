# integradata_web

## Web Impact Agent

Se creo un agente especialista en web premium estilo Apple en:

- `agents/web-impact-apple/AGENT_SPEC.md`
- `agents/web-impact-apple/SKILLS_PROTOCOL.md`
- `agents/web-impact-apple/skills/skills.manifest.json`
- `agents/web-impact-apple/templates/skill-brief.template.md`
- `agents/web-impact-apple/skills/skills.manifest.json` (incluye todos los skills instalados)

## Ejecutar local

1. `pnpm install`
2. `pnpm dev`
3. Abrir `http://localhost:5173`

## Estructura Astro

- `src/layouts/BaseLayout.astro`
- `src/pages/index.astro`
- `src/styles/global.css`
- `public/logo.png`
- `public/dash-web-central.webp`
- `public/orbit-excel.svg`

## Como agregar nuevos skills

1. Completa `agents/web-impact-apple/templates/skill-brief.template.md`.
2. Registra el skill en `agents/web-impact-apple/skills/skills.manifest.json`.
3. Respeta las reglas de `AGENT_SPEC.md` y `SKILLS_PROTOCOL.md`.
4. Define prioridad para resolver conflictos entre skills.

## Template web

`https://html.rometheme.net/bitelo/index.html`
