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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M20 .01c-3.812 0-8.125 2.038-11.539 5.451A38.467 38.467 0 0 0 .323 17.312a3.984 3.984 0 0 0 .851 4.409l1.106 1.105a3.981 3.981 0 0 0 4.4.852 38.333 38.333 0 0 0 11.854-8.139C21.952 12.126 23.99 7.813 23.99 4A3.632 3.632 0 0 0 20 .01zm-2.875 14.115A36.348 36.348 0 0 1 5.9 21.84a2.006 2.006 0 0 1-2.026-.3L16.707 8.707a1 1 0 1 0-1.414-1.414L2.457 20.129a2.007 2.007 0 0 1-.3-2.028A36.44 36.44 0 0 1 9.875 6.875C13.463 3.288 17.458 2.01 20 2.01c1.451 0 1.99.539 1.99 1.99 0 2.543-1.278 6.538-4.865 10.125z"/></svg>
  