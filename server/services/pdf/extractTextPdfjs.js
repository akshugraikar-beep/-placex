import fs from 'fs';
import pdfjsLib from 'pdfjs-dist';
import logger from '../../utils/logger.js';

const { getDocument } = pdfjsLib;

// Polyfill browser APIs required by pdfjs-dist in Node.js environment
// (canvas package removed - these stubs are sufficient for text extraction)
if (!global.DOMMatrix) {
  global.DOMMatrix = class DOMMatrix {
    constructor() { this.a=1;this.b=0;this.c=0;this.d=1;this.e=0;this.f=0; }
  };
}
if (!global.ImageData) {
  global.ImageData = class ImageData {
    constructor(w, h) { this.width=w; this.height=h; this.data=new Uint8ClampedArray(w*h*4); }
  };
}
if (!global.Path2D) {
  global.Path2D = class Path2D {};
}

export async function extractPdfText(filePath) {
  logger.debug(`[extractPdfText] Starting extraction for: ${filePath}`);
  try {
    const data = new Uint8Array(fs.readFileSync(filePath));
    const pdf = await getDocument({ data }).promise;

    let textContent = "";
    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const content = await page.getTextContent();
      const strings = content.items.map(item => item.str);
      textContent += strings.join(" ") + "\n";
    }

    logger.debug(`[extractPdfText] Extraction complete.`);
    return textContent.trim();
  } catch (err) {
    logger.error(`[extractPdfText] Error:`, err);
    throw new Error("Failed to parse PDF");
  }
}
