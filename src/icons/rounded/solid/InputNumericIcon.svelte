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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M19 3H5C2.243 3 0 5.243 0 8v8c0 2.757 2.243 5 5 5h14c2.757 0 5-2.243 5-5V8c0-2.757-2.243-5-5-5ZM8 16a1 1 0 1 1-2 0v-5.586l-.293.293a.999.999 0 1 1-1.414-1.414l2-2A.999.999 0 0 1 8 8v8Z"/></svg>
  