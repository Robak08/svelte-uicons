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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="m21.002 9.01-5.208.003L14.88 5H16v1a1 1 0 1 0 2 0V2a1 1 0 1 0-2 0v1h-1.467l-.347-1.242C14.015.961 13.442.269 12.652.069a2.111 2.111 0 0 0-2.651 2.038v.894h-1a1 1 0 1 0 0 2h1v4H4.528L2.98 6.668c-.279-.418-.653-.667-1.43-.667-.856 0-1.549.694-1.549 1.549v8.902c0 .856.694 1.549 1.549 1.549.816 0 1.151-.249 1.43-.667l1.673-2.333h5.348v4h-1a1 1 0 1 0 0 2h1v.73c0 .992.606 1.947 1.565 2.2a2.113 2.113 0 0 0 2.6-1.594l.363-1.336h1.472v1a1 1 0 1 0 2 0v-4a1 1 0 1 0-2 0v1h-1.12l.918-4.012 5.204.002a2.99 2.99 0 1 0 0-5.98Z"/></svg>
  