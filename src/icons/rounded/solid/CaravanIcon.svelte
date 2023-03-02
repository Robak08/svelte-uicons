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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M8 8.5v2a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5Zm8.5-.5h-2a.5.5 0 0 0-.5.5V21h3V8.5a.5.5 0 0 0-.5-.5Zm-9 16a3.5 3.5 0 0 0 0-7 3.5 3.5 0 0 0 0 7ZM24 20a1 1 0 0 1-1 1h-4V8.5A2.5 2.5 0 0 0 16.5 6h-2A2.5 2.5 0 0 0 12 8.5v8.837a5.523 5.523 0 0 0-9.978 2.677A5 5 0 0 1 0 16V5a5.006 5.006 0 0 1 5-5h12a5.006 5.006 0 0 1 5 5v14h1a1 1 0 0 1 1 1ZM10 8.5A2.5 2.5 0 0 0 7.5 6h-3A2.5 2.5 0 0 0 2 8.5v2A2.5 2.5 0 0 0 4.5 13h3a2.5 2.5 0 0 0 2.5-2.5Z"/></svg>
  