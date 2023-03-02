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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="m19.95 5.54-3.49-3.49A6.96 6.96 0 0 0 11.51 0H7C4.24 0 2 2.24 2 5v14c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5v-8.51c0-1.87-.73-3.63-2.05-4.95Zm-1.41 1.41c.32.32.59.67.81 1.05h-4.34c-.55 0-1-.45-1-1V2.66c.38.22.73.49 1.05.81l3.49 3.49ZM20 19c0 1.65-1.35 3-3 3H7c-1.65 0-3-1.35-3-3V5c0-1.65 1.35-3 3-3h4.51c.16 0 .33 0 .49.02V7c0 1.65 1.35 3 3 3h4.98c.02.16.02.32.02.49V19Zm-10 1c-.55 0-1-.45-1-1v-5c0-1.1.9-2 2-2h1c1.65 0 3 1.35 3 3s-1.35 3-3 3h-1v1c0 .55-.45 1-1 1Zm1-4h1c.55 0 1-.45 1-1s-.45-1-1-1h-1v2Z"/></svg>
  