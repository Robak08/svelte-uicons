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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M13 2a2 2 0 0 1 4 0 2 2 0 0 1-4 0Zm-3 3v4H9v7h6V9h-3V2.948A2 2 0 1 0 10 5Zm9 4h-2v7h7v-2a5.006 5.006 0 0 0-5-5ZM7 9H5a5.006 5.006 0 0 0-5 5v2h7ZM0 19a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5v-1H0ZM20 2.545a1 1 0 0 0 .18-.016l3-.545a1 1 0 0 0-.359-1.968l-3 .546A1 1 0 0 0 20 2.545ZM1 6a1.012 1.012 0 0 0 .18-.016l4-.727a1 1 0 0 0-.358-1.968l-4 .727A1 1 0 0 0 1 6Z"/></svg>
  