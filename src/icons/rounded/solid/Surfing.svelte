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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M20 .01c-3.812 0-8.125 2.038-11.539 5.451A38.467 38.467 0 0 0 .323 17.312a3.975 3.975 0 0 0 .708 4.243L15.293 7.293a1 1 0 1 1 1.414 1.414L2.449 22.965a3.941 3.941 0 0 0 4.236.713 38.333 38.333 0 0 0 11.854-8.139C21.952 12.126 23.99 7.813 23.99 4A3.632 3.632 0 0 0 20 .01z"/></svg>
  