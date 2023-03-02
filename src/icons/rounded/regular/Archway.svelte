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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23 21h-1V6.414l1.299-1.298a2.404 2.404 0 0 0 .522-2.627 2.405 2.405 0 0 0-2.228-1.488H2.406A2.402 2.402 0 0 0 .179 2.488a2.406 2.406 0 0 0 .522 2.628L2 6.414V21H1a1 1 0 1 0 0 2h4c1.654 0 3-1.346 3-3v-5c0-2.206 1.794-4 4-4s4 1.794 4 4v5c0 1.654 1.346 3 3 3h4a1 1 0 1 0 0-2ZM2.026 3.254A.392.392 0 0 1 2.406 3h19.188c.239 0 .341.159.38.254s.08.279-.089.448L20.586 5H3.414L2.115 3.702a.392.392 0 0 1-.089-.448ZM18 20v-5c0-3.309-2.691-6-6-6s-6 2.691-6 6v5c0 .551-.448 1-1 1H4V7h16v14h-1c-.552 0-1-.449-1-1Z"/></svg>
  