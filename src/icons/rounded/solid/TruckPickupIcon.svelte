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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M22 18H2a2 2 0 0 1-2-2v-1a4 4 0 0 1 4-4h16a4 4 0 0 1 4 4v1a2 2 0 0 1-2 2ZM3.058 20c-.587 3.954 5.472 3.952 4.884 0Zm13 0c-.587 3.954 5.472 3.952 4.884 0Zm3.767-11-3.387-4.859A5 5 0 0 0 12.335 2H11.5A2.5 2.5 0 0 0 9 4.5V9Z"/></svg>
  