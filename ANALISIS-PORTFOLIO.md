# Análisis del Portfolio — Frankman Dev
> Última actualización: 2026-03-23 | Generado por Claude Code

---

## CONTEXTO

- **Desarrollador:** Francisco Rodriguez Salazar (Frankman Dev)
- **Experiencia:** 2+ años en entornos privados y gubernamentales (Panamá)
- **Stack:** Next.js 16, React 18, TypeScript, Tailwind CSS, Shadcn/ui, Resend
- **Deploy:** Netlify — https://landing-page-frankmandev.netlify.app
- **Objetivo:** Posicionarse como Full-Stack Developer en el mercado

---

## ✅ LOG DE CAMBIOS REALIZADOS

### Sesión 2026-03-23

**Dependencias**
- ✅ Eliminado `"node": "^25.4.0"` de `dependencies` — Node no es un paquete npm
- ✅ Actualizado `lucide-react` 0.462.0 → 0.577.0 (115 versiones de íconos nuevos)
- ✅ Actualizado `next` 16.1.4 → 16.2.1
- ✅ Actualizado `eslint-config-next` 16.1.4 → 16.2.1
- ✅ Actualizado `next-themes` 0.4.3 → 0.4.6
- ✅ Actualizado `react-hook-form` 7.54.2 → 7.72.0
- ✅ Actualizado `resend` 4.0.1 → 4.8.0
- ✅ Actualizado `embla-carousel-react` 8.5.1 → 8.6.0
- ✅ Actualizado `typescript` 5.7 → 5.9.3
- ✅ Actualizado `postcss` 8.4.49 → 8.5.8
- ✅ Actualizados todos los `@radix-ui/*` y `@types/*` al patch más reciente
- ⚠️ **NO actualizados** (major breaking): `react` 18→19, `tailwindcss` 3→4, `zod` 3→4, `@hookform/resolvers` 3→5, `eslint` 9→10, `tailwind-merge` 2→3

**Portfolio**
- ✅ Reemplazado "App Black Jack" por **FrankmanDev Playground** (`https://frankmandevplayground.netlify.app`)
- ✅ Tags del Playground: Next.js, TypeScript, Supabase
- ✅ Imagen: `playground.png` (ya existía en `/public`)
- ⚠️ **Verificar**: URL del repo en `data.tsx` línea 120 — actualmente `github.com/Frankman254/frankmandevplayground`, cambiar si el nombre es diferente

**Limpieza de assets**
- ✅ Eliminados 13 archivos sin usar: `image-1..6.jpg`, `profile-1..3.jpeg`, `banner.png`, `logo_frankmandev.png`, `logo_frankman_dev.png`, `brand-logo.svg`, `file.svg`, `globe.svg`, `next.svg`, `window.svg`, `.jpg` (archivo corrupto), `app-black-jack.png`
- ✅ Eliminado `dataSlider` de `data.tsx` — 16 entradas nunca importadas (slider-9 al 16 ni siquiera existían como archivos)

**Bug crítico resuelto — Brand Mark negro**
- ✅ `styled-jsx` dejó de inyectar CSS al actualizar Next.js 16.1.4 → 16.2.1 con Turbopack
- ✅ Movidos todos los estilos del SVG brand mark de `<style jsx>` en `brand-mark.tsx` → `globals.css`
- ✅ Colores confirmados en bundle de producción: `#f5c400` (amarillo), `#d72638` (rojo), `#0c0c0f` (fondo)
- ✅ Animaciones del brand mark (`bgReveal`, `growUp`, `drawAcross`, `strokeDraw`, `fadeLift`, `sparkleUp`, `pulseDot`) todas funcionales
- ✅ `prefers-reduced-motion` mantenido en `globals.css`

**Scroll Reveal — fix de secciones invisibles**
- ✅ El usuario corrigió `globals.css`: `.reveal` ahora tiene `opacity: 1` por defecto
- ✅ La animación solo aplica cuando se agrega clase `reveal-init` (requiere JS activo)
- ✅ Mismo patrón aplicado a `.reveal-left` y `.reveal-scale`
- ✅ `.bar-animated` ahora muestra el valor final por defecto (sin animación si no hay JS)

**Config**
- ✅ Restaurado `images.qualities: [75, 95]` en `next.config.ts` (eliminaba warnings de slider images)
- ✅ Agregado `allowedDevOrigins: ["192.168.50.224"]` en `next.config.ts` (elimina warning de Turbopack en red local)

---

## PARTE 1 — ANÁLISIS COMO RECLUTADOR SENIOR (pendiente)

### 🔴 CRÍTICO — El portfolio no respalda la experiencia declarada

Ahora tienes 3 proyectos: App Todos, FrankmanDev Playground, Landing Page. El Playground es mejor que el Blackjack pero aún faltan proyectos de producción real.

**Solución:** Si tienes trabajo real bajo NDA, agrega cards con formato:
- Nombre genérico: "Sistema Interno — Entidad Gubernamental, Panamá"
- Descripción del problema que resolviste
- Tecnologías utilizadas
- Resultado/impacto (ej: "Redujo proceso manual de 3 horas a 15 minutos")
- Sin mostrar código ni nombre de cliente

---

### 🔴 CRÍTICO — La sección "Experiencia" no tiene formato de CV

La sección actual solo tiene bullet points genéricos. No hay empresa, cargo, ni fechas.

**Formato recomendado:**
```
Desarrollador Full-Stack
Entidad Gubernamental — Panamá | Ene 2023 – Presente
- Desarrollé sistema X que automatizó proceso Y para N usuarios
- Mantuve y mejoré sistema Z con tecnología W
```

