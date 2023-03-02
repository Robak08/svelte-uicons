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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M22.94 6.5A5.993 5.993 0 0 0 17.13 2H13V1c0-.55-.45-1-1-1s-1 .45-1 1v1H6.87a6.01 6.01 0 0 0-5.81 4.5c-.16.6-.02 1.23.36 1.72S2.38 9 3.01 9h17.98c.62 0 1.2-.28 1.59-.78.38-.49.51-1.12.36-1.72ZM20 11H4c-.55 0-1 .45-1 1v2.41c0 4.7 4.14 7.65 6.61 8.98.75.41 1.57.61 2.39.61s1.64-.2 2.39-.61c2.47-1.34 6.61-4.28 6.61-8.98V12c0-.55-.45-1-1-1Z"/></svg>
  