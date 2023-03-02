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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M.164 4.705C.928 1.592 5.211-.055 7.84 1.621a6.16 6.16 0 0 1 8.32 0c6.436-3.279 11.424 6.113 4.514 9.092a.934.934 0 0 0-.674.851V17H4v-5.436a.934.934 0 0 0-.674-.851A5.017 5.017 0 0 1 .164 4.705ZM4 19a4.559 4.559 0 0 0 4.5 5h7a4.559 4.559 0 0 0 4.5-5Z"/></svg>
  