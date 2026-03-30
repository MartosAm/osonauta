import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

const ASSETS_DIR = path.join(process.cwd(), 'src/assets');

async function optimizeImages() {
  try {
    const files = await fs.readdir(ASSETS_DIR, { recursive: true });
    
    for (const file of files) {
      if (file.match(/\.(png|jpe?g)$/i)) {
        const filePath = path.join(ASSETS_DIR, file);
        // Evitamos intentar procesar carpetas si por error hacen match, 
        // aunque con el regex es raro. Verificamos que sea archivo:
        const stat = await fs.stat(filePath);
        if (!stat.isFile()) continue;

        const fileExt = path.extname(file);
        const relativeFilePath = file.substring(0, file.length - fileExt.length);
        const newFilePath = path.join(ASSETS_DIR, `${relativeFilePath}.webp`);

        console.log(`Convirtiendo: ${file}...`);
        
        await sharp(filePath)
          .webp({ quality: 80 })
          .toFile(newFilePath);

        console.log(`✅ Creado: ${relativeFilePath}.webp`);
        await fs.unlink(filePath); // Eliminar original
      }
    }
    console.log('¡Todas las imágenes fueron convertidas a WebP!');
  } catch (err) {
    console.error('Error al procesar imágenes:', err);
  }
}

optimizeImages();
