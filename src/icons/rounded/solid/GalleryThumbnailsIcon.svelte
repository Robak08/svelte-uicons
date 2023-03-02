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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M20 15H4c-2.21 0-4-1.79-4-4V4c0-2.21 1.79-4 4-4h16c2.21 0 4 1.79 4 4v7c0 2.21-1.79 4-4 4ZM3.5 24h-1A2.5 2.5 0 0 1 0 21.5v-1A2.5 2.5 0 0 1 2.5 18h1A2.5 2.5 0 0 1 6 20.5v1A2.5 2.5 0 0 1 3.5 24Zm18 0h-1a2.5 2.5 0 0 1-2.5-2.5v-1a2.5 2.5 0 0 1 2.5-2.5h1a2.5 2.5 0 0 1 2.5 2.5v1a2.5 2.5 0 0 1-2.5 2.5Zm-9 0h-1A2.5 2.5 0 0 1 9 21.5v-1a2.5 2.5 0 0 1 2.5-2.5h1a2.5 2.5 0 0 1 2.5 2.5v1a2.5 2.5 0 0 1-2.5 2.5Z"/></svg>
  