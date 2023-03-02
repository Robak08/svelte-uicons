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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M6.079 22.5a1.5 1.5 0 0 1 .44-1.06l7.672-7.672a2.5 2.5 0 0 0 0-3.536L6.529 2.565A1.5 1.5 0 0 1 8.65.444l7.662 7.661a5.506 5.506 0 0 1 0 7.779L8.64 23.556A1.5 1.5 0 0 1 6.079 22.5Z"/></svg>
  