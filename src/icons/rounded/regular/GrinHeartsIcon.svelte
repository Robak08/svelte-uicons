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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M12 0A12.013 12.013 0 0 0 0 12c.6 15.9 23.4 15.893 24 0A12.013 12.013 0 0 0 12 0Zm0 22A10.011 10.011 0 0 1 2 12c.5-13.248 19.5-13.244 20 0a10.011 10.011 0 0 1-10 10Zm5.842-6.458A6.827 6.827 0 0 1 12 19a6.836 6.836 0 0 1-5.848-3.458A1 1 0 0 1 7.2 14.024 15.4 15.4 0 0 0 12 15a15.4 15.4 0 0 0 4.792-.976 1 1 0 0 1 1.05 1.518ZM19 8.65c0 1.3-1.692 2.818-2.535 3.494a.743.743 0 0 1-.93 0c-5.7-4.279.059-7.109.465-3.494a1.5 1.5 0 1 1 3 0Zm-14 0a1.5 1.5 0 1 1 3 0c.41-3.617 6.167-.78.465 3.494a.743.743 0 0 1-.93 0C6.692 11.468 5 9.948 5 8.65Z"/></svg>
  