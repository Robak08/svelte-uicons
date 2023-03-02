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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23.297 9.034A3 3 0 0 0 21.03 8h-.086C20.445 3.506 16.625 0 12 0S3.555 3.506 3.056 8H3a3 3 0 0 0-2.97 3.425l1.061 7.424C1.511 21.786 4.065 24 7.031 24H17c2.966 0 5.52-2.215 5.94-5.151l1.061-7.424a3.002 3.002 0 0 0-.704-2.391ZM12 2c3.52 0 6.441 2.613 6.928 6H5.072C5.559 4.613 8.48 2 12 2ZM8 19a1 1 0 1 1-2 0v-6a1 1 0 1 1 2 0v6Zm5 0a1 1 0 1 1-2 0v-6a1 1 0 1 1 2 0v6Zm5 0a1 1 0 1 1-2 0v-6a1 1 0 1 1 2 0v6Z"/></svg>
  