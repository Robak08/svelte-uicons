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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M18 24h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2Zm-5 0H6a1 1 0 0 1 0-2h7a1 1 0 0 1 0 2Zm5-4h-7a1 1 0 0 1 0-2h7a1 1 0 0 1 0 2ZM7 20H6a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2Zm-4.33-1a.994.994 0 0 1-.628-.223A5.533 5.533 0 0 1 1.8 10.43a1 1 0 0 0 .345-.9 8.134 8.134 0 0 1-.032-2.89A7.945 7.945 0 0 1 8.5.138a8.049 8.049 0 0 1 8.735 4.438 1.039 1.039 0 0 0 .743.57c5.824 1.034 8.092 8.769 3.718 12.765a1 1 0 1 1-1.384-1.443 5.538 5.538 0 0 0-2.725-9.362 3.009 3.009 0 0 1-2.158-1.672A6 6 0 0 0 4.086 6.967a6.159 6.159 0 0 0 .023 2.18 3 3 0 0 1-.963 2.762 3.523 3.523 0 0 0 .154 5.314A1 1 0 0 1 2.67 19ZM18 16h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2Zm-5 0H6a1 1 0 0 1 0-2h7a1 1 0 0 1 0 2Z"/></svg>
  