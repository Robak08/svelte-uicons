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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 0 24 24" class="evaicon evaicon-slash-outline {customClass}"><g data-name="Layer 2"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm8 10a7.92 7.92 0 0 1-1.69 4.9L7.1 5.69A7.92 7.92 0 0 1 12 4a8 8 0 0 1 8 8zM4 12a7.92 7.92 0 0 1 1.69-4.9L16.9 18.31A7.92 7.92 0 0 1 12 20a8 8 0 0 1-8-8z" data-name="slash"/></g></svg>
  