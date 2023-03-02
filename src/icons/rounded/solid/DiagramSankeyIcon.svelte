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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M1 7h7.34c1.34 0 2.59-.52 3.54-1.46l2.66-2.66c.57-.57 1.32-.88 2.12-.88H23c.55 0 1-.45 1-1s-.45-1-1-1h-6.34c-1.34 0-2.59.52-3.54 1.46l-2.66 2.66c-.57.57-1.32.88-2.12.88H1c-.55 0-1 .45-1 1s.45 1 1 1ZM23 22h-9.34c-.8 0-1.56-.31-2.12-.88l-4.66-4.66C5.94 15.52 4.68 15 3.34 15H1c-.55 0-1 .45-1 1s.45 1 1 1h2.34c.8 0 1.56.31 2.12.88l4.66 4.66c.94.94 2.2 1.46 3.54 1.46H23c.55 0 1-.45 1-1s-.45-1-1-1ZM24 11c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1s.45 1 1 1h8.59l4.54 4.54c.94.94 2.2 1.46 3.54 1.46h5.34c.55 0 1-.45 1-1s-.45-1-1-1h-5.34c-.8 0-1.56-.31-2.12-.88L12.43 12h10.59c.55 0 1-.45 1-1Z"/></svg>
  