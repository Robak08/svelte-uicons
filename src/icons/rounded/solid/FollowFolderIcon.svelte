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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M24 16.3c0 2.6-3.38 5.82-5.07 7.17-.54.44-1.32.44-1.86 0C15.38 22.12 12 18.89 12 16.3c0-1.82 1.34-3.3 3-3.3 1.46 0 2.72 1.15 2.99 2.67C18.26 14.15 19.54 13 21 13c1.66 0 3 1.48 3 3.3ZM19 2h-6.53c-.15 0-.31-.04-.45-.11L8.87.32C8.46.11 7.99 0 7.53 0H5C2.24 0 0 2.24 0 5v1h23.9A5 5 0 0 0 19 2Zm-9 14.3c0-2.92 2.24-5.3 5-5.3 1.11 0 2.15.38 2.99 1.03.85-.65 1.89-1.03 3.01-1.03s2.16.4 3 1.06V8H0v9c0 2.76 2.24 5 5 5h7.67c-1.4-1.63-2.67-3.68-2.67-5.7Z"/></svg>
  