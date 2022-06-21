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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-cross {customClass}"><path d="M23.707.293a1 1 0 0 0-1.414 0L12 10.586 1.707.293a1 1 0 0 0-1.414 0 1 1 0 0 0 0 1.414L10.586 12 .293 22.293a1 1 0 0 0 0 1.414 1 1 0 0 0 1.414 0L12 13.414l10.293 10.293a1 1 0 0 0 1.414 0 1 1 0 0 0 0-1.414L13.414 12 23.707 1.707a1 1 0 0 0 0-1.414Z"/></svg>
  