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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23 9a1 1 0 0 0 1-1V3a3 3 0 0 0-3-3h-5a1 1 0 0 0 0 2h4.586L12 10.586 3.414 2H8a1 1 0 0 0 0-2H3a3 3 0 0 0-3 3v5a1 1 0 0 0 2 0V3.414L10.586 12 2 20.586V16a1 1 0 0 0-2 0v5a3 3 0 0 0 3 3h5a1 1 0 0 0 0-2H3.414L12 13.414 20.586 22H16a1 1 0 0 0 0 2h5a3 3 0 0 0 3-3v-5a1 1 0 0 0-2 0v4.586L13.414 12 22 3.414V8a1 1 0 0 0 1 1Z"/></svg>
  