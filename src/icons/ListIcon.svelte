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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 0 24 24" class="evaicon evaicon-list {customClass}"><g data-name="Layer 2"><g data-name="list"><circle cx="4" cy="7" r="1"/><circle cx="4" cy="12" r="1"/><circle cx="4" cy="17" r="1"/><rect width="14" height="2" x="7" y="11" rx=".94" ry=".94"/><rect width="14" height="2" x="7" y="16" rx=".94" ry=".94"/><rect width="14" height="2" x="7" y="6" rx=".94" ry=".94"/></g></g></svg>
  