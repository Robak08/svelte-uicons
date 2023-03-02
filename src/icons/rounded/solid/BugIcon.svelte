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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M0 19v4a1 1 0 0 0 2 0v-4h2.93a8.248 8.248 0 0 0 14.14 0H22v4a1 1 0 0 0 2 0v-4a2 2 0 0 0-2-2h-2.053a8.2 8.2 0 0 0 .325-2.273A8.37 8.37 0 0 0 20.2 13.7l-.175-.7H23a1 1 0 0 0 0-2h-3.478l-1.009-4H22a2 2 0 0 0 2-2V1a1 1 0 0 0-2 0v4h-4c-.018 0-.032.009-.05.01a6.411 6.411 0 0 0-11.89 0C6.039 5.011 6.021 5 6 5H2V1a1 1 0 0 0-2 0v4a2 2 0 0 0 2 2h3.485l-1.013 4H1a1 1 0 0 0 0 2h2.965l-.145.573-.02.127a8.37 8.37 0 0 0-.07 1.032A8.2 8.2 0 0 0 4.053 17H2a2 2 0 0 0-2 2Z"/></svg>
  