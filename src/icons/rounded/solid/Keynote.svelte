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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23 16h-.28l-.86-2.582A4.993 4.993 0 0 0 17.117 10H6.883c-.3 0-.595.028-.883.079V7c0-1.654 1.346-3 3-3h.172A3.004 3.004 0 0 0 12 6h3c1.654 0 3-1.346 3-3s-1.346-3-3-3h-3a3.004 3.004 0 0 0-2.828 2H9C6.243 2 4 4.243 4 7v3.914a4.996 4.996 0 0 0-1.861 2.505L1.28 16h-.279a1 1 0 1 0 0 2H11v4H8a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2h-3v-4h10a1 1 0 1 0 0-2Z"/></svg>
  