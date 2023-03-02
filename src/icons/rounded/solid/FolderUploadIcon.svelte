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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23.899 7H0V6c0-2.757 2.243-5 5-5h2.528c.463 0 .927.109 1.341.316l3.156 1.578c.138.069.293.105.447.105H19a5.01 5.01 0 0 1 4.899 4ZM24 9v9c0 2.757-2.243 5-5 5H5c-2.757 0-5-2.243-5-5V9h24Zm-8.293 4.48-1.613-1.613a2.965 2.965 0 0 0-4.187 0L8.293 13.48c-.921.929.486 2.335 1.414 1.414L11 13.601v6.398c.006 1.308 1.995 1.307 2 0v-6.398l1.293 1.293c.929.921 2.335-.486 1.414-1.414Z"/></svg>
  