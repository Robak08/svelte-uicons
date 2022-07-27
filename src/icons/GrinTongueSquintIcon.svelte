<script>
  export let size = "100%";
  export let strokeWidth = 0;
  let customClass = "";
  export { customClass as class };
  
  if (size !== "100%") {
    size = size.slice(-1) === 'x' 
    ? size.slice(0, size.length -1) + 'em'
    : parseInt(size) + 'px';
  }
  </script>
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-grin-tongue-squint {customClass}"><path d="M16 14H8a1 1 0 0 0 0 2h1v.6c.133 4.495 5.869 4.49 6 0V16h1a1 1 0 0 0 0-2Zm-3 2.6c-.062 1.839-1.938 1.837-2 0V16h2Zm4.555-8.768L15.8 9l1.752 1.168a1 1 0 1 1-1.11 1.664l-3-2a1.007 1.007 0 0 1 0-1.664l3-2a1 1 0 0 1 1.11 1.664ZM7 12a1 1 0 0 1-.556-1.832L8.2 9 6.445 7.832a1 1 0 1 1 1.11-1.664l3 2a1.007 1.007 0 0 1 0 1.664l-3 2A1 1 0 0 1 7 12Zm5-12A12.013 12.013 0 0 0 0 12c.6 15.9 23.4 15.893 24 0A12.013 12.013 0 0 0 12 0Zm0 22A10.011 10.011 0 0 1 2 12c.5-13.248 19.5-13.244 20 0a10.011 10.011 0 0 1-10 10Z"/></svg>
  