# Análisis del Portfolio — Frankman Dev
> Fecha: 2026-03-22 | Generado por Claude Code

---

## CONTEXTO

- **Desarrollador:** Francisco Rodriguez Salazar (Frankman Dev)
- **Experiencia:** 2+ años en entornos privados y gubernamentales (Panamá)
- **Stack:** Next.js 16, React 18, TypeScript, Tailwind CSS, Shadcn/ui, Resend
- **Deploy:** Netlify — https://landing-page-frankmandev.netlify.app
- **Objetivo:** Posicionarse como Full-Stack Developer en el mercado

---

## PARTE 1 — ANÁLISIS COMO RECLUTADOR SENIOR

### 🔴 CRÍTICO — El portfolio no respalda la experiencia declarada

Dices "2 años en entornos privados y gubernamentales" pero solo muestras 3 proyectos:
1. App Todos React (proyecto de práctica)
2. App Black Jack (proyecto de práctica)
3. Landing Page Portfolio (el propio portfolio)

**Problema:** Ninguno valida experiencia en producción real. Un reclutador lo nota de inmediato.

**Solución:** Si tienes trabajo real bajo NDA, agrega cards con formato:
- Nombre genérico: "Sistema Interno — Entidad Gubernamental, Panamá"
- Descripción del problema que resolviste
- Tecnologías utilizadas
- Resultado/impacto (ej: "Redujo proceso manual de 3 horas a 15 minutos")
- Sin mostrar código ni nombre de cliente

---

### 🔴 CRÍTICO — La sección "Experiencia" no tiene formato de CV

La sección actual solo tiene bullet points genéricos. No hay:
- Nombre de empresa u organización
- Título del cargo
- Fechas de inicio y fin
- Impacto medible

**Formato recomendado:**
```
Desarrollador Full-Stack
Entidad Gubernamental — Panamá | Ene 2023 – Presente
- Desarrollé sistema X que automatizó proceso Y para N usuarios
- Mantuve y mejoré sistema Z con tecnología W
```

---

### 🟠 ALTO — Las estadísticas no cuadran

- Dice "10+ proyectos" pero muestra 3
- Esto genera desconfianza activa en el reclutador

**Solución:** O quitas el número, o muestras más proyectos, o cambias a "3+ proyectos públicos".

---

### 🟠 ALTO — Las barras de porcentaje son contradictorias

Encontradas en `data.tsx`:
| Skill | Subtitle | Value |
|-------|----------|-------|
| Tailwind CSS | Basic | 90% |
| SQL Server | Basic | 90% |
| Node JS | Intermedio | 70% |

"Basic" y 90% son incompatibles. Los reclutadores técnicos lo notan.

**Solución:** Eliminar barras de porcentaje completamente. Reemplazar con niveles cualitativos:
- Avanzado / Intermedio / Familiar

---

### 🟠 ALTO — Servicios técnicos (reparación) dañan el posicionamiento

En `data.tsx` existe este servicio (actualmente inactivo pero presente):
```
"Reparación de Computadoras"
"Instalación de Sistemas de Seguridad"
"Reparación de Celulares / Consolas de Video juegos"
```

Aunque no se renderiza actualmente, su existencia es un riesgo. Destruye el posicionamiento de Full-Stack Developer si alguna vez se activa.

**Solución:** Eliminar ese bloque de `data.tsx`.

---

### 🟡 MEDIO — Los proyectos no tienen descripción de impacto

Cada card de portfolio muestra título, imagen y tags pero no:
- Qué problema resuelve
- Para quién fue hecho
- Qué aprendiste o qué desafío técnico superaste

---

### 🟡 MEDIO — No hay prueba social

Faltan:
- Testimonios de clientes o colegas
- GitHub activity / stats visibles
- Logos de tecnologías o entornos donde trabajaste

---

## PARTE 2 — ANÁLISIS COMO PROGRAMADOR SENIOR

