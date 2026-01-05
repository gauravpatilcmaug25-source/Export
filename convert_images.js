import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const publicDir = path.resolve('public');
const assetsDir = path.resolve('src/assets');

async function convertImagesInDir(directory) {
    if (!fs.existsSync(directory)) return;

    const files = fs.readdirSync(directory);

    for (const file of files) {
        if (file.match(/\.(png|jpg|jpeg)$/i)) {
            const filePath = path.join(directory, file);
            const stats = fs.statSync(filePath);

            // Check if size > 500KB (500 * 1024 bytes)
            if (stats.size > 500 * 1024) {
                const fileNameNoExt = path.parse(file).name;
                const outputFilePath = path.join(directory, `${fileNameNoExt}.webp`);

                console.log(`Converting ${file} (${(stats.size / 1024).toFixed(2)} KB) to WebP...`);

                try {
                    await sharp(filePath)
                        .webp({ quality: 80 })
                        .toFile(outputFilePath);

                    console.log(`Created ${outputFilePath}`);
                    // Optional: Delete original if you want to enforce replacement, but safer to keep for now unless instructed to delete.
                    // User said "Convert... Update all image imports", usually implies replacing usage.
                    // I will keep originals but the code will use .webp.
                } catch (err) {
                    console.error(`Error converting ${file}:`, err);
                }
            }
        }
    }
}

async function main() {
    await convertImagesInDir(publicDir);
    await convertImagesInDir(assetsDir);
}

main();
