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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M22.95 9.6a1 1 0 0 0-1.414 0L10.644 20.539a5 5 0 1 1-7.072-7.071L14.121 2.876a3 3 0 0 1 4.243 4.242L7.815 17.71a1.022 1.022 0 0 1-1.414 0 1 1 0 0 1 0-1.414l9.392-9.435a1 1 0 0 0-1.414-1.414l-9.392 9.435a3 3 0 0 0 0 4.243 3.073 3.073 0 0 0 4.243 0L19.778 8.532a5 5 0 0 0-7.071-7.07L2.158 12.054a7 7 0 0 0 9.9 9.9L22.95 11.018a1 1 0 0 0 0-1.418Z"/></svg>
  