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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="m17.061 9.525-3.586-3.586a1.5 1.5 0 0 0-2.121 2.122l2.439 2.439H5a1.5 1.5 0 0 0 0 3h8.793l-2.439 2.439a1.5 1.5 0 0 0 2.121 2.122l3.586-3.586a3.505 3.505 0 0 0 0-4.95Z"/></svg>
  