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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M20 0H4C1.79 0 0 1.79 0 4v2c0 2.21 1.79 4 4 4h7v4H9.55c-.69 0-1.04.83-.55 1.32l2.45 2.45c.3.3.79.3 1.1 0L15 15.32c.49-.49.14-1.32-.55-1.32H13v-4h7c2.21 0 4-1.79 4-4V4c0-2.21-1.79-4-4-4Zm1.68 2.91L16.59 8h-3.17l6-6h.59c.7 0 1.32.36 1.68.91ZM7.41 8l6-6h3.17l-6 6H7.41ZM4 2h.59L2 4.59V4c0-1.1.9-2 2-2ZM2.32 7.09 7.41 2h3.17l-6 6h-.59c-.7 0-1.32-.36-1.68-.91ZM20 8h-.59L22 5.41V6c0 1.1-.9 2-2 2Zm4 10v2c0 2.21-1.79 4-4 4H4c-2.21 0-4-1.79-4-4v-2c0-2.21 1.79-4 4-4h2.89c-.28.97-.02 2.01.7 2.74l2.45 2.45c.54.54 1.25.81 1.96.81s1.42-.27 1.96-.81l2.45-2.45c.72-.72.99-1.77.7-2.74H20c2.21 0 4 1.79 4 4Z"/></svg>
  