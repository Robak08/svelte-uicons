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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M22 18H2a2 2 0 0 1-2-2v-1a4 4 0 0 1 4-4h16a4 4 0 0 1 4 4v1a2 2 0 0 1-2 2ZM3.058 20c-.587 3.954 5.472 3.952 4.884 0Zm13 0c-.587 3.954 5.472 3.952 4.884 0ZM12 9h7.825l-3.388-4.859A5 5 0 0 0 12.336 2H12Zm-2-7H8.5a5.024 5.024 0 0 0-4.675 3.228L2.3 9.249A5.956 5.956 0 0 1 4 9h6Z"/></svg>
  