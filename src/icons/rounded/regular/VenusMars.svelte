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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M22 0h-4a1 1 0 0 0 0 2h2.586l-2.4 2.4a6.941 6.941 0 0 0-7.693-.449A6.989 6.989 0 1 0 6 16.92V19H4a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2H8v-2.073a6.934 6.934 0 0 0 2.491-.88A6.986 6.986 0 0 0 19.6 5.816l2.4-2.4V6a1 1 0 0 0 2 0V2a2 2 0 0 0-2-2ZM2 10a4.971 4.971 0 0 1 6.788-4.656 6.956 6.956 0 0 0 0 9.312A4.971 4.971 0 0 1 2 10Zm12 5a5 5 0 1 1 5-5 5.006 5.006 0 0 1-5 5Z"/></svg>
  