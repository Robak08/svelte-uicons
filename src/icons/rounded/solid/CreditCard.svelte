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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M19 3H5a5.006 5.006 0 0 0-5 5h24a5.006 5.006 0 0 0-5-5ZM0 16a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5v-6H0Zm7-.5A1.5 1.5 0 1 1 5.5 14 1.5 1.5 0 0 1 7 15.5"/></svg>
  