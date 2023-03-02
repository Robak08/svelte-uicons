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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M22 22a5.006 5.006 0 0 1-5-5v-3h2a1 1 0 0 0 0-2h-2.107a7 7 0 1 0-9.786 0H5a1 1 0 0 0 0 2h2v3a5.006 5.006 0 0 1-5 5 1 1 0 0 0 0 2h20a1 1 0 0 0 0-2ZM7 7a5 5 0 1 1 5 5 5.006 5.006 0 0 1-5-5Zm-.1 15A6.98 6.98 0 0 0 9 17v-3h6v3a6.98 6.98 0 0 0 2.105 5Z"/></svg>
  