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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-arrow-to-right {customClass}"><path d="M21.985 6.015v4.518a2.417 2.417 0 0 0-.233-.285L16.8 5.3a1 1 0 1 0-1.414 1.414l4.3 4.3H1.015a1 1 0 0 0 0 2h18.677l-4.3 4.3a1 1 0 1 0 1.408 1.419l4.95-4.95a2.5 2.5 0 0 0 .233-.285v4.517a1 1 0 0 0 2 0v-12a1 1 0 0 0-2 0Z"/></svg>
  