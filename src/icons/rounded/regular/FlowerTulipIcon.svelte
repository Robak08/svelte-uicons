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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23.535 14.725a1.99 1.99 0 0 0-1.726-.716A11.993 11.993 0 0 0 13 18.987V13.91A6.006 6.006 0 0 0 18 8c0-2.793-1.943-5.152-3.844-7.091a3.085 3.085 0 0 0-4.312 0C7.943 2.848 6 5.207 6 8a6.006 6.006 0 0 0 5 5.91v5.077a11.993 11.993 0 0 0-8.809-4.978 1.992 1.992 0 0 0-1.726.716 1.971 1.971 0 0 0-.393 1.792C2.111 23.855 11.591 24 11.994 24h.012c.4 0 9.884-.145 11.923-7.483a1.975 1.975 0 0 0-.394-1.792ZM8 8c0-2.654 3.318-5.719 3.338-5.736C10.973 3.2 8.693 8.9 11 9a1 1 0 0 0 1-1 13.472 13.472 0 0 1 1.257-5.137C14.688 4.393 16 6.154 16 8a4 4 0 0 1-8 0Zm-5.994 8a10.268 10.268 0 0 1 8.462 5.863C7.971 21.517 3.2 20.3 2.006 16Zm11.539 5.861A10.379 10.379 0 0 1 22 15.981c-1.194 4.302-5.954 5.53-8.455 5.88Z"/></svg>
  