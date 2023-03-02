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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M24 2v4a1 1 0 0 1-2 0V3.439L16.7 8.71a1 1 0 1 1-1.4-1.418L20.61 2H18a1 1 0 0 1 0-2h4a2 2 0 0 1 2 2Zm-3.345 12.856a3.1 3.1 0 0 0-4.28.006l-1.906 1.606a12.781 12.781 0 0 1-6.932-6.944l1.6-1.9a3.1 3.1 0 0 0 .006-4.28S7.291.939 7.261.907A3.085 3.085 0 0 0 2.933.861l-1.149 1c-7.72 8.209 12.2 28.138 20.4 20.3l.912-1.049a3.1 3.1 0 0 0 0-4.378l-2.441-1.878Z"/></svg>
  