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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M7 8v8a1 1 0 1 1-2 0V8a1 1 0 1 1 2 0Zm17 0v8c0 2.757-2.243 5-5 5H5c-2.757 0-5-2.243-5-5V8c0-2.757 2.243-5 5-5h14c2.757 0 5 2.243 5 5Zm-2 0c0-1.654-1.346-3-3-3H5C3.346 5 2 6.346 2 8v8c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3V8Z"/></svg>
  