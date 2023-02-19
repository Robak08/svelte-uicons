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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-binary-lock {customClass}"><path d="M8 4c0-2.21-1.79-4-4-4S0 1.79 0 4v3c0 2.21 1.79 4 4 4s4-1.79 4-4V4ZM6 7c0 1.1-.9 2-2 2s-2-.9-2-2V4c0-1.1.9-2 2-2s2 .9 2 2v3Zm6 7c0 .55-.45 1-1 1-1.1 0-2 .9-2 2v3c0 .57.24 1.11.67 1.49.41.37.45 1 .08 1.41-.2.22-.47.33-.75.33-.24 0-.48-.08-.67-.25A3.987 3.987 0 0 1 7 20v-3c0-2.21 1.79-4 4-4 .55 0 1 .45 1 1ZM9.85 4.15a.996.996 0 0 1 0-1.41L12.29.29c.29-.29.72-.37 1.09-.22.37.15.62.52.62.92V9c0 .55-.45 1-1 1s-1-.45-1-1V3.41l-.74.74a.996.996 0 0 1-1.41 0ZM5 14v9c0 .55-.45 1-1 1s-1-.45-1-1v-6.59l-.74.74a.996.996 0 1 1-1.41-1.41l2.44-2.44c.29-.29.72-.37 1.09-.22.37.15.62.52.62.92Zm17 .56V13c0-2.21-1.79-4-4-4s-4 1.79-4 4v1.56c-1.19.69-2 1.97-2 3.44v2c0 2.21 1.79 4 4 4h4c2.21 0 4-1.79 4-4v-2c0-1.47-.81-2.75-2-3.44ZM16 13c0-1.1.9-2 2-2s2 .9 2 2v1h-4v-1Zm6 7c0 1.1-.9 2-2 2h-4c-1.1 0-2-.9-2-2v-2c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v2Zm-2.5-1c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5Z"/></svg>
  