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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M12 12.1c4.334 4.253 1.079 12.007-5 11.89-6.078.11-9.335-7.643-5-11.89V4.985c.211-6.61 9.791-6.6 10 0Zm-2 4.89a3 3 0 0 0-2-2.828V4.875a1 1 0 0 0-2 0v9.282a3 3 0 1 0 4 2.828ZM22.7 3.298l-3-3a1 1 0 0 0-1.414 0l-3 3a1 1 0 0 0 1.414 1.41L18 3.415V11a1 1 0 0 0 2 0V3.415l1.3 1.293a1 1 0 0 0 1.41-1.415h-.005Z"/></svg>
  