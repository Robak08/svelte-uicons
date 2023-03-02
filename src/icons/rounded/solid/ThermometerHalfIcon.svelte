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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M19 17a7 7 0 1 1-12-4.889V5c.211-6.609 9.791-6.6 10 0v7.111A7.007 7.007 0 0 1 19 17Zm-4 0a3 3 0 0 0-2-2.828V8a1 1 0 0 0-2 0v6.172A3 3 0 1 0 15 17Z"/></svg>
  