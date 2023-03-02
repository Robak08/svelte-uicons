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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="m15.6.036-.706 1.411a1 1 0 0 1-.895.553h-4c-.379 0-.725-.214-.895-.553L8.4.036A5.007 5.007 0 0 0 4 5v14c0 2.757 2.243 5 5 5h6c2.757 0 5-2.243 5-5V5A5.008 5.008 0 0 0 15.6.036ZM13 21h-2a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z"/></svg>
  