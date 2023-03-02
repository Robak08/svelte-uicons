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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M12 5a6.927 6.927 0 0 0-3.217.773C10-1.908 14-1.9 15.217 5.773A6.927 6.927 0 0 0 12 5Zm0 2a5.129 5.129 0 0 0-3.612 1.5A66.96 66.96 0 0 0 8 15v8a1 1 0 0 0 2 0v-1h4v1a1 1 0 0 0 2 0v-8c0-.068-.011-3.149-.388-6.5A5.129 5.129 0 0 0 12 7Zm11-1a1 1 0 0 0-1 1v7h-4v9.414L22 18v2a1 1 0 0 0 2 0V7a1 1 0 0 0-1-1ZM2 7a1 1 0 0 0-2 0v13a1 1 0 0 0 2 0v-2l4 5.414V14H2Z"/></svg>
  