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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M24 16.5v.5H9v-.5c0-2.49 2.01-4.5 4.5-4.5h6c2.49 0 4.5 2.01 4.5 4.5Zm-5.8 4.33c-.17.11-.36.17-.55.17s-.39-.06-.55-.17L14.35 19H9.01v.5c0 2.49 2.01 4.5 4.5 4.5h6c2.49 0 4.5-2.01 4.5-4.5V19h-3.05l-2.75 1.83ZM7 19.5v-3a6.5 6.5 0 0 1 2.39-5.03l1.6-8.65c.1-.54.62-.89 1.18-.8.26.04.49.19.65.41.15.22.21.48.17.74l-1.29 7.1c.57-.17 1.18-.26 1.8-.26h3.84l.54-1.93c.46-1.7-.54-3.48-2.24-3.95-.25-.07-.52-.1-.78-.1l.09-.5c.13-.79-.05-1.59-.51-2.24S13.29.18 12.48.04c-1.19-.21-2.35.34-2.99 1.29A3.006 3.006 0 0 0 6.5.04c-.79.13-1.48.57-1.94 1.22s-.64 1.45-.5 2.29l.1.46c-.27 0-.53.04-.8.11-1.7.48-2.71 2.25-2.24 3.96l1.14 4.02c-.61.16-1.16.5-1.57.99-.58.7-.81 1.61-.63 2.5L.94 20a5.01 5.01 0 0 0 4.9 4.02h3A6.466 6.466 0 0 1 7 19.5ZM4.3 12 3.04 7.54c-.18-.65.21-1.32.85-1.5.24-.07.48-.05.71.02l1.3 5.93H4.29Z"/></svg>
  