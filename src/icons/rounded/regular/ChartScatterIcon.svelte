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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23 24H2.988c-1.655 0-3-1.346-3-3V1a1 1 0 0 1 2 0v20c0 .552.449 1 1 1H23a1 1 0 1 1 0 2Zm-9-11a1 1 0 1 0 2 0 1 1 0 0 0-2 0Zm6-6a1 1 0 1 0 2 0 1 1 0 0 0-2 0Zm-9 11a1 1 0 1 0 2 0 1 1 0 0 0-2 0Zm9-1a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM9 5a1 1 0 1 0 2 0 1 1 0 0 0-2 0Zm-4 7a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z"/></svg>
  