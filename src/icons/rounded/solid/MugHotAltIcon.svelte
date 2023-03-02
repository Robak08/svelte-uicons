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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M13.025 3V1a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0Zm-3 1a1 1 0 0 0 1-1V1a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1Zm-4 0a1 1 0 0 0 1-1V1a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1ZM24 13.143A3.983 3.983 0 0 1 20 17h-2.475a6.875 6.875 0 0 1-5.742 3H8.216a6.877 6.877 0 0 1-5.808-3.088C.992 14.653-2.453 6.371 3 6h14a3.1 3.1 0 0 1 2.882 4C22.353 10 24 11.205 24 13.143Zm-2 0c.088-.927-1.25-1.224-2.458-1.143a16.82 16.82 0 0 1-.954 3H20a1.984 1.984 0 0 0 2-1.857ZM19 22H1a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2Z"/></svg>
  