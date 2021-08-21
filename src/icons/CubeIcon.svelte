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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 0 24 24" class="evaicon evaicon-cube {customClass}"><g data-name="Layer 2"><g data-name="cube"><path d="M11.25 11.83 3 8.36v7.73a1.69 1.69 0 0 0 1 1.52L11.19 21h.06zM12 10.5l8.51-3.57a1.62 1.62 0 0 0-.51-.38l-7.2-3.37a1.87 1.87 0 0 0-1.6 0L4 6.55a1.62 1.62 0 0 0-.51.38zM12.75 11.83V21h.05l7.2-3.39a1.69 1.69 0 0 0 1-1.51V8.36z"/></g></g></svg>
  