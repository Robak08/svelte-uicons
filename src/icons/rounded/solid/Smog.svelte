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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M19 24h-2a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Zm-6 0H1a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2Zm10-4H11a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2ZM7 20H5a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Zm12-4h-2a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Zm-6 0H1a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2Zm3-4a5 5 0 0 1-2.336-.579 6.271 6.271 0 0 1-5.536-.152.587.587 0 0 0-.571.028A5 5 0 0 1 .134 5.829a4.95 4.95 0 0 1 3.677-3.691 5.092 5.092 0 0 1 2.374 0 .277.277 0 0 0 .283-.074 6.033 6.033 0 0 1 8.8-.287c.065.065.217.219.734.219a4.978 4.978 0 0 1 3.9 1.875.4.4 0 0 0 .193.148 3.579 3.579 0 0 1 1.438.129 3.443 3.443 0 0 1 2.348 2.433 3.5 3.5 0 0 1-4.341 4.282c-.274-.079-.333-.032-.358-.011A4.932 4.932 0 0 1 16 12Z"/></svg>
  