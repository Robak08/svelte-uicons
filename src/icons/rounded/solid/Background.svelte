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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M24 6.59 6.59 24H5c-1.02 0-1.97-.31-2.76-.83L23.17 2.24c.52.79.83 1.74.83 2.76v1.59Zm-24 8L14.59 0H9.42L0 9.41v5.17Zm24-5.17L9.41 24.01h5.17l9.41-9.41V9.43ZM19 0h-1.59L0 17.41V19c0 1.02.31 1.97.83 2.76L21.76.83C20.97.31 20.02 0 19 0ZM6.59 0H5C2.24 0 0 2.24 0 5v1.59L6.59 0Zm10.83 24h1.59c2.76 0 5-2.24 5-5v-1.59L17.42 24Z"/></svg>
  