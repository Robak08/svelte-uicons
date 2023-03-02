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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M10 24a.999.999 0 0 1-.62-1.78c.09-.07 4.63-3.84 4.63-10.22S9.42 1.82 9.37 1.78c-.43-.35-.5-.98-.15-1.41.34-.43.97-.5 1.4-.15C10.84.4 16 4.61 16 12s-5.16 11.61-5.38 11.78A.98.98 0 0 1 10 24Z"/></svg>
  