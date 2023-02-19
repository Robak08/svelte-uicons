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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-move-to-folder {customClass}"><path d="M19 3h-6.53c-.15 0-.31-.04-.45-.11L8.86 1.31C8.45 1.1 7.98.99 7.52.99H4.99A5.015 5.015 0 0 0 0 6v12c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V8c0-2.76-2.24-5-5-5ZM5 3h2.53c.15 0 .31.04.45.11l3.16 1.58c.41.21.88.32 1.34.32h6.53c1.3 0 2.42.84 2.83 2H2v-1c0-1.65 1.35-3 3-3Zm14 18H5c-1.65 0-3-1.35-3-3V9h20v9c0 1.65-1.35 3-3 3Zm-1-6c0 .86-.36 1.67-1.02 2.27l-1.55 1.46c-.19.18-.44.27-.69.27-.27 0-.53-.11-.73-.31a.996.996 0 0 1 .04-1.41l1.35-1.27H7c-.55 0-1-.45-1-1s.45-1 1-1h8.42l-1.35-1.27a.996.996 0 1 1 1.37-1.45L17 12.75c.65.59 1.01 1.4 1.01 2.26Z"/></svg>
  