### 🔴 CRÍTICO — Tailwind dynamic classes se rompen en producción

**Archivo:** Múltiples componentes (`about-me.tsx`, `portfolio.tsx`, `services.tsx`, `skills.tsx`, `experience.tsx`)

```tsx
// Patrón problemático encontrado en todos los componentes
className={`reveal delay-${index + 1}`}
// Genera: delay-1, delay-2, delay-3...
```

Tailwind usa análisis estático en build time. Las clases generadas dinámicamente NO se incluyen en el bundle de producción. Funcionan en `dev` pero fallan en `production`.

**Solución:** Agregar safelist en `tailwind.config.ts`:
```ts
safelist: [
  'delay-1', 'delay-2', 'delay-3', 'delay-4', 'delay-5', 'delay-6',
]
```
O usar un array estático de clases en cada componente.

---

### 🔴 CRÍTICO — Links externos sin `rel="noopener noreferrer"`

**Archivo:** `components/portfolio.tsx` (líneas 47–61)

```tsx
// Vulnerable a reverse tabnapping
<Link href={data.urlGithub} target="_blank">
<Link href={data.urlDemo} target="_blank">
```

Con `target="_blank"` sin `rel`, la página destino puede acceder a `window.opener` y redirigir la página original (reverse tabnapping attack).

**Solución:**
```tsx
<Link href={data.urlGithub} target="_blank" rel="noopener noreferrer">
```

---

### 🟠 ALTO — `data.tsx` exporta JSX — mezcla datos con componentes

**Archivo:** `data.tsx` (líneas 32–69, 267–343, 345–374)

```tsx
// MAL: JSX en archivo de datos
{
  id: 1,
  name: 'Producción',
  icon: <Server />,  // ← componente React dentro de datos
}
```

**Problemas:**
- Acopla datos a la vista (no puedes usar estos datos fuera de React)
- `JSON.stringify` falla con estos datos
- Mezcla responsabilidades (Single Responsibility Principle violado)

**Solución:** Los datos deben ser strings o identificadores, los iconos se resuelven en el componente:
```tsx
// data.ts (sin JSX)
{ id: 1, name: 'Producción', iconName: 'Server' }

// componente
const iconMap = { Server, Monitor, Database, ... }
const Icon = iconMap[data.iconName]
```

---

### 🟠 ALTO — Datos duplicados y desincronizados

**Archivos:** `data.tsx` vs `lib/translations.ts`

`dataAboutMe` en `data.tsx` tiene `name` y `description` en español, pero `about-me.tsx` lee `t.data.aboutMe[index].name` desde `translations.ts`. Los campos de `data.tsx` **nunca se usan** — son datos muertos.

Lo mismo con `dataServices`: los títulos en `data.tsx` son:
- "Desarrollo Web", "Servicios Técnicos", "UI/UX Design"

Pero `translations.ts` tiene:
- "Herramientas internas y automatización", "Aplicaciones web a medida", "Infraestructura y despliegue"

El componente usa los **iconos** de `data.tsx` y los **textos** de `translations.ts`. Los iconos no corresponden a los servicios reales (`BellPlus` → icono de notificación para "Infraestructura").

---

### 🟠 ALTO — Resend usa dominio sandbox en producción

**Archivo:** `app/api/send/route.ts` (línea 39)

```ts
from: "Frankman Dev <onboarding@resend.dev>",  // ← sandbox
```

Con `onboarding@resend.dev` solo el dueño de la cuenta Resend recibe emails. Si un cliente usa el formulario, el email sí llega a tu Gmail pero técnicamente estás usando el dominio de prueba. Para producción real necesitas dominio verificado.

**Solución:** Verificar un dominio en Resend y cambiar a:
```ts
from: "Frankman Dev <contact@tudominio.com>",
```

---

### 🟡 MEDIO — El email en la introducción no es un link clickeable

**Archivo:** `components/introduction.tsx` (línea 28)

