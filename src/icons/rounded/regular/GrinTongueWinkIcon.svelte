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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M16 14H8a1 1 0 0 0 0 2h1v.6c.133 4.495 5.87 4.49 6 0V16h1a1 1 0 0 0 0-2Zm-3 2.6c-.062 1.839-1.939 1.837-2 0V16h2ZM12 0A12.013 12.013 0 0 0 0 12c.6 15.9 23.4 15.893 24 0A12.013 12.013 0 0 0 12 0Zm0 22A10.011 10.011 0 0 1 2 12c.5-13.248 19.5-13.245 20 0a10.011 10.011 0 0 1-10 10Zm6-12c0 1-.895 1-2 1s-2 0-2-1a2 2 0 0 1 4 0ZM7 11a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Z"/></svg>
  