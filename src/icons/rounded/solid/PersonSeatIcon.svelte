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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M6 2.5C6 1.121 7.121 0 8.5 0S11 1.121 11 2.5 9.879 5 8.5 5 6 3.879 6 2.5ZM20 22h-1.246l-1.378-4.825A3.014 3.014 0 0 0 14.491 15H10c-.551 0-1-.448-1-1v-2h6a1 1 0 1 0 0-2H9V8a1 1 0 1 0-2 0v6c0 1.654 1.346 3 3 3h4.491c.444 0 .84.298.962.725l1.378 4.824A2.008 2.008 0 0 0 18.754 24H20a1 1 0 1 0 0-2Zm-7-3h-3c-2.757 0-5-2.243-5-5V8a1 1 0 1 0-2 0v6c0 3.859 3.14 7 7 7h3a1 1 0 1 0 0-2Z"/></svg>
  