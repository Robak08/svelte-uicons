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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M22.535 8.46A4.965 4.965 0 0 0 19 7H2.8l4.3-4.3a1 1 0 0 0-1.418-1.412L.732 6.237a2.5 2.5 0 0 0 0 3.535l4.95 4.951A1 1 0 1 0 7.1 13.309L2.788 9H19a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3H5a1 1 0 0 0 0 2h14a5.006 5.006 0 0 0 5-5v-7a4.969 4.969 0 0 0-1.465-3.54Z"/></svg>
  