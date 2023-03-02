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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M12 0C5.38 0 0 5.38 0 12s5.38 12 12 12 12-5.38 12-12S18.62 0 12 0Zm0 4c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2Zm5.45 4.89L14 10.61v3.53l1.87 3.36c.27.48.1 1.09-.39 1.36-.15.09-.32.13-.49.13-.35 0-.69-.19-.87-.51l-1.94-3.49h-.37l-1.94 3.49c-.18.33-.52.51-.87.51-.17 0-.33-.04-.49-.13-.48-.27-.66-.88-.39-1.36l1.87-3.36v-3.53L6.54 8.89a1.01 1.01 0 0 1-.45-1.34c.25-.49.85-.69 1.34-.45l3.79 1.89h1.53l3.79-1.89a.993.993 0 0 1 1.34.45c.25.49.05 1.09-.45 1.34Z"/></svg>
  