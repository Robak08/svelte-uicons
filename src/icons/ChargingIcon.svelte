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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 0 24 24" class="evaicon evaicon-charging {customClass}"><g data-name="Layer 2"><g data-name="charging"><path d="M11.28 13H7a1 1 0 0 1-.86-.5 1 1 0 0 1 0-1L9.28 6H4.17A2.31 2.31 0 0 0 2 8.43v7.14A2.31 2.31 0 0 0 4.17 18h4.25z"/><path d="M15.83 6h-4.25l-2.86 5H13a1 1 0 0 1 .86.5 1 1 0 0 1 0 1L10.72 18h5.11A2.31 2.31 0 0 0 18 15.57V8.43A2.31 2.31 0 0 0 15.83 6zM21 9a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0v-4a1 1 0 0 0-1-1z"/></g></g></svg>
  