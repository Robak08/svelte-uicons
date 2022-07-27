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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-gift {customClass}"><path d="M20 7h-1.738A5.137 5.137 0 0 0 20 3a1 1 0 0 0-2 0c0 2.622-2.371 3.53-4.174 3.841A9.332 9.332 0 0 0 15 3a3 3 0 0 0-6 0 9.332 9.332 0 0 0 1.174 3.841C8.371 6.53 6 5.622 6 3a1 1 0 0 0-2 0 5.137 5.137 0 0 0 1.738 4H4a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2v5a5.006 5.006 0 0 0 5 5h10a5.006 5.006 0 0 0 5-5v-5a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4Zm-8-5a1 1 0 0 1 1 1 7.71 7.71 0 0 1-1 3.013A7.71 7.71 0 0 1 11 3a1 1 0 0 1 1-1ZM2 11a2 2 0 0 1 2-2h7v3H2Zm2 8v-5h7v8H7a3 3 0 0 1-3-3Zm16 0a3 3 0 0 1-3 3h-4v-8h7Zm-7-7V9h7a2 2 0 0 1 2 2v1Z"/></svg>
  