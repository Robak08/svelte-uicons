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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M19 0H5a5.006 5.006 0 0 0-5 5v14a5.006 5.006 0 0 0 5 5v-3a7 7 0 0 1 14 0v3a5.006 5.006 0 0 0 5-5V5a5.006 5.006 0 0 0-5-5Zm-7 12a4 4 0 1 1 4-4 4 4 0 0 1-4 4Z"/><circle cx="12" cy="8" r="2"/><path d="M12 16a5.006 5.006 0 0 0-5 5v3h10v-3a5.006 5.006 0 0 0-5-5Z"/></svg>
  