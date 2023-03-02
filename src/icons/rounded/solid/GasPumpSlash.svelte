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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M4.758 9H0V4.242ZM0 11v8a5.006 5.006 0 0 0 5 5h6a5 5 0 0 0 4.866-3.891L6.758 11Zm24-4.023a5.955 5.955 0 0 0-1.753-4.149L19.707.293a1 1 0 0 0-1.414 1.414L20 3.414V6a2 2 0 0 0 2 2v10a1 1 0 0 1-1 1h-.586L16 14.586V11h-3.586l-2-2H16V5a5.006 5.006 0 0 0-5-5H5a4.972 4.972 0 0 0-2.752.834L1.707.293A1 1 0 0 0 .293 1.707l22 22a1 1 0 0 0 1.414-1.414l-1.533-1.533A3 3 0 0 0 24 18s0-11.015 0-11.023Z"/></svg>
  