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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M16.09 17.87c1.1 1.11 1.2 2.82.11 4.14-.54.65-1.39.97-2.23.97H4.96a3.99 3.99 0 0 1-3.99-4H.96V10.1c0-1.17.61-2.3 1.66-2.81 1.18-.58 2.52-.36 3.45.56l1.47 1.47 7.51-7.44a3 3 0 0 1 4.24 0l2.83 2.83a3 3 0 0 1 0 4.24l-7.5 7.45 1.48 1.47Z"/></svg>
  