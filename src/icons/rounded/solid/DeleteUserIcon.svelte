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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M3 6a6 6 0 1 1 6 6 6.006 6.006 0 0 1-6-6zm6 8a9.01 9.01 0 0 0-9 9 1 1 0 0 0 1 1h16a1 1 0 0 0 1-1 9.01 9.01 0 0 0-9-9zm12.414-2 2.293-2.293a1 1 0 0 0-1.414-1.414L20 10.586l-2.293-2.293a1 1 0 0 0-1.414 1.414L18.586 12l-2.293 2.293a1 1 0 1 0 1.414 1.414L20 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414z"/></svg>
  