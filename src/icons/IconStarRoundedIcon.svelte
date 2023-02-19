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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-icon-star {customClass}"><path d="M0 7V5c0-2.76 2.24-5 5-5h2c.55 0 1 .45 1 1s-.45 1-1 1H5C3.35 2 2 3.35 2 5v2c0 .55-.45 1-1 1s-1-.45-1-1Zm7 15H5c-1.65 0-3-1.35-3-3v-2c0-.55-.45-1-1-1s-1 .45-1 1v2c0 2.76 2.24 5 5 5h2c.55 0 1-.45 1-1s-.45-1-1-1Zm16-6c-.55 0-1 .45-1 1v2c0 1.65-1.35 3-3 3h-2c-.55 0-1 .45-1 1s.45 1 1 1h2c2.76 0 5-2.24 5-5v-2c0-.55-.45-1-1-1ZM19 0h-2c-.55 0-1 .45-1 1s.45 1 1 1h2c1.65 0 3 1.35 3 3v2c0 .55.45 1 1 1s1-.45 1-1V5c0-2.76-2.24-5-5-5Zm-3.1 16.14-.9-2.73 2.17-1.77c.29-.25.4-.65.27-1.02s-.48-.6-.86-.6h-2.75l-.97-2.61c-.13-.36-.48-.6-.86-.6s-.73.24-.86.6l-.97 2.61H7.42c-.38 0-.73.24-.86.6a.9.9 0 0 0 .27 1.01l2.18 1.77-.86 2.76c-.12.37.01.78.32 1.01.16.12.36.18.55.18.18 0 .36-.05.51-.15l2.48-1.66 2.52 1.64a.912.912 0 0 0 1.37-1.05Z"/></svg>
  