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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M24 23a1 1 0 0 1-1 1H3c-1.654 0-3-1.346-3-3V1C.006-.308 1.994-.307 2 1v20c0 .551.449 1 1 1h20a1 1 0 0 1 1 1ZM21 5h-4c-1.308.006-1.307 1.994 0 2h3.563l-4.857 4.707a1.022 1.022 0 0 1-1.413 0 91.65 91.65 0 0 0-1.239-.893c-1.138-1.073-3.077-1.033-4.162.051l-4.586 4.414a1 1 0 1 0 1.387 1.441l4.6-4.428a1.022 1.022 0 0 1 1.413 0c.041.04 1.239.893 1.239.893 1.139 1.074 3.076 1.036 4.164-.054l4.89-4.74v3.607c.006 1.308 1.994 1.307 2 0v-4c0-1.654-1.346-3-3-3Z"/></svg>
  