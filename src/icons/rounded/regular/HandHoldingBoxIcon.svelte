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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M6 9h6c1.654 0 3-1.346 3-3V3c0-1.654-1.346-3-3-3H6C4.346 0 3 1.346 3 3v3c0 1.654 1.346 3 3 3ZM5 3c0-.552.449-1 1-1h6c.551 0 1 .448 1 1v3c0 .552-.449 1-1 1H6c-.551 0-1-.448-1-1V3Zm2 1a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Zm16.017 4.785a3.004 3.004 0 0 0-2.168-.782 2.997 2.997 0 0 0-2.086.981l-3.216 3.534a3.144 3.144 0 0 0-2.689-1.519H4c-2.206 0-4 1.794-4 4v5c0 2.206 1.794 4 4 4h4.965c2.849 0 5.57-1.22 7.466-3.348l6.805-7.638a3.021 3.021 0 0 0-.219-4.229Zm-1.274 2.899-6.805 7.638A8.012 8.012 0 0 1 8.965 22H4c-1.103 0-2-.897-2-2v-5c0-1.103.897-2 2-2h8.858c.63 0 1.142.513 1.142 1.143 0 .564-.421 1.051-.981 1.13l-5.161.737a1 1 0 0 0 .283 1.981l5.16-.737a3.161 3.161 0 0 0 2.515-2.059l4.426-4.864c.182-.199.43-.316.7-.329a.985.985 0 0 1 .728.263c.407.371.44 1.009.073 1.421Z"/></svg>
  