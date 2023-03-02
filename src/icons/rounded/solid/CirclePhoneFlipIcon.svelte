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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0ZM8.857 18a2.804 2.804 0 0 1-2-.813l-.522-.6a1.143 1.143 0 0 1 0-1.616l1.302-1a1.143 1.143 0 0 1 1.616 0l1.069.851c2.071-.791 3.599-2.256 4.5-4.5l-.851-1.069a1.143 1.143 0 0 1 0-1.616l1-1.302a1.143 1.143 0 0 1 1.616 0l.6.522c.552.551.813 1.277.813 2 0 4-5.429 9.143-9.143 9.143Z"/></svg>
  