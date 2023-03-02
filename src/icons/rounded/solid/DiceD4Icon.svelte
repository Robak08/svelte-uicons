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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M11 24a5 5 0 0 1-1.627-.637l-7.666-4.842a4 4 0 0 1-1-5.541L8.845 1.406A4.045 4.045 0 0 1 11 0Zm12.287-11.033L15.155 1.406l-.035-.046A3.977 3.977 0 0 0 13 0v24a5.011 5.011 0 0 0 1.627-.637l7.73-4.885a3.984 3.984 0 0 0 .93-5.511Z"/></svg>
  