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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M21.98 10H15c-1.65 0-3-1.35-3-3V.02c-.16-.01-.32-.02-.49-.02H7C4.24 0 2 2.24 2 5v14c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5v-8.51c0-.16-.01-.32-.02-.49Zm-5.26 4.24L15.3 19.9c-.15.61-.68 1.05-1.31 1.09-.63.04-1.21-.32-1.44-.91L12 18.7l-.55 1.38c-.22.56-.75.91-1.34.91h-.1c-.63-.04-1.15-.48-1.31-1.1l-1.41-5.66a1 1 0 0 1 1.94-.48l1 4 .85-2.13a1 1 0 0 1 1.86 0l.84 2.13 1.01-4a1 1 0 0 1 1.94.48ZM14 7V.46c.91.35 1.75.88 2.46 1.59l3.48 3.49c.71.71 1.24 1.55 1.59 2.46h-6.54c-.55 0-1-.45-1-1Z"/></svg>
  