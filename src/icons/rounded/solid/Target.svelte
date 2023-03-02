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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M21 13a1 1 0 0 1 0-2h2.949A12.006 12.006 0 0 0 13 .051v2.988a1 1 0 0 1-2 0V.051A12.006 12.006 0 0 0 .051 11H3a1 1 0 0 1 0 2H.051A12.006 12.006 0 0 0 11 23.949V21a1 1 0 0 1 2 0v2.949A12.006 12.006 0 0 0 23.949 13zm-6 0h-2v2a1 1 0 0 1-2 0v-2H9a1 1 0 0 1 0-2h2V9a1 1 0 0 1 2 0v2h2a1 1 0 0 1 0 2z"/></svg>
  