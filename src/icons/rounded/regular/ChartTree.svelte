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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M21.736 16.4A5.009 5.009 0 0 0 17 13h-4v-1.084a6 6 0 1 0-2 0V13H7a5.009 5.009 0 0 0-4.736 3.4 4 4 0 1 0 2.447-.334A3 3 0 0 1 7 15h4v1.127a4 4 0 1 0 2 0V15h4a3 3 0 0 1 2.289 1.063 4 4 0 1 0 2.447.334ZM8 6a4 4 0 1 1 4 4 4 4 0 0 1-4-4ZM6 20a2 2 0 1 1-2-2 2 2 0 0 1 2 2Zm8 0a2 2 0 1 1-2-2 2 2 0 0 1 2 2Zm6 2a2 2 0 1 1 2-2 2 2 0 0 1-2 2Z"/></svg>
  