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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M24 10.5c-.241 6.376-8.06 5.643-8-.5a1 1 0 0 0-1-1c-.838.011-1.083.787-1 1.5a6.542 6.542 0 0 0 2.332 4.9 5.625 5.625 0 0 1-5.823-.482C6.114 17.631-.356 15.011 0 10c0-2.581 2-5 4.483-5C7 5 9 7.409 9 10a1 1 0 0 0 2 0 7.006 7.006 0 0 0-5.3-6.782c1.98-4.1 8.322-4.29 10.5-.206a4.431 4.431 0 0 1 4.6 3.194A4.5 4.5 0 0 1 24 10.5ZM14 18a9.123 9.123 0 0 1-1-.057V20a1 1 0 0 1-2 0v-2.554c-.2-.076-.391-.15-.576-.242a8.7 8.7 0 0 1-3.2.782c.731 2.162.163 5.926 3.617 6.014h2.316a3.021 3.021 0 0 0 2.987-2.725 19.37 19.37 0 0 1 .83-3.938A6.977 6.977 0 0 1 14 18Z"/></svg>
  