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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-house-chimney {customClass}"><path d="M22 5.724V2a1 1 0 1 0-2 0v2.366L14.797.855a4.98 4.98 0 0 0-5.594 0l-7 4.724A4.995 4.995 0 0 0 0 9.724V19c0 2.757 2.243 5 5 5h3a1 1 0 0 0 1-1v-8c0-.551.448-1 1-1h4c.552 0 1 .449 1 1v8a1 1 0 0 0 1 1h3c2.757 0 5-2.243 5-5V9.724a4.995 4.995 0 0 0-2-4ZM22 19c0 1.654-1.346 3-3 3h-2v-7c0-1.654-1.346-3-3-3h-4c-1.654 0-3 1.346-3 3v7H5c-1.654 0-3-1.346-3-3V9.724c0-.999.494-1.929 1.322-2.487l7-4.724a2.985 2.985 0 0 1 3.355 0l7 4.724a2.995 2.995 0 0 1 1.322 2.487V19Z"/></svg>
  