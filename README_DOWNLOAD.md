# RegulaPyme Consulting - Descargar y Desplegar

## Descargar desde Replit

**Método Directo:**
1. En Replit, ve al explorador de archivos
2. Selecciona todos los archivos (excepto node_modules)
3. Copia archivo por archivo a tu computadora local

**Archivos principales que necesitas:**
```
📁 client/ (toda la carpeta)
📁 server/ (toda la carpeta)  
📁 shared/ (toda la carpeta)
📄 package.json
📄 package-lock.json
📄 vite.config.ts
📄 tsconfig.json
📄 tailwind.config.ts
📄 postcss.config.js
📄 drizzle.config.ts
📄 components.json
📄 DEPLOYMENT_GUIDE.md
```

## Subir a GitHub

1. github.com → crear cuenta
2. "New repository" → nombre: `regulapyme-consulting`
3. "Upload files" → arrastra todos los archivos
4. "Commit changes"

## Desplegar en Vercel

1. vercel.com → registrarse con GitHub
2. "New Project" → seleccionar repositorio
3. Configuración:
   - Framework: Vite
   - Build: `npm run build`
   - Output: `dist/public`
4. Variables:
   - `DATABASE_URL` (desde neon.tech)
   - `CONTACT_EMAIL=contacto@regulapymeconsulting.cl`

## Base de Datos

1. neon.tech → cuenta gratis
2. Crear proyecto PostgreSQL
3. Copiar connection string
4. Agregar como DATABASE_URL en Vercel

Tu sitio estará en: `regulapyme-consulting.vercel.app`