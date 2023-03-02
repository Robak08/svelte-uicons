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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0Zm5.665 16.587-.522.6a2.804 2.804 0 0 1-2 .813C11.429 18 6 12.857 6 8.857c0-.723.261-1.449.813-2l.6-.522a1.143 1.143 0 0 1 1.616 0l1 1.302c.446.446.446 1.17 0 1.616l-.851 1.069c.901 2.244 2.429 3.71 4.5 4.5l1.069-.851a1.143 1.143 0 0 1 1.616 0l1.302 1c.446.446.446 1.17 0 1.616Z"/></svg>
  