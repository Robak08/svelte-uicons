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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="m14.081 11.41-3-2.349a4.993 4.993 0 0 0-6.162 0l-3 2.348A4.97 4.97 0 0 0 0 15.347v4.152c0 2.481 2.019 4.5 4.5 4.5h7c2.481 0 4.5-2.019 4.5-4.5v-4.152a4.972 4.972 0 0 0-1.919-3.938ZM10 18a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2Zm9-18h-4c-2.757 0-5 2.243-5 5v1.306a6.972 6.972 0 0 1 2.312 1.179l3.002 2.351A6.958 6.958 0 0 1 18 15.348V18a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1v1.5a6.472 6.472 0 0 1-1.821 4.5H19c2.757 0 5-2.243 5-5V5c0-2.757-2.243-5-5-5Zm-4 7h-1a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2Zm5 8h-1a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2Zm0-4h-1a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2Zm0-4h-1a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2Z"/></svg>
  