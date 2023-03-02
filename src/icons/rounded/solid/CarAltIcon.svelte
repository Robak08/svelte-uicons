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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M0 11V8.5A1.5 1.5 0 0 1 1.5 7s.959 0 1 0a27.327 27.327 0 0 1 2.187-3.951 3.884 3.884 0 0 1 1.978-1.357c1.761-.856 8.909-.856 10.67 0a3.884 3.884 0 0 1 1.978 1.357A27.327 27.327 0 0 1 21.5 7h1A1.5 1.5 0 0 1 24 8.5V11a90.636 90.636 0 0 0-12-1 90.636 90.636 0 0 0-12 1Zm24 2.023V15a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4v-1.973A90.835 90.835 0 0 1 12 12a90.835 90.835 0 0 1 12 1.027ZM6 16a1 1 0 0 0-2 0 1 1 0 0 0 2 0Zm14 0a1 1 0 0 0-2 0 1 1 0 0 0 2 0ZM6.942 21c.587 3.954-5.472 3.952-4.884 0Zm15 0c.587 3.954-5.472 3.952-4.884 0Z"/></svg>
  