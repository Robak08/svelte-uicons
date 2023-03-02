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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M22.992 22.875A.998.998 0 0 1 22 24c-.256 0-2-.613-2-.613l-1.684.562a1 1 0 0 1-1.309-1.073l.095-.753c.114-.904.555-1.657.987-2.199-.959-1.047-2.09-2.685-2.09-4.584 0-1.427.65-2.932 1.881-4.353 1.067-1.232 3.17-1.231 4.237 0 1.231 1.422 1.882 2.927 1.882 4.354 0 1.899-1.131 3.536-2.09 4.584.433.542.874 1.295.987 2.199l.095.753ZM8 15a3.004 3.004 0 0 1-4 2.828V22c0 1.103-.897 2-2 2s-2-.897-2-2v-6c0-.777.446-1.452 1.096-1.783C1.592 9.479 4.449.411 18.949-.004a2.025 2.025 0 0 1 1.442.564c.387.377.609.901.609 1.439V7a1 1 0 1 1-2 0V2C7.909 2.314 4.417 8.002 3.393 12.469A2.983 2.983 0 0 1 5 12c1.654 0 3 1.346 3 3Zm-2 0a1.001 1.001 0 0 0-2 0 1.001 1.001 0 0 0 2 0Z"/></svg>
  