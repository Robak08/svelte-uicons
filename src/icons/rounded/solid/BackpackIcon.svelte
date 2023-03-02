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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M16 24H8a3 3 0 0 1-2.886-2.225 6.993 6.993 0 0 1 13.772 0A3 3 0 0 1 16 24ZM3 21v-7.576A5 5 0 0 0 0 18v1a5 5 0 0 0 3.924 4.876A4.953 4.953 0 0 1 3 21Zm18-7.576V21a4.953 4.953 0 0 1-.924 2.876A5 5 0 0 0 24 19v-1a5 5 0 0 0-3-4.576ZM19 11v6.356a8.978 8.978 0 0 0-14 0V11a6.992 6.992 0 0 1 3-5.736V4a4 4 0 0 1 8 0v1.264A6.992 6.992 0 0 1 19 11Zm-9-6.7a6.927 6.927 0 0 1 4 0V4a2 2 0 0 0-4 0Zm5 5.7a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1 1 1 0 0 0 1 1h4a1 1 0 0 0 1-1Z"/></svg>
  