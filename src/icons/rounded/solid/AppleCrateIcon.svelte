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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M14.35 1.76a.999.999 0 0 1-.11-1.41c.36-.42.99-.47 1.41-.12.1.09.64.57 1.11 1.29.12-.22.26-.44.45-.63.62-.62 1.51-.82 2.12-.89.38-.04.71.29.67.67-.06.61-.27 1.49-.89 2.12-.1.1-.22.19-.33.27 2.37.28 4.23 2.38 4.23 4.94 0 .69-.14 1.37-.4 1.99h-6.89c.19-.65.29-1.32.29-1.99 0-1.92-.75-3.66-1.96-4.92.23-.04.47-.08.71-.08h.55c-.27-.56-.73-1.05-.95-1.25ZM13.6 10c.26-.62.4-1.3.4-1.99 0-2.57-1.86-4.67-4.23-4.94.11-.08.23-.17.33-.27.63-.63.83-1.51.89-2.12a.615.615 0 0 0-.67-.67C9.71.07 8.83.28 8.2.9c-.19.19-.33.41-.45.63C7.28.81 6.74.33 6.64.24a1.01 1.01 0 0 0-1.41.12.999.999 0 0 0 .11 1.41c.22.19.68.68.95 1.25h-.55C3.13 3.01 1 5.25 1 8.01c0 .69.14 1.37.4 1.99h12.2ZM5 24h14c2.76 0 5-2.24 5-5H0c0 2.76 2.24 5 5 5Zm19-7v-2c0-1.65-1.35-3-3-3H3c-1.65 0-3 1.35-3 3v2h24Z"/></svg>
  