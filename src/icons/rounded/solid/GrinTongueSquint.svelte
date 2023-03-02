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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M11 16h2v.6c-.062 1.839-1.938 1.837-2 0Zm13-4a12.013 12.013 0 0 1-12 12C-3.9 23.4-3.893.6 12 0a12.013 12.013 0 0 1 12 12ZM7 12a1 1 0 0 0 .554-.168l3-2a1.007 1.007 0 0 0 0-1.664l-3-2a1 1 0 1 0-1.11 1.664L8.2 9l-1.755 1.168A1 1 0 0 0 7 12Zm10 3a1 1 0 0 0-1-1H8a1 1 0 0 0 0 2h1v.6c.133 4.495 5.869 4.49 6 0V16h1a1 1 0 0 0 1-1Zm-1.2-6 1.752-1.168a1 1 0 0 0-1.11-1.664l-3 2a1.007 1.007 0 0 0 0 1.664l3 2a1 1 0 1 0 1.11-1.664Z"/></svg>
  