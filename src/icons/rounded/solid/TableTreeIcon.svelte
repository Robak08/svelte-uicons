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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M24 7H0c0-2.757 2.243-5 5-5h14c2.757 0 5 2.243 5 5Zm0 2v8c0 2.757-2.243 5-5 5H5c-2.757 0-5-2.243-5-5V9h5v7c0 1.103.897 2 2 2h4a1 1 0 1 0 0-2H7v-2h2a1 1 0 1 0 0-2H7V9h17Zm-11 5h2a1 1 0 1 0 0-2h-2a1 1 0 1 0 0 2Zm5 3a1 1 0 0 0-1-1h-2a1 1 0 1 0 0 2h2a1 1 0 0 0 1-1Z"/></svg>
  