```tsx
// Actual — solo texto
<p className="animate-fade-up-3 mt-3 text-muted-foreground">
  {t.introduction.email}
</p>

// Correcto
<a href={`mailto:${t.introduction.email}`} className="...">
  {t.introduction.email}
</a>
```

---

### 🟡 MEDIO — Stats con i18n inline en el componente, bypaseando translations.ts

**Archivo:** `components/about-me.tsx` (líneas 11–15)

```tsx
// MAL: i18n hardcodeado en el componente
{ value: "2+", label: language === 'es' ? "Años de Experiencia" : "Years Experience" }
{ value: "10+", label: language === 'es' ? "Proyectos" : "Projects" }
```

Debería estar en `lib/translations.ts` como el resto del contenido.

---

### 🟡 MEDIO — `import React from "react"` innecesario

**Archivo:** `components/experience.tsx` (línea 1)

```tsx
import React from "react";  // ← no necesario desde React 17 / Next.js moderno
```

Next.js con JSX transform no requiere importar React. Es ruido.

---

### 🟡 MEDIO — Negative margin hack en `page.tsx`

**Archivo:** `app/page.tsx` (línea 18)

```tsx
className="relative mt-[-55px] sm:mt-[-85px] md:mt-[-115px] lg:mt-[-145px] xl:mt-[-175px]"
```

5 breakpoints de negative margin hardcodeados indican un problema estructural de layout. Es frágil y difícil de mantener.

---

### 🔵 MENOR — `dataSlider` tiene 16 items, solo 8 se usan

**Archivo:** `data.tsx` (líneas 105–170)

8 entradas de slider son datos muertos. `translations.ts` solo tiene 8 imágenes con captions.

---

## TABLA DE PRIORIDADES

| Prioridad | Tipo | Item | Archivo |
|-----------|------|------|---------|
| 🔴 Crítico | Contenido | Agregar proyectos reales con impacto | `data.tsx` |
| 🔴 Crítico | Contenido | Dar formato de CV a Experience (empresa, rol, fechas) | `translations.ts` |
| 🔴 Crítico | Bug prod | Fix Tailwind dynamic classes → safelist | `tailwind.config.ts` |
| 🔴 Crítico | Seguridad | `rel="noopener noreferrer"` en links externos | `components/portfolio.tsx` |
| 🟠 Alto | Contenido | Eliminar/reemplazar barras de porcentaje contradictorias | `data.tsx`, `experience.tsx` |
| 🟠 Alto | Config | Configurar dominio Resend para producción real | `app/api/send/route.ts` |
| 🟠 Alto | Código | Limpiar datos muertos y desincronización data.tsx vs translations.ts | `data.tsx` |
| 🟡 Medio | Código | Sacar JSX de `data.tsx` | `data.tsx` |
| 🟡 Medio | UX | Hacer el email un mailto link | `components/introduction.tsx` |
| 🟡 Medio | Código | Mover stats a `translations.ts` | `components/about-me.tsx` |
| 🟡 Medio | Código | Eliminar `import React` innecesario | `components/experience.tsx` |
| 🔵 Menor | Limpieza | Eliminar `dataSlider` items no usados | `data.tsx` |

---

## ESTADO DE TAREAS

- [ ] Agregar proyectos de producción real (con NDA si aplica)
- [ ] Rediseñar sección Experience con formato de CV
- [ ] Fix safelist Tailwind para clases dinámicas
- [ ] Agregar `rel="noopener noreferrer"` a links externos
- [ ] Eliminar/reemplazar barras de porcentaje
- [ ] Configurar dominio Resend
- [ ] Limpiar desincronización `data.tsx` vs `translations.ts`
- [ ] Sacar JSX de `data.tsx`
- [ ] Convertir email a link `mailto:`
- [ ] Mover stats inline a `translations.ts`
- [ ] Eliminar `import React` innecesario en `experience.tsx`
- [ ] Limpiar `dataSlider` a 8 items
