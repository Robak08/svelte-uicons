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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M13.319 8h4.362a5.01 5.01 0 0 1 4.709 3.318l.853 2.388a13.11 13.11 0 0 1 .38 1.294H7.377a13.11 13.11 0 0 1 .38-1.294l.853-2.388A5.01 5.01 0 0 1 13.319 8ZM24 18.079c0-.362-.016-.721-.046-1.079H21v1a1 1 0 0 1-2 0v-1h-7v1a1 1 0 0 1-2 0v-1H7.046A4.221 4.221 0 0 0 9 21.476V22a2 2 0 0 0 4 0h5a2 2 0 0 0 4 0v-.524a3.909 3.909 0 0 0 2-3.397ZM15.912 5.706l-.852-2.388A5.012 5.012 0 0 0 10.351 0H5.988a5.012 5.012 0 0 0-4.709 3.318L.427 5.706C.392 5.8.372 5.9.34 6H16c-.033-.1-.053-.2-.088-.294ZM5 8v1a1 1 0 0 1-2 0V8H.046C.016 8.358 0 9.717 0 10.079a3.909 3.909 0 0 0 2 3.4V14a2.007 2.007 0 0 0 3.168 1.616l.267-1.09a14.553 14.553 0 0 1 .439-1.492l.853-2.388A6.973 6.973 0 0 1 8.43 8Z"/></svg>
  