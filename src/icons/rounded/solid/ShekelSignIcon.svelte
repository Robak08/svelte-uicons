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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M3 24a1 1 0 0 1-1-1V3c0-1.654 1.346-3 3-3h3c4.411 0 8 3.589 8 8v9c-.005 1.308-1.995 1.307-2 0V8c0-3.309-2.691-6-6-6H5a1 1 0 0 0-1 1v20a1 1 0 0 1-1 1Zm19-8V1c-.005-1.308-1.995-1.307-2 0v15c0 3.309-2.691 6-6 6h-3a1 1 0 0 1-1-1V7c-.005-1.308-1.995-1.307-2 0v14c0 1.654 1.346 3 3 3h3c4.411 0 8-3.589 8-8Z"/></svg>
  