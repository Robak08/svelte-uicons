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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M12.35 13h1.32c2.58 0 5.14-.85 7.2-2.4l1.79-1.26c-.94-1.95-2.16-4.05-2.86-4.92C17.36 1.16 13.5-.45 9.45.11c-3.09.42-5.79 2.18-7.5 4.66L12.35 13Zm-1.2 1.6 3.13 9.4H6c-1.66 0-3-1.34-3-3v-.97c0-.89-.26-1.73-.74-2.36A10.968 10.968 0 0 1 .05 9.98C.16 8.77.47 7.6.96 6.53l10.19 8.07Zm12.34-3.4c.31.79.51 1.43.51 1.8v3c0 4.28-3.38 7.79-7.62 7.99l-3-8.99h.28c3.01 0 5.99-.99 8.38-2.78l1.45-1.02Z"/></svg>
  