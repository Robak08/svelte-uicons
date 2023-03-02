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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M10 0A10.011 10.011 0 0 0 0 10c0 5.327 4.206 10 9 10a4.341 4.341 0 0 1 3.781 1.762c3.4 4.46 11.265 1.81 11.219-4.262C24 11.588 19.772 0 10 0ZM4.293 7.293l3-3a1 1 0 0 1 1.414 1.414l-3 3a1 1 0 0 1-1.414-1.414Zm2.414 6.414a1 1 0 0 1-1.414-1.414l7-7a1 1 0 0 1 1.414 1.414Zm4 2a1 1 0 0 1-1.414-1.414l6-6a1 1 0 0 1 1.414 1.414ZM14 18a1.007 1.007 0 0 1-.707-1.707l4-4a1 1 0 0 1 1.414 1.414l-4 4A1 1 0 0 1 14 18Zm5.707.707C19.31 19.03 18.593 20.076 18 20a1.007 1.007 0 0 1-.707-1.707l1-1a1 1 0 0 1 1.414 1.414Z"/></svg>
  