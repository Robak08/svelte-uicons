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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 0 24 24" class="evaicon evaicon-layout {customClass}"><g data-name="Layer 2"><g data-name="layout"><path d="M21 8V6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v2zM3 10v8a3 3 0 0 0 3 3h5V10zM13 10v11h5a3 3 0 0 0 3-3v-8z"/></g></g></svg>
  