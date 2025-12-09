# 🚀 Guía de Deploy a GitHub Pages

## Pasos para deployar el portafolio

### 1. Instalar gh-pages

```bash
npm install --save-dev gh-pages
```

### 2. Actualizar `package.json`

Agrega estas líneas a tu `package.json`:

```json
{
  "homepage": "https://gagalvez.github.io/gagalvezdev.io",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

### 3. Actualizar `vite.config.js`

Agrega el `base` para que las rutas funcionen correctamente:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/gagalvezdev.io/'
})
```

### 4. Hacer commit de los cambios

```bash
git add .
git commit -m "Configure GitHub Pages deployment"
git push origin main
```

### 5. Deployar

```bash
npm run deploy
```

Este comando:
- Ejecuta `npm run build` automáticamente
- Crea una rama `gh-pages`
- Sube el contenido de `dist/` a esa rama

### 6. Configurar GitHub Pages

1. Ve a tu repositorio en GitHub: `https://github.com/gagalvez/gagalvezdev.io`
2. Ve a **Settings** → **Pages**
3. En **Source**, selecciona:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
4. Click en **Save**

### 7. Acceder a tu sitio

Tu portafolio estará disponible en:
**https://gagalvez.github.io/gagalvezdev.io/**

---

## 📝 Comandos útiles

```bash
# Desarrollo local
npm run dev

# Build de producción
npm run build

# Preview del build
npm run preview

# Deploy a GitHub Pages
npm run deploy
```

---

## 🔄 Actualizar el sitio

Cada vez que hagas cambios:

```bash
git add .
git commit -m "Descripción de los cambios"
git push origin main
npm run deploy
```

---

## ⚠️ Notas importantes

- El deploy puede tardar 1-2 minutos en reflejarse
- Asegúrate de que la rama `gh-pages` esté configurada en GitHub Pages
- Si usas un dominio personalizado, configúralo en **Settings** → **Pages** → **Custom domain**
