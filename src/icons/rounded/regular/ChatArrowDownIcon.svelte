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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="m22.293 12.7-1.086 1.086-3.585-3.586a3.073 3.073 0 0 0-4.242 0l-.173.173a1.023 1.023 0 0 1-1.414 0L6.72 5.294a1 1 0 1 0-1.414 1.414l5.072 5.073a3.072 3.072 0 0 0 4.242 0l.173-.173a1.023 1.023 0 0 1 1.414 0l3.586 3.592-1.086 1.086a1 1 0 0 0 .707 1.707H22.5a1.5 1.5 0 0 0 1.5-1.5V13.4a1 1 0 0 0-1.707-.7Z"/><path d="M23 21.976H5a3 3 0 0 1-3-3V1a1 1 0 0 0-2 0v17.976a5.006 5.006 0 0 0 5 5h18a1 1 0 0 0 0-2Z"/></svg>
  