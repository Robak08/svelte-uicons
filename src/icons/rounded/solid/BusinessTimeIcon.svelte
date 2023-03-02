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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23.961 17.336C23.629 14.339 21.083 12 18 12c-7.514.194-8.097 10.912-.702 11.955 3.767.499 7.135-2.85 6.663-6.62ZM20 20a.999.999 0 0 1-1.414 0l-1.293-1.293A1 1 0 0 1 17 18v-2c.006-1.308 1.995-1.307 2 0v1.586l1 1A.999.999 0 0 1 20 20Zm-2-10a7.972 7.972 0 0 1 6 2.721V9c0-2.757-2.243-5-5-5h-1.101A5.009 5.009 0 0 0 13 0h-2a5.01 5.01 0 0 0-4.899 4H5C2.243 4 0 6.243 0 9v3h12.721A7.96 7.96 0 0 1 18 10Zm-7-8h2c1.302 0 2.402.839 2.816 2H8.185a2.996 2.996 0 0 1 2.816-2Zm1.721 22H5c-2.757 0-5-2.243-5-5v-5h11.079c-1.939 3.109-1.132 7.725 1.642 10Z"/></svg>
  