<script>
  export let size = "100%";
  let customClass = "";
  export { customClass as class };
  
  if (size !== "100%") {
    size = size.slice(-1) === 'x' 
    ? size.slice(0, size.length -1) + 'em'
    : parseInt(size) + 'px';
  }
  </script>
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 0 24 24" class="evaicon evaicon-monitor {customClass}"><g data-name="Layer 2"><g data-name="monitor"><path d="M19 3H5a3 3 0 0 0-3 3v5h20V6a3 3 0 0 0-3-3zM2 14a3 3 0 0 0 3 3h6v2H7a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2h-4v-2h6a3 3 0 0 0 3-3v-1H2z"/></g></g></svg>
  