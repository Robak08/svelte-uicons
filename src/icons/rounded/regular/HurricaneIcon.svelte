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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M10.428 24H6a1 1 0 0 1 0-2 6.44 6.44 0 0 0 3.818-1.24 10.042 10.042 0 0 1-7.266-13.1A11.472 11.472 0 0 1 13.572 0H18a1 1 0 0 1 0 2 6.44 6.44 0 0 0-3.818 1.24 10.041 10.041 0 0 1 7.266 13.1A11.472 11.472 0 0 1 10.428 24Zm2.047-21.941A9.387 9.387 0 0 0 4.45 8.3a8.039 8.039 0 0 0 6.085 10.569 1.809 1.809 0 0 1 1.436 1.352 1.837 1.837 0 0 1-.446 1.725 9.393 9.393 0 0 0 8.026-6.246 8.04 8.04 0 0 0-6.085-10.565 1.809 1.809 0 0 1-1.437-1.352 1.834 1.834 0 0 1 .446-1.724ZM12 15a3 3 0 0 1 0-6 3 3 0 0 1 0 6Zm0-4a1 1 0 0 0 0 2 1 1 0 0 0 0-2Z"/></svg>
  