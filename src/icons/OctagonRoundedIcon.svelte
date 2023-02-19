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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-octagon {customClass}"><path d="M14.95 24h-5.8a5.01 5.01 0 0 1-3.54-1.46l-4.09-4.1A4.979 4.979 0 0 1 .05 14.9V9.1c0-1.33.52-2.59 1.47-3.54l4.1-4.1C6.56.52 7.82 0 9.16 0h5.8c1.34 0 2.59.52 3.54 1.46l4.1 4.1c.94.94 1.46 2.2 1.46 3.54v5.8c0 1.33-.52 2.59-1.46 3.54l-4.1 4.1c-.94.94-2.2 1.46-3.54 1.46ZM9.15 2c-.8 0-1.55.31-2.12.88l-4.1 4.1c-.57.57-.88 1.32-.88 2.12v5.8c0 .8.31 1.55.88 2.12l4.1 4.1c.57.57 1.32.88 2.12.88h5.8c.8 0 1.56-.31 2.12-.88l4.1-4.1c.57-.57.88-1.32.88-2.12V9.1c0-.8-.31-1.55-.88-2.12l-4.1-4.1C16.5 2.31 15.75 2 14.95 2h-5.8Z"/></svg>
  