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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M14.5 5A2.5 2.5 0 1 0 12 2.5 2.5 2.5 0 0 0 14.5 5Zm7.5 6h-2.87a1.006 1.006 0 0 1-.856-.484L16.43 7.453A3.015 3.015 0 0 0 13.86 6H7.236a2.983 2.983 0 0 0-2.683 1.658l-1.448 2.9a1 1 0 0 0 1.79.894l1.447-2.899A.994.994 0 0 1 7.236 8h2.218L7.7 12.273a3 3 0 0 0 1.173 3.674l4.116 2.6V23A1.005 1.005 0 0 0 15 23v-5a1.01 1.01 0 0 0-.475-.845l-2.035-1.287 2.7-6.591 1.367 2.27A3.016 3.016 0 0 0 19.13 13H22a1 1 0 0 0 0-2ZM8.432 18.114A2.987 2.987 0 0 1 5.646 20H3a1 1 0 0 1 0-2h2.646a.994.994 0 0 0 .928-.629 1 1 0 0 1 1.858.743Z"/></svg>
  