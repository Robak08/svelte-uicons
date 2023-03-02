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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M8 5c0-2.206-1.794-4-4-4S0 2.794 0 5a4.007 4.007 0 0 0 3 3.873v7.253a4.007 4.007 0 0 0-3 3.873c0 2.206 1.794 4 4 4s4-1.794 4-4a4.007 4.007 0 0 0-3-3.873V8.873A4.007 4.007 0 0 0 8 5Zm13 11.127V9c0-2.757-2.243-5-5-5h-3.471l2.196-2.311A1 1 0 0 0 13.276.311L10.88 2.833c-1.17 1.169-1.17 3.073-.03 4.212l2.415 2.631a.997.997 0 0 0 1.412.061 1 1 0 0 0 .061-1.413L12.605 6h3.397c1.654 0 3 1.346 3 3v7.127a4.006 4.006 0 0 0-3 3.873c0 2.206 1.794 4 4 4s4-1.794 4-4a4.006 4.006 0 0 0-3-3.873Z"/></svg>
  