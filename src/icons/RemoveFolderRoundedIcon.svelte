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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-remove-folder {customClass}"><path d="M19 3h-6.53c-.15 0-.31-.04-.45-.11L8.86 1.31C8.45 1.1 7.98.99 7.52.99H4.99A5.015 5.015 0 0 0 0 6v12c0 2.76 2.24 5 5 5h7c.55 0 1-.45 1-1s-.45-1-1-1H5c-1.65 0-3-1.35-3-3V9h20v3c0 .55.45 1 1 1s1-.45 1-1V8c0-2.76-2.24-5-5-5ZM2 6c0-1.65 1.35-3 3-3h2.53c.15 0 .31.04.45.11l3.16 1.58c.41.21.88.32 1.34.32h6.53c1.3 0 2.42.84 2.83 2H2v-1Zm21.71 10.71-2.79 2.81 2.79 2.78A.996.996 0 0 1 23 24c-.26 0-.51-.1-.71-.29l-2.79-2.78-2.76 2.77c-.2.2-.45.29-.71.29s-.51-.1-.71-.29a.996.996 0 0 1 0-1.41l2.76-2.77-2.79-2.78a.996.996 0 1 1 1.41-1.41l2.79 2.78 2.79-2.81a.996.996 0 1 1 1.41 1.41Z"/></svg>
  