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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M19 3h-3c-.154 0-.31-.036-.447-.105l-3.156-1.578a3.017 3.017 0 0 0-1.341-.316H9c-2.757 0-5 2.243-5 5V14c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V8c0-2.757-2.243-5-5-5ZM9 3h2.056c.154 0 .31.036.447.105l3.155 1.578c.414.207.878.316 1.342.316h3c1.304 0 2.415.836 2.828 2H6v-1c0-1.654 1.346-3 3-3Zm10 14H9c-1.654 0-3-1.346-3-3V9h16v5c0 1.654-1.346 3-3 3Zm1 5a1 1 0 0 1-1 1H5c-2.757 0-5-2.243-5-5V8a1 1 0 1 1 2 0v10c0 1.654 1.346 3 3 3h14a1 1 0 0 1 1 1Z"/></svg>
  