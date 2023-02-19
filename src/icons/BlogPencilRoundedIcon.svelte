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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-blog-pencil {customClass}"><path d="M19 2H5C2.24 2 0 4.24 0 7v10c0 2.76 2.24 5 5 5h7c.55 0 1-.45 1-1s-.45-1-1-1H5c-1.65 0-3-1.35-3-3V9h20v5c0 .55.45 1 1 1s1-.45 1-1V7c0-2.76-2.24-5-5-5ZM2 7c0-1.65 1.35-3 3-3h14c1.65 0 3 1.35 3 3H2Zm14.41 5.17A3.962 3.962 0 0 0 13.58 11h-1.59c-.55 0-1 .45-1 1v1.59c0 1.07.42 2.07 1.17 2.83l6.71 6.71c.57.57 1.32.88 2.12.88s1.55-.31 2.12-.88.88-1.32.88-2.12-.31-1.55-.88-2.12l-6.71-6.71Zm5.29 9.54c-.38.38-1.04.38-1.41 0L13.58 15c-.38-.38-.59-.88-.59-1.41V13h.59c.53 0 1.04.21 1.41.59l6.71 6.71c.19.19.29.44.29.71s-.1.52-.29.71Z"/></svg>
  