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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M15.57 2H8.43a3.993 3.993 0 0 1 3.453-2h.234a3.993 3.993 0 0 1 3.453 2Zm4.93 12H20v2a1 1 0 0 1-2 0v-2H6v2a1 1 0 0 1-2 0v-2h-.5a3.492 3.492 0 0 0-.5 6.949V22a2 2 0 0 0 4 0v-1h10v1a2 2 0 0 0 4 0v-1.049a3.458 3.458 0 0 0 3-3.421v-.03a3.5 3.5 0 0 0-3.5-3.5ZM1.628 12.491A5.96 5.96 0 0 1 4 12h16a5.96 5.96 0 0 1 2.372.491l-1.544-4.972A4.974 4.974 0 0 0 16.053 4H7.947a4.974 4.974 0 0 0-4.775 3.518Z"/></svg>
  