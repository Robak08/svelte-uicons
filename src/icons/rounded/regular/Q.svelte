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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="m22.707 22.293-2.541-2.541A9.935 9.935 0 0 0 22 14v-4C21.496-3.251 2.5-3.241 2 10v4c-.065 8.706 10.661 13.26 16.851 7.265l2.442 2.442c.929.921 2.335-.486 1.414-1.414ZM12 22c-4.411 0-8-3.589-8-8v-4C4.377-.591 19.627-.583 20 10v4a7.942 7.942 0 0 1-1.273 4.313l-2.02-2.02c-.929-.921-2.335.486-1.414 1.414l2.144 2.144A7.96 7.96 0 0 1 12 22Z"/></svg>
  