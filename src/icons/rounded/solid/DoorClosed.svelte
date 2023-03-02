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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23 22h-3V5c0-2.757-2.243-5-5-5H9C6.243 0 4 2.243 4 5v17H1a1 1 0 1 0 0 2h22a1 1 0 1 0 0-2Zm-7.5-8a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 15.5 14Z"/></svg>
  