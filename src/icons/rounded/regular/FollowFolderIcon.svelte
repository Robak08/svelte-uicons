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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M19 2h-6.53c-.15 0-.31-.04-.45-.11L8.87.32C8.46.11 7.99 0 7.53 0H5C2.24 0 0 2.24 0 5v12c0 2.76 2.24 5 5 5h5c.55 0 1-.45 1-1s-.45-1-1-1H5c-1.65 0-3-1.35-3-3V8h20v2c0 .55.45 1 1 1s1-.45 1-1V7c0-2.76-2.24-5-5-5ZM2 5c0-1.65 1.35-3 3-3h2.53c.15 0 .31.04.45.11l3.16 1.58c.41.21.88.32 1.34.32h6.53c1.3 0 2.42.84 2.83 2H2v-1Zm18.5 8c-.95 0-1.84.42-2.5 1.1-.65-.68-1.54-1.1-2.5-1.1-1.93 0-3.5 1.68-3.5 3.75 0 2.85 3.52 5.89 4.6 6.76.41.33.9.49 1.4.49s1-.16 1.4-.49c1.08-.87 4.6-3.91 4.6-6.76 0-2.07-1.57-3.75-3.5-3.75Zm-2.35 8.95a.24.24 0 0 1-.3 0C16 20.46 14 18.2 14 16.75c0-.96.67-1.75 1.5-1.75.72 0 1.37.6 1.51 1.4.08.48.5.83.98.83s.9-.35.98-.83c.14-.8.8-1.4 1.52-1.4.83 0 1.5.79 1.5 1.75 0 1.45-2 3.71-3.85 5.2Z"/></svg>
  