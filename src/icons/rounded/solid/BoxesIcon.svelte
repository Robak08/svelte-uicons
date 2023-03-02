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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M11 13H3a3 3 0 0 0-3 3v5a3 3 0 0 0 3 3h8V13Zm-7.5 4a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1ZM21 13h-8v11h8a3 3 0 0 0 3-3v-5a3 3 0 0 0-3-3Zm-1.5 5h-2a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2ZM15 0H9a3 3 0 0 0-3 3v8h12V3a3 3 0 0 0-3-3Zm-2 5h-2a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z"/></svg>
  