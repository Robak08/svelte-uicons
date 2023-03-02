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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M15.8 5.016c1.047-.61 3.313-3.1 1.513-3.964a1 1 0 0 0-1.265.632A3.465 3.465 0 0 1 13 3.93V1a1 1 0 0 0-2 0v2.93a3.462 3.462 0 0 1-3.051-2.246 1 1 0 0 0-1.265-.632C4.882 1.92 7.147 4.4 8.2 5.016A8.786 8.786 0 0 0 0 14c0 4.721 4.276 10 10 10h4c12.507.063 13.352-18.122 1.8-18.984Zm1.17 4.226c-.738 2.131-4.747-.973-4.97-1.562-.211.579-4.235 3.7-4.97 1.562a1 1 0 0 1 .727-1.212A4.188 4.188 0 0 0 10.711 6h2.577a4.187 4.187 0 0 0 2.954 2.03 1 1 0 0 1 .728 1.212Z"/></svg>
  