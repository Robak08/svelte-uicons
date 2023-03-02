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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><g fill-rule="evenodd" clip-rule="evenodd"><path d="M19.364 12.225 11.999 16.577 4.631 12.225 11.999 0z"/><path d="M19.369 13.62 11.999 24 4.631 13.62 11.999 17.973z"/></g></svg>
  