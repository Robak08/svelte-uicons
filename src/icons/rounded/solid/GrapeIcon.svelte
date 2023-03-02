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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M8.105.553c1.113-1.652 3.32.961 3.9 2.009C13.982-.987 18.7-.828 19 3a2 2 0 0 1-2 2 1 1 0 0 1 0-2c-.074-1.8-3.63-1.383-3.971 3.193a2.995 2.995 0 1 1-2.063 0c-.155-2.151-.946-3.565-2.415-4.3a1 1 0 0 1-.446-1.34ZM8 9a3 3 0 0 0-6 0 3 3 0 0 0 6 0Zm3 6a3 3 0 0 0-6 0 3 3 0 0 0 6 0Zm1 3a3 3 0 0 0 0 6 3 3 0 0 0 0-6Zm7-12a3 3 0 0 0 0 6 3 3 0 0 0 0-6Zm-3 6a3 3 0 0 0 0 6 3 3 0 0 0 0-6Z"/></svg>
  