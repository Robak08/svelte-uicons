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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-burger-glass {customClass}"><path d="M19.17 12h-2.23l.87-8.66A2.991 2.991 0 0 0 14.83 0h-12C1.97.01 1.16.38.59 1.01a2.98 2.98 0 0 0-.74 2.33L1.47 19.5c.26 2.56 2.4 4.5 4.98 4.5h12.73c2.76 0 5-2.24 5-5v-2c0-2.76-2.24-5-5-5Zm3 5h-12c0-1.65 1.35-3 3-3h6c1.65 0 3 1.35 3 3ZM2.08 2.35c.19-.22.46-.33.75-.33h12c.29-.01.55.11.75.32.19.22.28.49.25.79L15.54 6H2.12l-.29-2.88c-.03-.29.06-.56.25-.78ZM3.46 19.3 2.32 8h13.01l-.4 4h-1.76c-2.76 0-5 2.24-5 5v2c0 1.13.39 2.16 1.03 3H6.45c-1.55 0-2.83-1.16-2.99-2.7ZM19.17 22h-6c-1.65 0-3-1.35-3-3h3.7l2.75 1.83c.17.11.36.17.55.17s.39-.06.55-.17L20.47 19h1.7c0 1.65-1.35 3-3 3Z"/></svg>
  