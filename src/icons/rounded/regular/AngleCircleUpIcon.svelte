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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M12 24A12 12 0 1 0 0 12a12.013 12.013 0 0 0 12 12Zm0-22A10 10 0 1 1 2 12 10.011 10.011 0 0 1 12 2Z"/><path d="M12 8a2.993 2.993 0 0 1 1.987.752c.327.291.637.574.84.777l2.873 2.824a1 1 0 1 1-1.4 1.426l-2.88-2.829a20.855 20.855 0 0 0-.759-.7 1 1 0 0 0-1.323 0c-.29.258-.57.512-.752.693L7.7 13.779a1 1 0 0 1-1.4-1.426l2.878-2.829c.2-.2.507-.48.833-.769A2.99 2.99 0 0 1 12 8Z"/></svg>
  