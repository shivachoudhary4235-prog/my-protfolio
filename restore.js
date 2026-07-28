const fs = require('fs');
const readline = require('readline');
const path = 'C:/Users/user/.gemini/antigravity-ide/brain/7a2ca592-a41e-4f86-8a6c-61c121f5925c/.system_generated/logs/transcript_full.jsonl';

async function restoreFiles() {
  const fileStream = fs.createReadStream(path);
  const rl = readline.createInterface({ input: fileStream, crlfDelay: Infinity });
  
  const originalContents = {};
  
  for await (const line of rl) {
    const obj = JSON.parse(line);
    
    // Look for VIEW_FILE which contains the full file content
    if (obj.type === 'VIEW_FILE' && obj.content && obj.content.includes('File Path: ')) {
      const match = obj.content.match(/File Path: `file:\/\/\/(.+?)`/);
      if (match) {
        const filePath = decodeURIComponent(match[1]);
        if (filePath.includes('vibeforge') && !originalContents[filePath]) {
          // Extract content
          // The content format is:
          // ...
          // Showing lines 1 to X
          // The following code has been modified...
          // 1: <line1>
          // 2: <line2>
          // ...
          // The above content shows the entire...
          
          let fileLines = [];
          const lines = obj.content.split('\n');
          let inCode = false;
          
          for (let i = 0; i < lines.length; i++) {
            if (lines[i].startsWith('The following code has been modified to include a line number')) {
              inCode = true;
              continue;
            }
            if (inCode && lines[i].startsWith('The above content shows the entire, complete file contents')) {
              inCode = false;
              break;
            }
            if (inCode && /^\d+: /.test(lines[i])) {
              fileLines.push(lines[i].replace(/^\d+: /, ''));
            }
          }
          
          if (fileLines.length > 0) {
            originalContents[filePath] = fileLines.join('\n');
          }
        }
      }
    }
  }
  
  const targetFiles = [
    "src/app/globals.css",
    "src/components/ui/Button.tsx",
    "src/components/ui/Navbar.tsx",
    "src/components/sections/Hero.tsx",
    "src/components/sections/TrustBar.tsx",
    "src/components/sections/IntegrationMarquee.tsx",
    "src/components/sections/Services.tsx",
    "src/components/sections/Portfolio.tsx",
    "src/components/sections/About.tsx",
    "src/components/sections/Process.tsx",
    "src/components/sections/ROICalculator.tsx",
    "src/components/sections/Pricing.tsx",
    "src/components/sections/FAQ.tsx",
    "src/components/sections/SEOContent.tsx",
    "src/components/sections/Footer.tsx",
    "src/app/privacy/page.tsx",
    "src/app/terms/page.tsx",
    "src/app/about-us/page.tsx",
    "src/app/contact/page.tsx",
    "src/app/error.tsx",
    "src/app/not-found.tsx"
  ];
  
  console.log("Restoring files...");
  for (const file of targetFiles) {
    const fullPath = 'c:/Users/user/Downloads/new protfolio/vibeforge/' + file;
    if (originalContents[fullPath]) {
      fs.writeFileSync(fullPath, originalContents[fullPath]);
      console.log('Restored:', file);
    } else {
      console.log('No original content found in transcript for:', file);
    }
  }
}

restoreFiles().catch(console.error);
