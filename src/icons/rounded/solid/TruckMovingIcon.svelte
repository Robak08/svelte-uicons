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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M15 18H1a1 1 0 0 1-1-1V5.5A4.5 4.5 0 0 1 4.5 1h6A4.5 4.5 0 0 1 15 5.5Zm2-5v5h3a4 4 0 0 0 4-4v-1ZM.058 20c-.587 3.954 5.472 3.952 4.884 0Zm6 0c-.587 3.954 5.472 3.952 4.884 0Zm9 0c-.587 3.954 5.472 3.952 4.884 0ZM17 11h6.716c-.024-.08-1.084-3.265-1.084-3.265A3.994 3.994 0 0 0 18.838 5H17Z"/></svg>
  