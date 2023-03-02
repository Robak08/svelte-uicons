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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M21.297 16.785a3.666 3.666 0 0 1 2.603 4.4 3.635 3.635 0 0 1-3.489 2.792c-1.467.028-7.92.035-9.189 0a2.255 2.255 0 0 1-2.14-1.665 2.287 2.287 0 0 1 1.302-2.717c.424-.182.68-.625.583-1.076a4.537 4.537 0 0 1 .034-2.047c.432-1.773 1.91-3.158 3.716-3.421a4.576 4.576 0 0 1 4.913 2.773c.349.836 1.364.88 1.669.962ZM7.671 24H5c-2.757 0-5-2.243-5-5V5c0-2.757 2.243-5 5-5h14c2.757 0 5 2.243 5 5v11.005a5.617 5.617 0 0 0-2.183-1.15l-.476-.1a6.59 6.59 0 0 0-6.915-3.684c-2.586.377-4.744 2.358-5.37 4.926a6.611 6.611 0 0 0-.167 2.141c-1.5 1.004-2.222 2.858-1.743 4.683.112.425.294.819.523 1.18ZM5 4a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z"/></svg>
  