---

### 🟠 ALTO — Las estadísticas no cuadran

Dice "10+ proyectos" pero muestra 3. Genera desconfianza.

**Solución:** Cambiar a "3+ proyectos públicos" o agregar más proyectos.

---

### 🟠 ALTO — Las barras de porcentaje son contradictorias

| Skill | Subtitle | Value |
|-------|----------|-------|
| Tailwind CSS | Basic | 90% |
| SQL Server | Basic | 90% |

**Solución:** Eliminar barras. Reemplazar con niveles: Avanzado / Intermedio / Familiar

---

### 🟠 ALTO — Servicios técnicos (reparación) en `data.tsx`

El bloque "Servicios Técnicos" (reparación de celulares/consolas) existe en `data.tsx` aunque no se renderiza. Destruye el posicionamiento si se activa. **Eliminar.**

---

### 🟡 MEDIO — Los proyectos no tienen descripción de impacto

Cada card solo muestra título + imagen + tags. Falta: qué problema resuelve, para quién, resultado.

---

### 🟡 MEDIO — No hay prueba social

Faltan: testimonios, GitHub stats visibles, logos de tecnologías o entornos.

---

## PARTE 2 — ANÁLISIS COMO PROGRAMADOR SENIOR (pendiente)

### 🔴 CRÍTICO — Links externos sin `rel="noopener noreferrer"`

**Archivo:** `components/portfolio.tsx` — Links con `target="_blank"` sin `rel`. Vulnerabilidad reverse tabnapping.

```tsx
// Correcto:
<Link href={data.urlGithub} target="_blank" rel="noopener noreferrer">
```

---

### 🟠 ALTO — `data.tsx` exporta JSX — mezcla datos con componentes

```tsx
icon: <Server />,  // ← JSX en archivo de datos
```

Acopla datos a la vista. Solución: usar `iconName: 'Server'` y resolver el componente en el componente.

---

### 🟠 ALTO — Datos desincronizados entre `data.tsx` y `translations.ts`

- `dataAboutMe.name/description` → nunca se leen, `about-me.tsx` usa `translations.ts`
- `dataServices` títulos no coinciden con los servicios de `translations.ts`
- Iconos de `dataServices` no corresponden a los servicios reales

---

### 🟠 ALTO — Resend usa dominio sandbox

**Archivo:** `app/api/send/route.ts` línea 39

```ts
from: "Frankman Dev <onboarding@resend.dev>",  // ← sandbox, solo llega al owner
```

Verificar dominio propio en Resend y cambiar a `contact@tudominio.com`.

---

### 🟡 MEDIO — El email en la introducción no es clickeable

**Archivo:** `components/introduction.tsx` — texto plano, debería ser `<a href="mailto:...">`.

---

### 🟡 MEDIO — Stats con i18n inline en componente

**Archivo:** `components/about-me.tsx` — stats y traducciones hardcodeadas, deberían estar en `translations.ts`.

---

### 🟡 MEDIO — `import React from "react"` innecesario

**Archivo:** `components/experience.tsx` línea 1 — eliminar.

---

## TABLA DE PRIORIDADES

| Estado | Prioridad | Tipo | Item | Archivo |
|--------|-----------|------|------|---------|
| ✅ | — | Bug | Brand mark negro (styled-jsx → globals.css) | `globals.css`, `brand-mark.tsx` |
| ✅ | — | Bug | Secciones invisibles (scroll reveal CSS fix) | `globals.css` |
| ✅ | — | Config | `node` eliminado de dependencies | `package.json` |
| ✅ | — | Config | Dependencias actualizadas | `package.json` |
| ✅ | — | Portfolio | Black Jack → FrankmanDev Playground | `data.tsx` |
| ✅ | — | Limpieza | 13 assets sin uso eliminados | `public/` |
| ✅ | — | Limpieza | `dataSlider` código muerto eliminado | `data.tsx` |
| ✅ | — | Config | `next.config.ts` restaurado con image qualities | `next.config.ts` |
| ⬜ | 🔴 Crítico | Contenido | Agregar proyectos reales con impacto | `data.tsx`, `translations.ts` |
| ⬜ | 🔴 Crítico | Contenido | Dar formato de CV a Experience | `translations.ts` |
| ⬜ | 🔴 Crítico | Seguridad | `rel="noopener noreferrer"` en links | `components/portfolio.tsx` |
| ⬜ | 🟠 Alto | Contenido | Reemplazar barras de porcentaje contradictorias | `data.tsx`, `experience.tsx` |
| ⬜ | 🟠 Alto | Contenido | Eliminar "Servicios Técnicos" de `data.tsx` | `data.tsx` |
| ⬜ | 🟠 Alto | Config | Configurar dominio Resend para producción | `app/api/send/route.ts` |
| ⬜ | 🟠 Alto | Código | Limpiar desincronización `data.tsx` vs `translations.ts` | `data.tsx` |
| ⬜ | 🟡 Medio | Código | Sacar JSX de `data.tsx` | `data.tsx` |
| ⬜ | 🟡 Medio | UX | Convertir email a `mailto:` link | `components/introduction.tsx` |
| ⬜ | 🟡 Medio | Código | Mover stats inline a `translations.ts` | `components/about-me.tsx` |
| ⬜ | 🟡 Medio | Código | Eliminar `import React` innecesario | `components/experience.tsx` |
| ⬜ | 🟡 Medio | URL | Cambiar nombre del sitio en Netlify a `frankmandev` | Netlify dashboard |
| ⬜ | 🔵 Menor | Código | Verificar URL repo Playground en `data.tsx` línea 120 | `data.tsx` |
