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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M12 16a4 4 0 1 1 4-4 4 4 0 0 1-4 4Zm-6.317 0H1a1 1 0 0 1-1-1 6.022 6.022 0 0 1 5.131-5.916 1 1 0 0 1 1.1 1.266A6.009 6.009 0 0 0 6 12a5.937 5.937 0 0 0 .586 2.57 1 1 0 0 1-.9 1.43ZM17 24H7a1 1 0 0 1-1-1 6 6 0 0 1 12 0 1 1 0 0 1-1 1Zm1-16a4 4 0 1 1 4-4 4 4 0 0 1-4 4ZM6 8a4 4 0 1 1 4-4 4 4 0 0 1-4 4Zm17 8h-4.683a1 1 0 0 1-.9-1.43A5.937 5.937 0 0 0 18 12a6.009 6.009 0 0 0-.236-1.65 1 1 0 0 1 1.105-1.266A6.022 6.022 0 0 1 24 15a1 1 0 0 1-1 1Z"/></svg>
  