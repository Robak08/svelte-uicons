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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M8 4c0-2.206-1.794-4-4-4S0 1.794 0 4a4.006 4.006 0 0 0 3 3.873v8.253a4.006 4.006 0 0 0-3 3.873c0 2.206 1.794 4 4 4s4-1.794 4-4a4.006 4.006 0 0 0-3-3.873V7.873A4.006 4.006 0 0 0 8 4Zm13 12.127V10a1 1 0 1 0-2 0v6.127A4.006 4.006 0 0 0 16 20c0 2.206 1.794 4 4 4s4-1.794 4-4a4.006 4.006 0 0 0-3-3.873Zm2.707-9.834a.999.999 0 1 1-1.414 1.414L20 5.414l-2.293 2.293a.997.997 0 0 1-1.414 0 .999.999 0 0 1 0-1.414L18.586 4l-2.293-2.293A.999.999 0 1 1 17.707.293L20 2.586 22.293.293a.999.999 0 1 1 1.414 1.414L21.414 4l2.293 2.293Z"/></svg>
  