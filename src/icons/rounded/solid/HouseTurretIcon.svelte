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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23 0a1 1 0 0 0-1 1v1h-2V1a1 1 0 1 0-2 0v1h-2V1a1 1 0 1 0-2 0v1h-2V1a1 1 0 1 0-2 0v3a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V1a1 1 0 0 0-1-1Zm-8.918 11.41-3-2.349a4.993 4.993 0 0 0-6.163 0l-3 2.348a4.972 4.972 0 0 0-1.918 3.938v4.152c0 2.481 2.019 4.5 4.5 4.5h7c2.481 0 4.5-2.019 4.5-4.5v-4.152a4.974 4.974 0 0 0-1.918-3.938ZM10 18a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2Zm12-9v11a4.004 4.004 0 0 1-4.295 3.989l-1.519.003a6.473 6.473 0 0 0 1.813-4.492v-4.152a6.962 6.962 0 0 0-2.685-5.512L14.246 9h7.753Z"/></svg>
  