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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 0 24 24" class="evaicon evaicon-skip-back {customClass}"><g data-name="Layer 2"><path d="M16.45 6.2a2.1 2.1 0 0 0-2.21.26l-5.1 4.21-.14.15V7a1 1 0 0 0-2 0v10a1 1 0 0 0 2 0v-3.82l.14.15 5.1 4.21a2.06 2.06 0 0 0 1.3.46 2.23 2.23 0 0 0 .91-.2 1.76 1.76 0 0 0 1.05-1.59V7.79a1.76 1.76 0 0 0-1.05-1.59z" data-name="skip-back"/></g></svg>
  