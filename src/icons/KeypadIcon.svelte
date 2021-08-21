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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 0 24 24" class="evaicon evaicon-keypad {customClass}"><g data-name="Layer 2"><g data-name="keypad"><path d="M5 2a3 3 0 1 0 3 3 3 3 0 0 0-3-3zM12 2a3 3 0 1 0 3 3 3 3 0 0 0-3-3zM19 8a3 3 0 1 0-3-3 3 3 0 0 0 3 3zM5 9a3 3 0 1 0 3 3 3 3 0 0 0-3-3zM12 9a3 3 0 1 0 3 3 3 3 0 0 0-3-3zM19 9a3 3 0 1 0 3 3 3 3 0 0 0-3-3zM5 16a3 3 0 1 0 3 3 3 3 0 0 0-3-3zM12 16a3 3 0 1 0 3 3 3 3 0 0 0-3-3zM19 16a3 3 0 1 0 3 3 3 3 0 0 0-3-3z"/></g></g></svg>
  