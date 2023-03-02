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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M13 24H6a1 1 0 0 1 0-2h7a1 1 0 0 1 0 2Zm6-1a1 1 0 0 0-1-1h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 1-1Zm0-4a1 1 0 0 0-1-1h-7a1 1 0 0 0 0 2h7a1 1 0 0 0 1-1ZM8 19a1 1 0 0 0-1-1H6a1 1 0 0 0 0 2h1a1 1 0 0 0 1-1Zm6-4a1 1 0 0 0-1-1H6a1 1 0 0 0 0 2h7a1 1 0 0 0 1-1Zm5 0a1 1 0 0 0-1-1h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 1-1Zm-1.082-9.867a1.033 1.033 0 0 1-.687-.557A8.049 8.049 0 0 0 8.5.138a7.945 7.945 0 0 0-6.383 6.5 8.134 8.134 0 0 0 .033 2.887.987.987 0 0 1-.315.874 5.549 5.549 0 0 0 1.211 9.012c-.354-1.133.843-1.993.344-2.959A3.027 3.027 0 0 1 6.117 12H13a2.928 2.928 0 0 1 1.415.364c.891.494 1.644-.472 2.585-.364 1.686-.18 3.521.521 3.919 2.3a2.95 2.95 0 0 1-.309 2.156c-.451.718.279 1.338.342 2.061 4.965-3.471 3.708-12.146-3.034-13.384Z"/></svg>
  