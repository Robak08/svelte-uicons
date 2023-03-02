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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M0 6V4c0-2.21 1.79-4 4-4h6c1.86 0 3.43 1.28 3.87 3H17c2.21 0 4 1.79 4 4v1h1.45c.69 0 1.04.83.55 1.32l-2.45 2.45c-.3.3-.79.3-1.1 0L17 9.32c-.49-.49-.14-1.32.55-1.32H19V7c0-1.1-.9-2-2-2h-3v1c0 2.21-1.79 4-4 4H4c-2.21 0-4-1.79-4-4Zm24 12v2c0 2.21-1.79 4-4 4H4c-2.21 0-4-1.79-4-4v-2c0-2.21 1.79-4 4-4h16c2.21 0 4 1.79 4 4Zm-4-2h-.59l-6 6h3.17l5.09-5.09c-.36-.55-.97-.91-1.68-.91Zm-9.41 6 6-6h-3.17l-6 6h3.17ZM2 18v.59L4.59 16H4c-1.1 0-2 .9-2 2Zm2 4h.59l6-6H7.42l-5.09 5.09c.36.55.97.91 1.68.91Zm18-2v-.59L19.41 22H20c1.1 0 2-.9 2-2Z"/></svg>
  