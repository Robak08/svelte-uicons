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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M9 11a1 1 0 0 1 1-1h4a1 1 0 0 1 0 2h-4a1 1 0 0 1-1-1Zm15 7v1a5.006 5.006 0 0 1-5 5H5a5.006 5.006 0 0 1-5-5v-1a5.009 5.009 0 0 1 4-4.9V12a8 8 0 0 1 4.015-6.927C8.013 5.048 8 5.026 8 5V4a4 4 0 0 1 8 0v1c0 .026-.013.048-.015.073A8 8 0 0 1 20 12v1.1a5.009 5.009 0 0 1 4 4.9ZM10 4.263a7.736 7.736 0 0 1 4 0V4a2 2 0 0 0-4 0ZM6 16.535a8.368 8.368 0 0 1 12 0V12a6 6 0 0 0-12 0ZM5 22h.026A4.948 4.948 0 0 1 4 19v-3.816A3 3 0 0 0 2 18v1a3 3 0 0 0 3 3Zm10 0a3 3 0 0 0 2.874-2.188 6.432 6.432 0 0 0-11.748 0A3 3 0 0 0 9 22Zm7-4a3 3 0 0 0-2-2.816V19a4.948 4.948 0 0 1-1.026 3H19a3 3 0 0 0 3-3Z"/></svg>
  