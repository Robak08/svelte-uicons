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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M16 13h7a1 1 0 0 1 0 2h-5v2h5a1 1 0 0 1 0 2h-5v2h5.576A5.003 5.003 0 0 1 19 24h-2a1 1 0 0 1-1-1V13ZM0 15h6v2H0v2h6v2H.424A5.003 5.003 0 0 0 5 24h2a1 1 0 0 0 1-1V13H0v2Zm24-5.276V10s0 1-1 1H1c-1 0-1-1-1-1v-.276a5 5 0 0 1 2.204-4.145L9.203.855a4.999 4.999 0 0 1 5.594 0L20 4.366V2a1 1 0 1 1 2 0v3.724c1.256.942 2 2.418 2 4ZM13.5 6.5a1.5 1.5 0 1 0-3.001.001A1.5 1.5 0 0 0 13.5 6.5Z"/></svg>
  