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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23 9a1 1 0 0 0-1 1v1h-3V1a1 1 0 1 0-2 0v1h-2V1a1 1 0 1 0-2 0v1h-2V1a1 1 0 1 0-2 0v1H7V1a1 1 0 1 0-2 0v10H2v-1a1 1 0 1 0-2 0v9.5C0 21.981 2.019 24 4.5 24H9a1 1 0 0 0 1-1v-4c0-1.103.897-2 2-2s2 .897 2 2v4a1 1 0 0 0 1 1h4.5c2.481 0 4.5-2.019 4.5-4.5V10a1 1 0 0 0-1-1ZM7 4h10v7h-3V8a2 2 0 1 0-4 0v3H7V4Zm12.5 18H16v-3c0-2.206-1.794-4-4-4s-4 1.794-4 4v3H4.5A2.503 2.503 0 0 1 2 19.5V13h20v6.5c0 1.379-1.122 2.5-2.5 2.5Z"/></svg>
  