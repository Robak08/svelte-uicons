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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-box-up {customClass}"><path d="M20 19a1 1 0 0 1-1 1H9a1 1 0 0 1 0-2h10a1 1 0 0 1 1 1Zm4-14v14c0 2.757-2.243 5-5 5H5c-2.757 0-5-2.243-5-5V5c0-2.757 2.243-5 5-5h14c2.757 0 5 2.243 5 5Zm-2 0c0-1.654-1.346-3-3-3H5C3.346 2 2 3.346 2 5v14c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3V5Zm-2.907 2.867a2.965 2.965 0 0 0-4.187 0l-.907.907-.907-.907a2.965 2.965 0 0 0-4.187 0L7.291 9.481a.999.999 0 1 0 1.414 1.414l1.293-1.293V15a1 1 0 0 0 2 0V9.602l1.293 1.293a.997.997 0 0 0 1.414 0l1.293-1.293V15a1 1 0 0 0 2 0V9.602l1.293 1.293a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414l-1.614-1.614Z"/></svg>
  