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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M5 8.99c-.88 0-1.76-.33-2.42-1L.29 5.71A.996.996 0 1 1 1.7 4.3l2.28 2.28c.56.56 1.46.56 2.02 0l3.56-3.56a3.428 3.428 0 0 1 4.85 0l1.56 1.56c.54.54 1.48.54 2.02 0l4.3-4.29A.996.996 0 1 1 23.7 1.7l-4.28 4.28c-1.29 1.29-3.55 1.29-4.85 0l-1.56-1.56c-.56-.56-1.46-.56-2.02 0L7.43 7.98c-.67.67-1.55 1-2.42 1ZM8 23v-9c0-.55-.45-1-1-1s-1 .45-1 1v9c0 .55.45 1 1 1s1-.45 1-1Zm-5 0V12c0-.55-.45-1-1-1s-1 .45-1 1v11c0 .55.45 1 1 1s1-.45 1-1Zm10 0V9c0-.55-.45-1-1-1s-1 .45-1 1v14c0 .55.45 1 1 1s1-.45 1-1Zm5 0V12c0-.55-.45-1-1-1s-1 .45-1 1v11c0 .55.45 1 1 1s1-.45 1-1Zm5 0V8c0-.55-.45-1-1-1s-1 .45-1 1v15c0 .55.45 1 1 1s1-.45 1-1Z"/></svg>
  