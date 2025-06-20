# Guía Manual: Replit → Vercel → Online

## Paso 1: Descargar desde Replit

### Opción A: Archivo ZIP Creado
1. En Replit, ve al panel de archivos (Files)
2. Busca el archivo `regulapyme-consulting.zip` 
3. Haz clic derecho → "Download"
4. Guarda en tu computadora

### Opción B: Manual
1. En Replit, abre el panel de archivos
2. Selecciona todo el contenido (Ctrl+A)
3. Copia los archivos uno por uno a una carpeta local

## Paso 2: Crear Cuenta en GitHub

1. Ve a [github.com](https://github.com)
2. Regístrate con tu email
3. Verifica tu cuenta por email

## Paso 3: Crear Repositorio en GitHub

1. Haz clic en "New repository" (botón verde)
2. Nombre: `regulapyme-consulting`
3. Descripción: `RegulaPyme Consulting SpA - Legal Services Website`
4. Marca "Public"
5. Marca "Add a README file"
6. Haz clic en "Create repository"

## Paso 4: Subir Archivos a GitHub

1. En tu repositorio, haz clic en "uploading an existing file"
2. Arrastra todos los archivos del ZIP (excepto node_modules)
3. O usa "choose your files" para seleccionar todo
4. En el commit message escribe: "Initial website upload"
5. Haz clic en "Commit changes"

## Paso 5: Configurar Vercel

1. Ve a [vercel.com](https://vercel.com)
2. Haz clic en "Sign up"
3. Selecciona "Continue with GitHub"
4. Autoriza Vercel a acceder a tus repositorios

## Paso 6: Importar Proyecto en Vercel

1. En Vercel dashboard, haz clic en "New Project"
2. Busca `regulapyme-consulting` en la lista
3. Haz clic en "Import"
4. **Configuración importante:**
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist/public`
   - Install Command: `npm install`

## Paso 7: Variables de Entorno

En Vercel, antes de deployar:
1. Ve a "Environment Variables"
2. Agrega estas variables:

```
NODE_ENV = production
DATABASE_URL = [obtienes esto en paso 8]
SENDGRID_API_KEY = [opcional para emails]
CONTACT_EMAIL = contacto@regulapymeconsulting.cl
```

## Paso 8: Base de Datos (Neon)

1. Ve a [neon.tech](https://neon.tech)
2. Regístrate gratis
3. Crea nuevo proyecto: "regulapyme-db"
4. Copia la "Connection String"
5. Pégala como DATABASE_URL en Vercel

## Paso 9: Deploy

1. En Vercel, haz clic en "Deploy"
2. Espera 3-5 minutos
3. ¡Tu sitio estará online!

## Paso 10: Obtener URL

Vercel te dará una URL como:
`https://regulapyme-consulting.vercel.app`

## Archivos Importantes a Subir

Asegúrate de subir estos archivos/carpetas:
```
📁 client/
📁 server/
📁 shared/
📄 package.json
📄 package-lock.json
📄 vite.config.ts
📄 tsconfig.json
📄 tailwind.config.ts
📄 postcss.config.js
📄 drizzle.config.ts
📄 components.json
```

**NO subas:**
- node_modules/
- dist/
- .cache/
- .git/

## Actualizaciones Futuras

Para actualizar tu sitio:
1. Haz cambios en Replit
2. Descarga nuevamente
3. Sube archivos cambiados a GitHub
4. Vercel redespliega automáticamente

## Solución de Problemas

**Build Error:** Verifica que package.json esté subido
**Database Error:** Revisa que DATABASE_URL esté correcto
**404 Error:** Verifica Output Directory = `dist/public`

¡En 30 minutos tendrás tu sitio online!