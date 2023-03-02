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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="m20.44 16.855-1.481-2.221a2.214 2.214 0 0 0 .619-3.072l-2.091-3.135a2.234 2.234 0 0 0 .456-.58 2.21 2.21 0 0 0-.084-2.256C17.834 5.553 13.678.7 13.678.7a2.38 2.38 0 0 0-3.4.051s-4.126 4.8-4.15 4.832a2.212 2.212 0 0 0 .38 2.853l-2.086 3.126a2.214 2.214 0 0 0 .619 3.072L3.56 16.855A3.309 3.309 0 0 0 6.312 22H11v1a1 1 0 0 0 2 0v-1h4.687a3.309 3.309 0 0 0 2.753-5.145ZM12 4a1 1 0 1 1-1 1 1 1 0 0 1 1-1ZM8 19a1 1 0 1 1 1-1 1 1 0 0 1-1 1Zm0-5a1 1 0 1 1 1-1 1 1 0 0 1-1 1Zm4-4a1 1 0 1 1 1-1 1 1 0 0 1-1 1Zm4 2a1 1 0 1 1 1-1 1 1 0 0 1-1 1Zm0 6a1 1 0 1 1 1-1 1 1 0 0 1-1 1Zm-4-2a1 1 0 1 1 1-1 1 1 0 0 1-1 1Z"/></svg>
  