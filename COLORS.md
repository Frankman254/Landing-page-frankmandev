# Guía de Colores - Sistema de Temas

Este documento explica cómo cambiar los colores de la landing page usando variables CSS.

## 📍 Ubicación de las Variables

Las variables de color están definidas en: **`app/globals.css`**

## 🎨 Variables Disponibles

### Colores Principales

```css
--primary              /* Color principal (botones, enlaces activos) */
--primary-foreground   /* Color del texto sobre elementos primary */
--secondary            /* Color secundario */
--secondary-foreground /* Color del texto sobre elementos secondary */
```

### Colores de Fondo

```css
--background           /* Fondo principal de la página */
--card                 /* Fondo de tarjetas */
--card-bg              /* Fondo personalizado de tarjetas */
--surface              /* Superficie (hover states) */
--surface-hover        /* Superficie en hover */
```

### Colores de Texto

```css
--foreground           /* Color principal del texto */
--text-muted           /* Texto secundario/muted */
--text-secondary       /* Texto secundario */
--muted-foreground     /* Texto sobre fondos muted */
```

### Bordes y Contornos

```css
--border               /* Color de bordes */
--card-border          /* Borde de tarjetas */
--input                /* Borde de inputs */
--ring                 /* Color del ring (focus states) */
```

### Colores de Estado

```css
--destructive          /* Color para acciones destructivas */
--destructive-foreground /* Texto sobre destructive */
```

## 🔄 Cómo Cambiar los Colores

### 1. Modo Claro (Light Mode)

Edita las variables en `:root` dentro de `app/globals.css`:

```css
:root {
  --primary: 221.2 83.2% 53.3%;  /* Cambia estos valores */
  --background: 0 0% 100%;
  /* ... más variables */
}
```

### 2. Modo Oscuro (Dark Mode)

Edita las variables en `.dark` dentro de `app/globals.css`:

```css
.dark {
  --primary: 217.2 91.2% 59.8%;  /* Cambia estos valores */
  --background: 222.2 84% 4.9%;
  /* ... más variables */
}
```

## 📐 Formato de Valores

Los colores usan el formato **HSL (Hue, Saturation, Lightness)**:

```css
--primary: 221.2 83.2% 53.3%;
/*          ↑     ↑     ↑
           Hue  Sat  Light */
```

- **Hue (Matiz)**: 0-360 (rojo=0, verde=120, azul=240)
- **Saturation (Saturación)**: 0-100% (0% = gris, 100% = color puro)
- **Lightness (Luminosidad)**: 0-100% (0% = negro, 100% = blanco)

## 🎯 Ejemplos de Cambios

### Cambiar el Color Principal a Verde

```css
:root {
  --primary: 142 71% 45%;  /* Verde */
}

.dark {
  --primary: 142 71% 55%;  /* Verde más claro en modo oscuro */
}
```

### Cambiar el Color Principal a Rojo

```css
:root {
  --primary: 0 84% 60%;  /* Rojo */
}

.dark {
  --primary: 0 84% 70%;  /* Rojo más claro en modo oscuro */
}
```

### Cambiar el Fondo de Tarjetas

```css
:root {
  --card-bg: 210 40% 98%;  /* Fondo claro */
}

.dark {
  --card-bg: 215 27.9% 16.9%;  /* Fondo oscuro */
}
```

## 🔍 Uso en Componentes

Los colores se usan en los componentes con clases de Tailwind:

```tsx
// Usar color primary
<button className="bg-primary text-primary-foreground">

// Usar color de tarjeta
<div className="bg-card-bg border-card-border">

// Usar texto muted
<p className="text-muted-text">

// Usar superficie
<div className="bg-surface hover:bg-surface-hover">
```

## 📝 Notas Importantes

1. **Siempre define ambos modos**: Asegúrate de cambiar las variables tanto en `:root` como en `.dark`
2. **Formato HSL**: Los valores deben estar en formato HSL sin `hsl()` ni `%`
3. **Reinicia el servidor**: Después de cambiar los colores, reinicia el servidor de desarrollo
4. **Prueba ambos modos**: Verifica que los colores se vean bien en modo claro y oscuro

## 🎨 Paleta Actual (Verde, Plateado y Negro)

### Paleta Principal - Frankman Dev
La paleta está basada en los colores del logo y banner:

**Verde Neón (Primary)**
- Light: `142 76% 50%` - Verde brillante para botones y elementos destacados
- Dark: `142 76% 60%` - Verde más brillante para modo oscuro

**Plateado/Metálico (Secondary)**
- Light: `0 0% 75%` - Gris plateado claro
- Dark: `0 0% 20%` - Gris plateado oscuro

**Negro (Background)**
- Light: `0 0% 100%` - Blanco (fondo claro)
- Dark: `0 0% 0%` - Negro puro (fondo oscuro)

### Otras Paletas Sugeridas

### Azul
- Primary: `221.2 83.2% 53.3%`
- Dark Primary: `217.2 91.2% 59.8%`

### Púrpura
- Primary: `270 70% 60%`
- Dark Primary: `270 70% 70%`

### Naranja
- Primary: `25 95% 53%`
- Dark Primary: `25 95% 63%`
