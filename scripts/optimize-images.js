/**
 * Image Optimization Script for Concrete Surgeons
 *
 * This script compresses all large images in the public folder.
 * It will:
 * 1. Create backups of original images in public/_originals
 * 2. Compress JPEG/JPG images to 80% quality
 * 3. Compress PNG images and convert large ones to optimized PNG
 * 4. Resize images larger than 2000px width
 *
 * Run with: node scripts/optimize-images.js
 */

import sharp from "sharp";
import { readdirSync, statSync, mkdirSync, existsSync, copyFileSync } from "fs";
import { join, extname, basename } from "path";

const PUBLIC_DIR = "public";
const BACKUP_DIR = "public/_originals";
const MAX_WIDTH = 1920; // Max width for images
const JPEG_QUALITY = 80;
const PNG_QUALITY = 80;
const MIN_SIZE_TO_OPTIMIZE = 100 * 1024; // Only optimize files > 100KB

// Image extensions to process
const IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png"];

// Files to skip (like og-image which we want to keep as-is)
const SKIP_FILES = ["og-image.png", "vite.svg", "logo.jpg", "logo1.jpg"];

async function getImageFiles(dir) {
  const files = [];
  const items = readdirSync(dir);

  for (const item of items) {
    const fullPath = join(dir, item);
    const stat = statSync(fullPath);

    if (stat.isDirectory() && item !== "_originals") {
      // Skip backup directory
      continue;
    }

    if (stat.isFile()) {
      const ext = extname(item).toLowerCase();
      if (IMAGE_EXTENSIONS.includes(ext) && !SKIP_FILES.includes(item)) {
        if (stat.size > MIN_SIZE_TO_OPTIMIZE) {
          files.push({
            path: fullPath,
            name: item,
            size: stat.size,
            ext: ext,
          });
        }
      }
    }
  }

  return files;
}

async function optimizeImage(file) {
  const { path, name, size, ext } = file;

  try {
    // Create backup directory if it doesn't exist
    if (!existsSync(BACKUP_DIR)) {
      mkdirSync(BACKUP_DIR, { recursive: true });
    }

    // Backup original
    const backupPath = join(BACKUP_DIR, name);
    if (!existsSync(backupPath)) {
      copyFileSync(path, backupPath);
      console.log(`  📦 Backed up: ${name}`);
    }

    // Get image metadata
    const metadata = await sharp(path).metadata();
    const needsResize = metadata.width > MAX_WIDTH;

    let pipeline = sharp(path);

    // Resize if too large
    if (needsResize) {
      pipeline = pipeline.resize(MAX_WIDTH, null, {
        withoutEnlargement: true,
        fit: "inside",
      });
    }

    // Optimize based on format
    if (ext === ".jpg" || ext === ".jpeg") {
      pipeline = pipeline.jpeg({
        quality: JPEG_QUALITY,
        mozjpeg: true,
      });
    } else if (ext === ".png") {
      pipeline = pipeline.png({
        quality: PNG_QUALITY,
        compressionLevel: 9,
        palette: true,
      });
    }

    // Write optimized image
    const outputBuffer = await pipeline.toBuffer();
    await sharp(outputBuffer).toFile(path);

    // Get new size
    const newSize = statSync(path).size;
    const savings = (((size - newSize) / size) * 100).toFixed(1);
    const oldSizeMB = (size / 1024 / 1024).toFixed(2);
    const newSizeMB = (newSize / 1024 / 1024).toFixed(2);

    console.log(
      `  ✅ ${name}: ${oldSizeMB}MB → ${newSizeMB}MB (${savings}% smaller)`
    );

    return { name, oldSize: size, newSize, savings: size - newSize };
  } catch (error) {
    console.error(`  ❌ Error processing ${name}:`, error.message);
    return { name, error: error.message };
  }
}

async function main() {
  console.log("\n🖼️  Image Optimization Script\n");
  console.log("━".repeat(50));

  // Get all large images
  const images = await getImageFiles(PUBLIC_DIR);

  if (images.length === 0) {
    console.log("No images found that need optimization.");
    return;
  }

  console.log(`Found ${images.length} images to optimize:\n`);

  // Sort by size (largest first)
  images.sort((a, b) => b.size - a.size);

  let totalOldSize = 0;
  let totalNewSize = 0;
  let optimizedCount = 0;

  for (const image of images) {
    const result = await optimizeImage(image);
    if (!result.error) {
      totalOldSize += result.oldSize;
      totalNewSize += result.newSize;
      optimizedCount++;
    }
  }

  console.log("\n" + "━".repeat(50));
  console.log("\n📊 Summary:\n");
  console.log(`   Images processed: ${optimizedCount}/${images.length}`);
  console.log(`   Total before: ${(totalOldSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`   Total after:  ${(totalNewSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(
    `   Total saved:  ${((totalOldSize - totalNewSize) / 1024 / 1024).toFixed(
      2
    )} MB`
  );
  console.log(`\n   Originals backed up to: ${BACKUP_DIR}/`);
  console.log(
    '\n✨ Done! Run "npm run build" to rebuild with optimized images.\n'
  );
}

main().catch(console.error);
