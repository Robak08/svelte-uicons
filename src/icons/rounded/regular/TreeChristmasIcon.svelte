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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="m20.44 16.855-1.481-2.221a2.214 2.214 0 0 0 .619-3.072l-2.091-3.135a2.234 2.234 0 0 0 .456-.58 2.21 2.21 0 0 0-.084-2.256 1.23 1.23 0 0 0-.081-.109L13.678.7a2.38 2.38 0 0 0-3.4.051L6.206 5.478a.912.912 0 0 0-.081.107 2.212 2.212 0 0 0 .38 2.853l-2.083 3.124a2.214 2.214 0 0 0 .619 3.072L3.56 16.855A3.309 3.309 0 0 0 6.312 22H11v1a1 1 0 0 0 2 0v-1h4.687a3.309 3.309 0 0 0 2.753-5.145Zm-1.6 2.454a1.292 1.292 0 0 1-1.153.691H6.312a1.309 1.309 0 0 1-1.088-2.035l2.276-3.41A1 1 0 0 0 6.666 13h-.405a.2.2 0 0 1-.186-.111.2.2 0 0 1 .011-.217l2.745-4.117a1 1 0 0 0 .04-1.027A1.017 1.017 0 0 0 7.979 7a.2.2 0 0 1-.186-.11.2.2 0 0 1-.011-.178l3.962-4.6a.327.327 0 0 1 .464-.052L16.2 6.713a.2.2 0 0 1-.011.178A.2.2 0 0 1 16 7a1 1 0 0 0-.832 1.555l2.745 4.117a.2.2 0 0 1 .011.217.2.2 0 0 1-.186.111h-.405a1 1 0 0 0-.832 1.555l2.274 3.41a1.289 1.289 0 0 1 .066 1.344Z"/><circle cx="9" cy="17" r="1"/><circle cx="14" cy="17" r="1"/><circle cx="11" cy="13" r="1"/><circle cx="13" cy="10" r="1"/><circle cx="11" cy="7" r="1"/></svg>
  