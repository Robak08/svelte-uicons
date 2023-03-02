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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path fill-rule="evenodd" d="M12.569.152a1.136 1.136 0 0 0-1.136 0L2.026 5.581a1.135 1.135 0 0 0-.568.984v10.866c0 .406.217.781.568.984l9.407 5.433c.352.203.785.203 1.137 0l9.405-5.433c.351-.203.568-.578.568-.984V6.565c0-.406-.217-.781-.568-.984L12.569.152z" clip-rule="evenodd"/></svg>
  