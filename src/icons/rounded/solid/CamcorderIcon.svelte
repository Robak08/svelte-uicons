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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M24 10.743v8.515a1.99 1.99 0 0 1-1.103 1.788 1.994 1.994 0 0 1-2.092-.184l-.805-.6V9.739l.805-.6a1.987 1.987 0 0 1 2.092-.184A1.988 1.988 0 0 1 24 10.743ZM5 19h8v-8H5v8Zm13-8v8c0 2.757-2.243 5-5 5H5c-2.757 0-5-2.243-5-5v-8c0-2.757 2.243-5 5-5h6.086L8.379 3.293A1.01 1.01 0 0 0 7.672 3H1a1 1 0 0 1 0-2h6.672c.801 0 1.555.312 2.121.879l4.215 4.227C16.277 6.579 18 8.593 18 11Zm-3-1a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V10Z"/></svg>
  