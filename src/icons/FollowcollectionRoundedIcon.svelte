<script>
  export let size = "100%";
  export let strokeWidth = 0;
  let customClass = "";
  export { customClass as class };
  
  if (size !== "100%") {
    size = size.slice(-1) === 'x' 
    ? size.slice(0, size.length -1) + 'em'
    : parseInt(size) + 'px';
  }
  </script>
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-followcollection {customClass}"><path d="M7 0H4C1.79 0 0 1.79 0 4v3c0 2.21 1.79 4 4 4h3c2.21 0 4-1.79 4-4V4c0-2.21-1.79-4-4-4Zm2 7c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h3c1.1 0 2 .9 2 2v3Zm11 6h-3c-2.21 0-4 1.79-4 4v3c0 2.21 1.79 4 4 4h3c2.21 0 4-1.79 4-4v-3c0-2.21-1.79-4-4-4Zm2 7c0 1.1-.9 2-2 2h-3c-1.1 0-2-.9-2-2v-3c0-1.1.9-2 2-2h3c1.1 0 2 .9 2 2v3ZM7 13H4c-2.21 0-4 1.79-4 4v3c0 2.21 1.79 4 4 4h3c2.21 0 4-1.79 4-4v-3c0-2.21-1.79-4-4-4Zm2 7c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2v-3c0-1.1.9-2 2-2h3c1.1 0 2 .9 2 2v3Zm8.18-10.47c.38.31.85.46 1.32.46s.94-.15 1.32-.46C21.38 8.28 24 5.83 24 3.47c0-1.92-1.46-3.48-3.25-3.48-.85 0-1.65.36-2.25.94-.59-.59-1.39-.94-2.25-.94C14.46-.01 13 1.55 13 3.47c0 2.35 2.62 4.81 4.18 6.06ZM16.25 2c.6 0 1.14.5 1.26 1.17.08.48.5.83.98.83s.9-.35.98-.83c.12-.67.67-1.17 1.27-1.17.69 0 1.25.66 1.25 1.48 0 1.06-1.35 2.83-3.43 4.5a.12.12 0 0 1-.14 0c-2.08-1.67-3.43-3.44-3.43-4.5 0-.81.56-1.48 1.25-1.48Z"/></svg>
  