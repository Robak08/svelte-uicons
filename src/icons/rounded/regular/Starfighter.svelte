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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23 6a1 1 0 0 0-1 1v7h-6.017C15.7-4.73 8.3-4.671 8.017 14H2V7a1 1 0 0 0-2 0v13a1 1 0 0 0 2 0v-.586l3.878 3.878A2.433 2.433 0 0 0 9.965 22h4.07a2.433 2.433 0 0 0 4.086 1.293L22 19.414V20a1 1 0 0 0 2 0V7a1 1 0 0 0-1-1Zm-13 9a53.685 53.685 0 0 1 .536-7.473 2.274 2.274 0 0 1 2.928 0A53.685 53.685 0 0 1 14 15v5h-4Zm3.046-9.849a4.379 4.379 0 0 0-2.092 0A8.567 8.567 0 0 1 12 2.093a8.567 8.567 0 0 1 1.046 3.058ZM8 21.586a.43.43 0 0 1-.707.293L2 16.586V16h6Zm8.706.293a.43.43 0 0 1-.706-.293V16h6v.586Z"/></svg>
  