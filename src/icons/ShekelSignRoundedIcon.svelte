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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-shekel-sign {customClass}"><path d="M8 2H5a1 1 0 0 0-1 1v20a1 1 0 1 1-2 0V3c0-1.654 1.346-3 3-3h3c4.411 0 8 3.589 8 8v9a1 1 0 1 1-2 0V8c0-3.309-2.691-6-6-6Zm13-2a1 1 0 0 0-1 1v15c0 3.309-2.691 6-6 6h-3a1 1 0 0 1-1-1V7a1 1 0 1 0-2 0v14c0 1.654 1.346 3 3 3h3c4.411 0 8-3.589 8-8V1a1 1 0 0 0-1-1Z"/></svg>
  