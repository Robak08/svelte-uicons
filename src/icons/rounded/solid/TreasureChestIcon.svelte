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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M6 .072A7.027 7.027 0 0 1 7 0h10c.339 0 .673.025 1 .072V9h-3c0-1.654-1.346-3-3-3S9 7.346 9 9H6V.072ZM20 9h4V7a7.01 7.01 0 0 0-4-6.324V9Zm-5 2v1c0 1.654-1.346 3-3 3s-3-1.346-3-3v-1H0v8a5.009 5.009 0 0 0 4 4.899V14a1 1 0 1 1 2 0v10h12V14a1 1 0 1 1 2 0v9.899A5.01 5.01 0 0 0 24 19v-8h-9ZM4 9V.676A7.01 7.01 0 0 0 0 7v2h4Zm8 4c.552 0 1-.449 1-1V9a1.001 1.001 0 0 0-2 0v3c0 .551.448 1 1 1Z"/></svg>
  