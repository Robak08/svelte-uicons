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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M12 0H6C4.346 0 3 1.346 3 3v3c0 1.654 1.346 3 3 3h6c1.654 0 3-1.346 3-3V3c0-1.654-1.346-3-3-3Zm-2 4H8a1 1 0 1 1 0-2h2a1 1 0 1 1 0 2Zm13.341 8.345-7.702 8.409A10 10 0 0 1 8.265 24H4.003a4 4 0 0 1-4-4v-5a4 4 0 0 1 4-4h7.787c1.374 0 2.46 1.26 2.164 2.685-.192.926-1.004 1.598-1.94 1.732L7.852 16a1 1 0 1 0 .283 1.979l4.252-.596a4.233 4.233 0 0 0 3.617-4.17c0-.219-.032-.429-.065-.638l3.541-3.737a2.578 2.578 0 0 1 1.794-.835 2.592 2.592 0 0 1 1.878.678 2.616 2.616 0 0 1 .189 3.665Z"/></svg>
  