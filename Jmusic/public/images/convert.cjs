const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const inputDir = path.join(__dirname); // folder tempat convert.cjs berada

// fungsi rekursif untuk scan semua folder
function convertImagesInDir(dir) {
  fs.readdir(dir, { withFileTypes: true }, (err, files) => {
    if (err) throw err;

    files.forEach(file => {
      const filePath = path.join(dir, file.name);

      if (file.isDirectory()) {
        // kalau folder → scan lagi
        convertImagesInDir(filePath);
      } else {
        // kalau file gambar → convert
        const ext = path.extname(file.name).toLowerCase();
        if (ext === '.jpg' || ext === '.jpeg' || ext === '.png') {
          const outputFile = path.join(dir, path.basename(file.name, ext) + '.webp');

          sharp(filePath)
            .webp({ quality: 80 })
            .toFile(outputFile)
            .then(() => {
              console.log(`✅ Converted: ${filePath} → ${outputFile}`);
              // hapus file asli
              fs.unlinkSync(filePath);
              console.log(`🗑️ Deleted original: ${filePath}`);
            })
            .catch(err => console.error(`❌ Error converting ${filePath}:`, err));
        }
      }
    });
  });
}

// jalankan konversi mulai dari folder "images"
convertImagesInDir(inputDir);
