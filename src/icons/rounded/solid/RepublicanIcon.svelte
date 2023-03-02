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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M24 18v1.001A3.003 3.003 0 0 1 21.001 22a2.977 2.977 0 0 1-2.122-.88A2.98 2.98 0 0 1 18 19h-1.98a3.001 3.001 0 0 1-5.121 2.121A2.974 2.974 0 0 1 10.026 19h-4.02a3.003 3.003 0 0 1-6.007.003V15h19.999l.005 4a.995.995 0 0 0 .999 1 1 1 0 0 0 .999-.999V18a1 1 0 1 1 2 0ZM0 13V8c0-3.309 2.691-6 6-6h8.014a5.96 5.96 0 0 1 4.245 1.76A5.945 5.945 0 0 1 20 8.007V13H0Zm13-5a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM9 8a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM5 8a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z"/></svg>
  