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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M13.118.059a11.972 11.972 0 0 1 10.823 10.823A9.536 9.536 0 0 1 15.8 8.2 9.532 9.532 0 0 1 13.118.059zM22.552 13A11.529 11.529 0 0 1 11.106.048 11.941 11.941 0 0 0 .047 11.124a11.373 11.373 0 0 1 12.829 12.828 11.938 11.938 0 0 0 11.075-11.046 11.563 11.563 0 0 1-1.399.094zM8.239 15.761A9.413 9.413 0 0 0 .06 13.136a11.975 11.975 0 0 0 10.8 10.8 9.408 9.408 0 0 0-2.621-8.175z"/></svg>
  