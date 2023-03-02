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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M12 24A12 12 0 1 0 0 12a12.013 12.013 0 0 0 12 12ZM6.293 9.465l3.586-3.586a3 3 0 0 1 4.243 0l3.585 3.586.024.025a1 1 0 1 1-1.438 1.389L13 7.586 13.007 18a1 1 0 0 1-2 0L11 7.587l-3.293 3.292a1 1 0 1 1-1.414-1.414Z"/></svg>
  