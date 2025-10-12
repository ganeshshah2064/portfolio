const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Create public directory if it doesn't exist
const publicDir = path.join(__dirname, '../public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Favicon sizes and filenames
const faviconSizes = [
  { size: 16, filename: 'favicon-16x16.png' },
  { size: 32, filename: 'favicon-32x32.png' },
  { size: 48, filename: 'favicon.ico' },
  { size: 192, filename: 'android-chrome-192x192.png' },
  { size: 512, filename: 'android-chrome-512x512.png' },
  { size: 180, filename: 'apple-touch-icon.png' },
  { size: 32, filename: 'favicon.ico' }
];

// Input image path
const inputImage = path.join(__dirname, '../assets/ganesh.jpeg');

// Generate favicon files
async function generateFavicons() {
  try {
    for (const { size, filename } of faviconSizes) {
      const outputPath = path.join(publicDir, filename);
      
      await sharp(inputImage)
        .resize(size, size, {
          fit: 'cover',
          position: 'center'
        })
        .toFile(outputPath);
      
      console.log(`Generated: ${filename} (${size}x${size})`);
    }
    
    // Create site.webmanifest
    const manifest = {
      name: 'Ganesh Shah',
      short_name: 'Ganesh',
      description: 'Personal portfolio of Ganesh Shah',
      start_url: '/',
      display: 'standalone',
      background_color: '#ffffff',
      theme_color: '#000000',
      icons: [
        {
          src: '/android-chrome-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: '/android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ]
    };
    
    fs.writeFileSync(
      path.join(publicDir, 'site.webmanifest'),
      JSON.stringify(manifest, null, 2)
    );
    
    console.log('Generated: site.webmanifest');
    
  } catch (error) {
    console.error('Error generating favicons:', error);
    process.exit(1);
  }
}

generateFavicons();
