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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-users-alt {customClass}"><path d="M12 16a4 4 0 1 1 4-4 4 4 0 0 1-4 4Zm0-6a2 2 0 1 0 2 2 2 2 0 0 0-2-2Zm6 13a6 6 0 0 0-12 0 1 1 0 0 0 2 0 4 4 0 0 1 8 0 1 1 0 0 0 2 0Zm0-15a4 4 0 1 1 4-4 4 4 0 0 1-4 4Zm0-6a2 2 0 1 0 2 2 2 2 0 0 0-2-2Zm6 13a6.006 6.006 0 0 0-6-6 1 1 0 0 0 0 2 4 4 0 0 1 4 4 1 1 0 0 0 2 0ZM6 8a4 4 0 1 1 4-4 4 4 0 0 1-4 4Zm0-6a2 2 0 1 0 2 2 2 2 0 0 0-2-2ZM2 15a4 4 0 0 1 4-4 1 1 0 0 0 0-2 6.006 6.006 0 0 0-6 6 1 1 0 0 0 2 0Z"/></svg>
  