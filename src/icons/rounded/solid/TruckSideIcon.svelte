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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M15 18H4a4 4 0 0 1-4-4V6a5 5 0 0 1 5-5h5a5 5 0 0 1 5 5Zm9-7v-1a5 5 0 0 0-5-5h-2v6Zm-7 2v5h3a4 4 0 0 0 4-4v-1ZM4.058 20a2.424 2.424 0 0 0-.058.5 2.5 2.5 0 0 0 5 0 2.424 2.424 0 0 0-.058-.5Zm11 0a2.424 2.424 0 0 0-.058.5 2.5 2.5 0 0 0 5 0 2.424 2.424 0 0 0-.058-.5Z"/></svg>
  