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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M17.914 5.132a1.033 1.033 0 0 1-.683-.555C13.1-3.756.516.231 2.146 9.528a1 1 0 0 1-.345.9 5.54 5.54 0 0 0 .413 8.472.988.988 0 0 0 1.524-.486 5.5 5.5 0 0 1 10.554.08A2.063 2.063 0 0 0 16.5 20c8.623.017 10.632-12.88 1.414-14.868ZM17 11h-1.274l.633 1.105a1 1 0 1 1-1.734.995L14 12.01l-.625 1.09a1 1 0 1 1-1.734-.995L12.274 11H11a1 1 0 0 1 0-2h1.274l-.633-1.1a1 1 0 1 1 1.734-1L14 7.99l.625-1.09a1 1 0 1 1 1.734.995L15.726 9H17a1 1 0 0 1 0 2Zm-4 9a1 1 0 0 1-1 1h-1.274l.633 1.105a1 1 0 1 1-1.734 1L9 22.01l-.625 1.09a1 1 0 1 1-1.734-1l.633-1.1H6a1 1 0 0 1 0-2h1.274l-.633-1.1a1 1 0 1 1 1.734-1L9 17.99l.625-1.09a1 1 0 1 1 1.734 1l-.633 1.1H12a1 1 0 0 1 1 1Z"/></svg>
  