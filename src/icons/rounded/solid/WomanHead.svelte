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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23.925 18.144A5 5 0 0 1 19 24h-3a1 1 0 0 1-1-1v-2.59a8.218 8.218 0 0 1-3 .59 8.222 8.222 0 0 1-3-.6V23a1 1 0 0 1-1 1H5a5 5 0 0 1-4.925-5.856l.3-1.74a2.939 2.939 0 0 1 5.337-1.138C6.976 17.124 9.409 19 12 19c3.13 0 6.214-2.779 7.13-5.376a1.03 1.03 0 0 1 .959-.667l.432.007A1.461 1.461 0 0 0 22 11.5a1.5 1.5 0 0 0-1.23-1.474 1 1 0 0 1-.816-.879 7.961 7.961 0 0 0-4.013-6.107 12.87 12.87 0 0 1-1.127 2.541 15.089 15.089 0 0 1-4.956 4.467 1.5 1.5 0 1 1-1.725.84 15.807 15.807 0 0 1-7.257 1.1A1 1 0 0 1 .5 10.136a6.372 6.372 0 0 0 1.319-2.369C3.124 4.674 5.1 0 12 0a9.972 9.972 0 0 1 9.85 8.274A3.5 3.5 0 0 1 24 11.5a3.428 3.428 0 0 1-.854 2.257c.007.026.025.047.03.075ZM16 11.5a1.5 1.5 0 1 0-1.5 1.5 1.5 1.5 0 0 0 1.5-1.5Z"/></svg>
  