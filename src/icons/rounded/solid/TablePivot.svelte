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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M.101 6A5.014 5.014 0 0 1 4 2.101V6H.101ZM4 8H0v9a5.009 5.009 0 0 0 4 4.899V8Zm2-2h17.899A5.01 5.01 0 0 0 19 2H6v4Zm18 2v9c0 2.757-2.243 5-5 5H6V8h18Zm-2.293 3.752-1.075-1.076c-.871-.871-2.391-.871-3.263 0l-1.076 1.076a.999.999 0 1 0 1.414 1.414l.293-.293V15c0 .552-.449 1-1 1h-2.127l.293-.293a.999.999 0 1 0-1.414-1.414l-1.075 1.076c-.436.435-.676 1.015-.676 1.631s.24 1.196.676 1.631l1.076 1.076a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L14.874 18h2.127c1.654 0 3-1.346 3-3v-2.127l.293.293a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414Z"/></svg>
  