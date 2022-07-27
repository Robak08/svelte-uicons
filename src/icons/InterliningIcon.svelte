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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-interlining {customClass}"><path d="M10 6h13a1 1 0 0 0 0-2H10a1 1 0 0 0 0 2ZM23 11H10a1 1 0 0 0 0 2h13a1 1 0 0 0 0-2ZM23 18H10a1 1 0 0 0 0 2h13a1 1 0 0 0 0-2ZM6.087 6a.5.5 0 0 0 .353-.854L4 2.707a1 1 0 0 0-1.414 0L.147 5.146A.5.5 0 0 0 .5 6h1.794v12H.5a.5.5 0 0 0-.354.854l2.44 2.439a1 1 0 0 0 1.414 0l2.44-2.439A.5.5 0 0 0 6.087 18H4.294V6Z"/></svg>
  