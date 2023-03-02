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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M24 20.5a3.5 3.5 0 1 1-3.5-3.5 3.5 3.5 0 0 1 3.5 3.5ZM22.747 7.1A4.132 4.132 0 0 0 16.9 1.253l-2.466 2.469a31.369 31.369 0 0 0-4.5 5.685S8.776 11.3 8.437 11.821l3.775 3.779c.447-.284 2.21-1.366 2.574-1.6a31.182 31.182 0 0 0 5.358-4.3Zm-15.56 6.3L2.5 18.086l-.793-.793a1 1 0 1 0-1.414 1.414l5 5a1 1 0 1 0 1.414-1.414l-.793-.793 4.686-4.687Z"/></svg>
  