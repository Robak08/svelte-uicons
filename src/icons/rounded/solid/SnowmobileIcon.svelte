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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23 19a1 1 0 0 0-1 1 2 2 0 0 1-2 2h-.382L18.4 19.571a7 7 0 0 0 3.3-2.5l1.524-2.133a3.986 3.986 0 0 0-.815-5.494l-6.8-5.234a1 1 0 0 0-1.235 1.573l.583.467A11.612 11.612 0 0 1 16 10.183 2.919 2.919 0 0 1 13.032 13H11.5a1.019 1.019 0 0 0-.91 1.423 3.914 3.914 0 0 1-.065 3.283l-.164.294H8.07l.692-1.24a1.984 1.984 0 0 0 .145-1.546 1.94 1.94 0 0 0-.949-1.154l-3.4-2a1 1 0 0 1-.5-1.255.9.9 0 0 1 1.4-.371c.974.615 1.8 1.067 1.8 1.067a1 1 0 0 0 1.363-.344l1.563-2.585c1.141.617 2.392 1.3 3.257 1.766a1 1 0 0 0 .959-1.755c-.22-.12-5.415-2.944-6.059-3.266a2.978 2.978 0 0 0-2.29-.163 2.907 2.907 0 0 0-1.686 1.418L2.317 9.826A2.986 2.986 0 0 0 3.6 13.819L7.008 15.8 5.78 18h-2.3l.82-1.458L1.616 15H1a1 1 0 0 0-.832 1.555l1.266 1.9A3.006 3.006 0 0 0 3 24h6a3 3 0 0 0 2.816-4H16c.124 0 .244-.016.367-.022L17.382 22H15a1 1 0 0 0 0 2h5a4 4 0 0 0 4-4 1 1 0 0 0-1-1ZM9 22H3a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2ZM8 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1-5 0Z"/></svg>
  