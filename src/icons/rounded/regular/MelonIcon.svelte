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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M22.374 2.324A4.336 4.336 0 0 0 15.5 1.273L1.274 15.5a4.347 4.347 0 0 0-1.215 3.742c.718 3.917 5.816 4.606 9.038 4.765 10.879.157 18.424-11.958 13.277-21.683ZM12.42 12.42a5.366 5.366 0 0 1-6.237.995l7.233-7.234a5.376 5.376 0 0 1-.996 6.239Zm5.8 5.8a12.873 12.873 0 0 1-14.987 2.374 2.323 2.323 0 0 1-.546-3.683l2.037-2.037c6.563 4.133 14.25-3.623 10.16-10.161l2.027-2.027a2.319 2.319 0 0 1 3.681.546 12.869 12.869 0 0 1-2.376 14.984Z"/></svg>
  