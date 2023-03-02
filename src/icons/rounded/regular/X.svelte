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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="m13.292 12 8.482-10.367A1 1 0 1 0 20.225.368L12 10.421 3.774.367a1 1 0 0 0-1.549 1.265L10.708 12 2.226 22.367a1 1 0 1 0 1.549 1.265L12 13.579l8.226 10.053a1 1 0 0 0 1.549-1.265L13.292 12Z"/></svg>
  