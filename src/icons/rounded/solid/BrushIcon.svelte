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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M24 10H0V5a5.006 5.006 0 0 1 5-5h5v3a1 1 0 0 0 2 0V0h2v5a1 1 0 0 0 2 0V0h2v7a1 1 0 0 0 2 0V.1A5.009 5.009 0 0 1 24 5zM.3 12A7.011 7.011 0 0 0 7 17h2v4a3 3 0 0 0 6 0v-4h2a7.011 7.011 0 0 0 6.7-5z"/></svg>
  