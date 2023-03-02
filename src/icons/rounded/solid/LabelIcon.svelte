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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M2 7.177V19a5.006 5.006 0 0 0 5 5h10a5.006 5.006 0 0 0 5-5V7.177a3 3 0 0 0-1.543-2.622L12.486.126a1 1 0 0 0-.972 0L3.543 4.555A3 3 0 0 0 2 7.177ZM12 5.5A1.5 1.5 0 1 1 10.5 7 1.5 1.5 0 0 1 12 5.5Z"/></svg>
  