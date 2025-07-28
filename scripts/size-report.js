#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function getFileSize(filePath) {
  const stats = fs.statSync(filePath);
  return {
    bytes: stats.size,
    kb: (stats.size / 1024).toFixed(2),
    gzipped: getGzippedSize(filePath)
  };
}

function getGzippedSize(filePath) {
  try {
    const result = execSync(`gzip -c "${filePath}" | wc -c`, { encoding: 'utf8' });
    const bytes = parseInt(result.trim());
    return {
      bytes,
      kb: (bytes / 1024).toFixed(2)
    };
  } catch (error) {
    return { bytes: 0, kb: '0.00' };
  }
}

function analyzeBundle() {
  const distPath = path.join(__dirname, '../dist');
  
  if (!fs.existsSync(distPath)) {
    console.error('❌ Dist folder not found. Run npm run build first.');
    process.exit(1);
  }

  const files = fs.readdirSync(distPath).filter(file => 
    file.endsWith('.js') || file.endsWith('.mjs') || file.endsWith('.css')
  );

  console.log('📦 Bundle Size Analysis\n');
  console.log('┌─────────────────────────────────────────────────────┐');
  console.log('│                  File Size Report                  │');
  console.log('├─────────────────────────────────────────────────────┤');

  let totalSize = 0;
  let totalGzipped = 0;

  files.forEach(file => {
    const filePath = path.join(distPath, file);
    const size = getFileSize(filePath);
    
    totalSize += size.bytes;
    totalGzipped += size.gzipped.bytes;

    const fileType = file.includes('index.mjs') ? '📄 ESM' : 
                    file.includes('index.js') ? '📄 CJS' :
                    file.includes('.css') ? '🎨 CSS' : '📄 File';
    
    console.log(`│ ${fileType.padEnd(8)} ${file.padEnd(20)} │ ${size.kb.padStart(8)} KB │ ${size.gzipped.kb.padStart(8)} KB gz │`);
  });

  console.log('├─────────────────────────────────────────────────────┤');
  console.log(`│ 📊 Total                          │ ${(totalSize/1024).toFixed(2).padStart(8)} KB │ ${(totalGzipped/1024).toFixed(2).padStart(8)} KB gz │`);
  console.log('└─────────────────────────────────────────────────────┘\n');

  // Size recommendations
  const totalKb = totalSize / 1024;
  if (totalKb > 100) {
    console.log('⚠️  Warning: Bundle size is quite large (>100KB)');
  } else if (totalKb > 50) {
    console.log('💛 Notice: Bundle size is moderate (>50KB)');
  } else {
    console.log('✅ Great: Bundle size is optimal (<50KB)');
  }

  // Generate JSON report for CI
  const report = {
    timestamp: new Date().toISOString(),
    total: {
      bytes: totalSize,
      kb: (totalSize / 1024).toFixed(2),
      gzipped: {
        bytes: totalGzipped,
        kb: (totalGzipped / 1024).toFixed(2)
      }
    },
    files: files.map(file => {
      const filePath = path.join(distPath, file);
      const size = getFileSize(filePath);
      return {
        name: file,
        size: size.bytes,
        sizeKb: size.kb,
        gzipped: size.gzipped.bytes,
        gzippedKb: size.gzipped.kb
      };
    })
  };

  fs.writeFileSync(
    path.join(distPath, 'size-report.json'),
    JSON.stringify(report, null, 2)
  );

  console.log('\n📄 Detailed report saved to dist/size-report.json');
  console.log('🔍 Visual analysis available at dist/bundle-analysis.html');
}

analyzeBundle();