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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-microphone {customClass}"><path d="M12 20a8.009 8.009 0 0 0 8-8V8A8 8 0 0 0 4 8v4a8.009 8.009 0 0 0 8 8Zm0-18a6.006 6.006 0 0 1 5.91 5H15a1 1 0 0 0 0 2h3v2h-3a1 1 0 0 0 0 2h2.91a5.993 5.993 0 0 1-11.82 0H9a1 1 0 0 0 0-2H6V9h3a1 1 0 0 0 0-2H6.09A6.006 6.006 0 0 1 12 2Z"/><path d="M23 12a1 1 0 0 0-1 1 9.01 9.01 0 0 1-9 9h-2a9.011 9.011 0 0 1-9-9 1 1 0 0 0-2 0 11.013 11.013 0 0 0 11 11h2a11.013 11.013 0 0 0 11-11 1 1 0 0 0-1-1Z"/></svg>
  