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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M2 2a1 1 0 0 1 1-1h4.916a5 5 0 0 1 4.1 2.136l5.114 7.317a1 1 0 1 1-1.641 1.147l-3.473-4.97-8.423 6.177a1 1 0 0 1-1.184-1.614l8.461-6.2-.495-.707A3 3 0 0 0 7.916 3H3a1 1 0 0 1-1-1Zm20.333 18.49A1.991 1.991 0 0 1 21 21a2.248 2.248 0 0 1-2.057-1.333 1 1 0 0 0-1.885 0 2.254 2.254 0 0 1-4.115 0 1 1 0 0 0-1.885 0 2.254 2.254 0 0 1-4.115 0 1 1 0 0 0-1.885 0A2.25 2.25 0 0 1 3 21a2 2 0 0 1-1.333-.511 1 1 0 0 0-1.335 1.489A4 4 0 0 0 3 23a4.379 4.379 0 0 0 3-1.225 4.286 4.286 0 0 0 6 0 4.286 4.286 0 0 0 6 0A4.375 4.375 0 0 0 21 23a3.981 3.981 0 0 0 2.668-1.023 1 1 0 1 0-1.336-1.487ZM3 18a4.379 4.379 0 0 0 3-1.225 4.286 4.286 0 0 0 6 0 4.286 4.286 0 0 0 6 0A4.375 4.375 0 0 0 21 18a3.981 3.981 0 0 0 2.668-1.023 1 1 0 1 0-1.336-1.487A1.991 1.991 0 0 1 21 16a2.248 2.248 0 0 1-2.057-1.333 1 1 0 0 0-1.885 0 2.254 2.254 0 0 1-4.115 0 1 1 0 0 0-1.885 0 2.254 2.254 0 0 1-4.115 0 1 1 0 0 0-1.885 0A2.25 2.25 0 0 1 3 16a2 2 0 0 1-1.333-.511 1 1 0 0 0-1.335 1.489A4 4 0 0 0 3 18ZM18.5 8A2.5 2.5 0 1 0 16 5.5 2.5 2.5 0 0 0 18.5 8Z"/></svg>
  