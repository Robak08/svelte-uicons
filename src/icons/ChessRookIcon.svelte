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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-chess-rook {customClass}"><path d="M24 8V2a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v2h-3V2a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v2H6V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v6a4.005 4.005 0 0 0 3 3.873V22H2a1 1 0 0 0 0 2h20a1 1 0 0 0 0-2h-1V11.873A4.005 4.005 0 0 0 24 8ZM5 22V11a1 1 0 0 0-1-1 2 2 0 0 1-2-2V2h2v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V2h2v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V2h2v6a2 2 0 0 1-2 2 1 1 0 0 0-1 1v11Zm7-11a3 3 0 0 0-3 3v3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-3a3 3 0 0 0-3-3Zm1 5h-2v-2a1 1 0 0 1 2 0Z"/></svg>
  