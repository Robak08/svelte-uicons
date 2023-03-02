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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M.327 12c.029-.093.042-.19.075-.282L3.1 4.291A5.012 5.012 0 0 1 7.8 1h8.4a5.011 5.011 0 0 1 4.7 3.292l2.7 7.426c.033.092.046.189.075.282ZM20 14v2a1 1 0 0 1-2 0v-2H6v2a1 1 0 0 1-2 0v-2H0v2a5 5 0 0 0 3 4.576V22a2 2 0 0 0 4 0v-1h10v1a2 2 0 0 0 4 0v-1.424A5 5 0 0 0 24 16v-2Z"/></svg>
  