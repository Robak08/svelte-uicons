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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M6 6.21a1 1 0 0 0 1.41 0L11 2.58V23a1 1 0 0 0 1 1 1 1 0 0 0 1-1V2.59l3.62 3.62a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.41L14.13.88a3 3 0 0 0-4.24 0L6 4.8a1 1 0 0 0 0 1.41Z"/></svg>
  