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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-universal-access {customClass}"><path d="M10 6c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2Zm14 6c0 6.62-5.38 12-12 12S0 18.62 0 12 5.38 0 12 0s12 5.38 12 12Zm-2 0c0-5.51-4.49-10-10-10S2 6.49 2 12s4.49 10 10 10 10-4.49 10-10Zm-5.45-4.89L12.76 9h-1.53L7.44 7.11a.99.99 0 0 0-1.34.45.993.993 0 0 0 .45 1.34L10 10.62v3.53l-1.87 3.36c-.27.48-.1 1.09.39 1.36.15.09.32.13.49.13.35 0 .69-.19.87-.51L11.82 15h.37l1.94 3.49c.18.33.52.51.87.51.17 0 .33-.04.49-.13.48-.27.66-.88.39-1.36l-1.87-3.36v-3.53l3.45-1.72c.49-.25.69-.85.45-1.34a1.01 1.01 0 0 0-1.34-.45Z"/></svg>
  