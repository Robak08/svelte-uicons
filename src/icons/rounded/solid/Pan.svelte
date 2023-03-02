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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M14 0C6.665-.189 1.6 8.253 5.139 14.618l-4.26 4.261a3 3 0 0 0 4.242 4.242l4.261-4.26C15.748 22.4 24.189 17.336 24 10A10.011 10.011 0 0 0 14 0Zm0 17c-9.251-.3-9.249-13.706 0-14a1 1 0 0 1 0 2c-6.607.21-6.607 9.791 0 10a5.006 5.006 0 0 0 5-5 1 1 0 0 1 2 0 7.009 7.009 0 0 1-7 7Z"/></svg>
  