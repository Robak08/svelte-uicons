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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="m20.859 15.331-3.772 6.155a5.235 5.235 0 0 1-3.87 2.477 5.315 5.315 0 0 1-.628.037 5.212 5.212 0 0 1-3-.955A4.741 4.741 0 0 1 2.9 16.479l-1.315-1.313a5.264 5.264 0 0 1 .955-8.2L8.307 3.4a8.859 8.859 0 0 1 10.327.551l1.659-1.659a1 1 0 1 1 1.414 1.414L20.05 5.364a8.951 8.951 0 0 1 .809 9.967zM8.065 21.647l-3.719-3.72a2.721 2.721 0 0 0 .463 3.264 2.827 2.827 0 0 0 3.256.456zm9.921-15.6A6.887 6.887 0 0 0 9.369 5.1L3.592 8.666A3.265 3.265 0 0 0 3 13.752l7.29 7.291a3.265 3.265 0 0 0 5.093-.6l3.755-6.125a6.937 6.937 0 0 0-1.152-8.276zM19.265 24a1 1 0 0 1-.591-1.808 8.633 8.633 0 0 0 3.315-5.407 1 1 0 1 1 1.953.43 10.7 10.7 0 0 1-4.088 6.593 1 1 0 0 1-.589.192zM1 5.739a1 1 0 0 1-.8-1.594A10.692 10.692 0 0 1 6.913.02a1 1 0 1 1 .4 1.96A8.636 8.636 0 0 0 1.8 5.334a1 1 0 0 1-.8.405z"/></svg>
  