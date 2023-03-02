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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M24 12a12 12 0 1 0-12 12 12.013 12.013 0 0 0 12-12ZM9.465 17.707l-3.586-3.586a3 3 0 0 1 0-4.243l3.586-3.585.025-.024a1 1 0 1 1 1.389 1.438L7.586 11 18 10.993a1 1 0 0 1 0 2L7.587 13l3.292 3.293a1 1 0 1 1-1.414 1.414Z"/></svg>
  