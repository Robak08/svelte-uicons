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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M10.957 12.354a.5.5 0 0 1 0-.708l4.586-4.585a1.5 1.5 0 0 0-2.121-2.122L8.836 9.525a3.505 3.505 0 0 0 0 4.95l4.586 4.586a1.5 1.5 0 0 0 2.121-2.122Z"/></svg>
  