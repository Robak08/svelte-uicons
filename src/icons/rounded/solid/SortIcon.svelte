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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M18.873 11.021H5.127a2.126 2.126 0 0 1-1.568-3.56L10.046.872a2.669 2.669 0 0 1 3.939.034l6.431 6.528a2.126 2.126 0 0 1-1.543 3.587ZM12 24.011a2.667 2.667 0 0 1-1.985-.887L3.584 16.6a2.125 2.125 0 0 1 1.543-3.586h13.746a2.125 2.125 0 0 1 1.568 3.558l-6.487 6.589a2.641 2.641 0 0 1-1.954.85Z"/></svg>
  