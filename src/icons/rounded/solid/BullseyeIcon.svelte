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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M12 24C5.383 24 0 18.617 0 12 .603-3.898 23.399-3.893 24 12c0 6.617-5.383 12-12 12Zm0-22C6.486 2 2 6.486 2 12c.503 13.248 19.499 13.245 20 0 0-5.514-4.486-10-10-10Zm0 18c-4.411 0-8-3.589-8-8 .376-10.588 15.626-10.585 16 0 0 4.411-3.589 8-8 8Zm0-14c-7.929.252-7.928 11.749 0 12 7.929-.252 7.927-11.749 0-12Zm0 10c-5.274-.139-5.273-7.862 0-8 5.274.139 5.273 7.862 0 8Zm0-6c-2.628.047-2.628 3.954 0 4 2.628-.047 2.628-3.954 0-4Z"/></svg>
  