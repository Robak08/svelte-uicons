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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M24 14a8.009 8.009 0 0 0-8-8V4h7a1 1 0 0 0 0-2h-7a1 1 0 0 0-2 0H7a1 1 0 0 0 0 2h7v2H2V5a1 1 0 0 0-2 0s.012 2.18.035 2.264A4.019 4.019 0 0 0 2.9 10.583L7 11.754V13a6.01 6.01 0 0 0 4 5.657V21H7a1 1 0 0 0 0 2h14a3 3 0 0 0 3-3 1 1 0 0 0-2 0 1 1 0 0 1-1 1h-2v-2a5.006 5.006 0 0 0 5-5Zm-2.084-1H17a1 1 0 0 1-1-1V8a6.009 6.009 0 0 1 5.916 5ZM9 13v-2a1 1 0 0 0-.725-.961L3.45 8.66a2 2 0 0 1-1-.66H14v4a3 3 0 0 0 3 3h4.828A3 3 0 0 1 19 17h-6a4 4 0 0 1-4-4Zm8 8h-4v-2h4Z"/></svg>
  