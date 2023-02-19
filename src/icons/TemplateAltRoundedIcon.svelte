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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-template-alt {customClass}"><path d="m19.95 5.54-3.48-3.48A6.96 6.96 0 0 0 11.52.01H7C4.24 0 2 2.24 2 5v14c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5v-8.51c0-1.87-.73-3.63-2.05-4.95Zm-1.41 1.41c.32.32.59.67.81 1.05h-4.34c-.55 0-1-.45-1-1V2.66c.38.22.73.49 1.05.81l3.48 3.48ZM20 19c0 1.65-1.35 3-3 3H7c-1.65 0-3-1.35-3-3V5c0-1.65 1.35-3 3-3h4.51c.16 0 .33 0 .49.02V7c0 1.65 1.35 3 3 3h4.98c.02.16.02.32.02.49V19Zm-10 0c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1v-1c0-.55.45-1 1-1s1 .45 1 1h1c.55 0 1 .45 1 1Zm8-1v1c0 .55-.45 1-1 1h-2c-.55 0-1-.45-1-1s.45-1 1-1h1c0-.55.45-1 1-1s1 .45 1 1Zm0-5v1c0 .55-.45 1-1 1s-1-.45-1-1h-1c-.55 0-1-.45-1-1s.45-1 1-1h2c.55 0 1 .45 1 1Zm-8 0c0 .55-.45 1-1 1H8c0 .55-.45 1-1 1s-1-.45-1-1v-1c0-.55.45-1 1-1h2c.55 0 1 .45 1 1Zm0-4c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1s.45-1 1-1h2c.55 0 1 .45 1 1Z"/></svg>
  