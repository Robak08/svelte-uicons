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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><g fill-rule="evenodd" clip-rule="evenodd"><path d="M15.385.48c-4.765 0-8.641 3.88-8.641 8.65 0 4.755 3.877 8.624 8.641 8.624 4.75 0 8.615-3.869 8.615-8.624C24 4.36 20.136.48 15.385.48zM0 23.52h4.219V.48H0v23.04z"/></g></svg>
  