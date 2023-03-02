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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23 4a2 2 0 0 1-2 2H3a2 2 0 0 1 0-4h1.184A3 3 0 0 1 7 0h10a3 3 0 0 1 2.816 2H21a2 2 0 0 1 2 2ZM10 16c.105 3.954 3.895 3.953 4 0-.1-3.954-3.895-3.953-4 0Zm-1.919-1c.892-5.287 6.948-5.284 7.838 0h5.088l.735-5.876A1 1 0 0 0 20.75 8H3.25a1 1 0 0 0-.992 1.124L2.992 15Zm7.838 2c-.892 5.287-6.947 5.284-7.838 0H3.242l.328 2.62A5.008 5.008 0 0 0 8.531 24h6.938a5.008 5.008 0 0 0 4.961-4.38l.327-2.62Z"/></svg>
  