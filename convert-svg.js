const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function convertSvgToPng() {
  const svgPath = path.join(__dirname, 'public', 'images', 'azure-sentinel-power-bi-featured.svg');
  const pngPath = path.join(__dirname, 'public', 'images', 'azure-sentinel-power-bi-featured.png');
  
  try {
    const svgBuffer = fs.readFileSync(svgPath);
    
    await sharp(svgBuffer)
      .png({
        quality: 90,
        compressionLevel: 6
      })
      .resize(1200, 630)
      .toFile(pngPath);
    
    console.log('✅ Successfully converted SVG to PNG!');
    console.log(`📁 PNG saved to: ${pngPath}`);
  } catch (error) {
    console.error('❌ Error converting SVG to PNG:', error);
  }
}

convertSvgToPng();
