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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 0 24 24" class="evaicon evaicon-person-remove {customClass}"><g data-name="Layer 2"><g data-name="person-remove"><path d="M21 6h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2zM10 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4zM16 21a1 1 0 0 0 1-1 7 7 0 0 0-14 0 1 1 0 0 0 1 1"/></g></g></svg>
  