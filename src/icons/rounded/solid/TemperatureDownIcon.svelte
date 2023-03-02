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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M12 12.11c4.334 4.253 1.079 12.007-5 11.89-6.078.117-9.335-7.638-5-11.89V5c.211-6.609 9.791-6.6 10 0ZM10 17a3 3 0 0 0-2-2.828V12a1 1 0 0 0-2 0v2.172A3 3 0 1 0 10 17Zm5.3-8.308 3 3a1 1 0 0 0 1.414 0l3-3A1 1 0 0 0 21.3 7.277L20 8.57V.985a1 1 0 0 0-2 0V8.57l-1.3-1.293a1 1 0 0 0-1.413 1.415Z"/></svg>
  