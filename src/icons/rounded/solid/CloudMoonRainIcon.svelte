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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M18.986 24a1 1 0 0 1-1-1v-3a1 1 0 0 1 2 0v3a1 1 0 0 1-1 1Zm-4 0a1 1 0 0 1-1-1v-3a1 1 0 0 1 2 0v3a1 1 0 0 1-1 1Zm-4 0a1 1 0 0 1-1-1v-3a1 1 0 0 1 2 0v3a1 1 0 0 1-1 1Zm9.162-10.855a1.056 1.056 0 0 1-.605-.467 6 6 0 0 0-11.368.855 10.226 10.226 0 0 0-.176 2A1.74 1.74 0 0 1 7.063 17a3.513 3.513 0 0 0 .923 5.643V20a3.01 3.01 0 0 1 5-2.22 2.988 2.988 0 0 1 4 0 3.01 3.01 0 0 1 5 2.22v1.988a5.008 5.008 0 0 0-1.838-8.842ZM5.672 15.564a3.048 3.048 0 0 1 .33-.27 11.539 11.539 0 0 1 .23-2.233 8.015 8.015 0 0 1 3.922-5.076A9.562 9.562 0 0 1 12.6 3.87a2.122 2.122 0 0 0-.946-3.594A10.038 10.038 0 0 0 7.779.117a9.254 9.254 0 0 0-3.907 16.664 3.767 3.767 0 0 0 .651.416 5.476 5.476 0 0 1 1.149-1.633ZM15 6a1 1 0 0 0 2 0 1 1 0 0 0-2 0Zm4-3a1 1 0 0 0 2 0 1 1 0 0 0-2 0Zm2 6a1 1 0 0 0 2 0 1 1 0 0 0-2 0Z"/></svg>
  