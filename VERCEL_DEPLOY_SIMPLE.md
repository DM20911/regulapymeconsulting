# Despliegue Fácil a Vercel - RegulaPyme Consulting

## Método 1: Desde Replit a GitHub (Más Fácil)

### Paso 1: Conectar con GitHub
1. En Replit, busca el ícono de GitHub en la barra lateral izquierda
2. O ve a la pestaña "Version Control" 
3. Haz clic en "Connect to GitHub"
4. Autoriza la conexión
5. Crea un nuevo repositorio llamado "regulapyme-consulting"

### Paso 2: Push a GitHub
1. En Replit, ve a la pestaña de Git/Version Control
2. Haz commit de todos los cambios
3. Push al repositorio de GitHub

### Paso 3: Vercel Deploy
1. Ve a [vercel.com](https://vercel.com)
2. Sign up con tu cuenta de GitHub
3. Haz clic en "New Project"
4. Selecciona tu repositorio "regulapyme-consulting"
5. Configuración automática:
   - Build Command: `npm run build`
   - Output Directory: `dist/public`

## Método 2: Crear Archivos de Configuración

Si Vercel no detecta automáticamente la configuración, crea estos archivos:

### vercel.json
```json
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/server/index.js"
    }
  ],
  "outputDirectory": "dist/public"
}
```

### build.sh (script de build)
```bash
#!/bin/bash
npm install
npm run build
```

## Variables de Entorno Necesarias

En Vercel Settings > Environment Variables, agrega:

```
NODE_ENV=production
DATABASE_URL=[tu_url_de_neon_database]
SENDGRID_API_KEY=[tu_clave_sendgrid]
CONTACT_EMAIL=contacto@regulapymeconsulting.cl
```

## Base de Datos: Neon Setup

1. Ve a [neon.tech](https://neon.tech)
2. Crea cuenta gratis
3. Nuevo proyecto: "regulapyme-db"
4. Copia la connection string
5. Pégala en Vercel como DATABASE_URL

## URL Final

Tu sitio estará disponible en:
`https://regulapyme-consulting.vercel.app`

## Actualizaciones Futuras

1. Haz cambios en Replit
2. Push a GitHub desde Replit
3. Vercel automáticamente redespliega

¡Tu sitio estará online en 5-10 minutos!