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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M24 4.5a1 1 0 1 1-2 0c0-1.212-.977-2.5-2.785-2.5a1 1 0 1 1 0-2C21.899 0 24 1.977 24 4.5Zm-22 0C2 3.288 2.977 2 4.785 2a1 1 0 1 0 0-2C2.102 0 0 1.977 0 4.5a1 1 0 1 0 2 0ZM23 13c0 2.738-1.006 5.246-2.667 7.173C21.179 20.622 22 21.49 22 23a1 1 0 1 1-2 0c0-1-.858-1.194-1.122-1.23a1.05 1.05 0 0 1-.188-.044c-1.855 1.426-4.175 2.275-6.69 2.275s-4.833-.848-6.687-2.273a1.037 1.037 0 0 1-.202.044c-.252.034-1.11.229-1.11 1.229a1 1 0 1 1-2 0c0-1.51.821-2.378 1.667-2.827a10.954 10.954 0 0 1-2.667-7.173C1 7.272 5.401 2.553 11 2.046V1a1 1 0 1 1 2 0v1.046C18.599 2.553 23 7.272 23 13Zm-9.5 5.5a1.5 1.5 0 1 0-3.001.001A1.5 1.5 0 0 0 13.5 18.5ZM13 7a1 1 0 1 0-2 0v7a1 1 0 1 0 2 0V7Z"/></svg>
  