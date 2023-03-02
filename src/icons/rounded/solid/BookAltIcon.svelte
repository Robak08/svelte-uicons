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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M22.2 2.163a5 5 0 0 0-4.157-1.069l-1.764.432A4 4 0 0 0 13 5.461v15.467a6.909 6.909 0 0 1-2 0V5.461a3.981 3.981 0 0 0-3.226-3.923L5.9 1.082A5 5 0 0 0 0 6v10.793a5 5 0 0 0 4.105 4.919l6.286 1.143a9 9 0 0 0 3.218 0l6.291-1.143a5 5 0 0 0 4.1-4.919V6a4.983 4.983 0 0 0-1.8-3.837z"/></svg>
  