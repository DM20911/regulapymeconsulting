# Paso a Paso: Replit → Vercel

## 1. Descargar desde Replit

He creado el archivo `regulapyme-consulting.tar.gz` en tu proyecto.

**Para descargarlo:**
1. Ve al panel de archivos en Replit
2. Busca `regulapyme-consulting.tar.gz`
3. Haz clic derecho → "Download"
4. Extrae el archivo en tu computadora

## 2. GitHub Setup

**Crear repositorio:**
1. Ve a github.com → Sign up
2. Clic en "New repository"
3. Nombre: `regulapyme-consulting`
4. Público, con README
5. "Create repository"

**Subir archivos:**
1. En GitHub: "uploading an existing file"
2. Arrastra TODOS los archivos extraídos
3. Commit message: "Initial upload"
4. "Commit changes"

## 3. Vercel Deploy

**Setup:**
1. vercel.com → "Sign up" con GitHub
2. "New Project" → selecciona `regulapyme-consulting`
3. Framework: `Vite`
4. Build Command: `npm run build`
5. Output Directory: `dist/public`

**Variables de entorno:**
```
NODE_ENV=production
DATABASE_URL=[neon database url]
CONTACT_EMAIL=contacto@regulapymeconsulting.cl
```

## 4. Base de Datos

1. neon.tech → registro gratis
2. Nuevo proyecto: "regulapyme-db"
3. Copia connection string
4. Pegar en Vercel como DATABASE_URL

## 5. Deploy Final

Clic "Deploy" en Vercel → tu sitio estará en:
`regulapyme-consulting.vercel.app`

¡Listo en 20 minutos!