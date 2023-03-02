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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M13 10.5a3.5 3.5 0 0 1-7 0 3.5 3.5 0 0 1 7 0Zm11 1a6.48 6.48 0 0 1-2.342 4.99 2.534 2.534 0 0 0-.829 1.389A8.223 8.223 0 0 1 13 24 13.015 13.015 0 0 1 0 11 10.226 10.226 0 0 1 9.549.01a9.943 9.943 0 0 1 8.763 4.446 2.3 2.3 0 0 0 1.212.866A6.486 6.486 0 0 1 24 11.5ZM13 19a1 1 0 0 0-2 0 1 1 0 0 0 2 0Zm2-8.5c-.231-7.268-10.77-7.267-11 0 .231 7.268 10.77 7.267 11 0Zm1 6.5a1 1 0 0 0-2 0 1 1 0 0 0 2 0Zm4-6a1 1 0 0 0-2 0 1 1 0 0 0 2 0Z"/></svg>
  