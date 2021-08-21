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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 0 24 24" class="evaicon evaicon-menu-2-outline.svg {customClass}"><g data-name="Layer 2"><g data-name="menu-2"><circle cx="4" cy="12" r="1"/><rect width="14" height="2" x="7" y="11" rx=".94" ry=".94"/><rect width="18" height="2" x="3" y="16" rx=".94" ry=".94"/><rect width="18" height="2" x="3" y="6" rx=".94" ry=".94"/></g></g></svg>
  