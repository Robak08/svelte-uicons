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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M20 4.052A12 12 0 0 0 3.612 21.571 4.988 4.988 0 0 0 7.12 23h9.767a4.84 4.84 0 0 0 3.354-1.288A12.054 12.054 0 0 0 20 4.052Zm-1.132 16.207a2.862 2.862 0 0 1-1.981.741H7.12a3.005 3.005 0 0 1-2.11-.858 10 10 0 1 1 13.858.117ZM8.82 6.683a1 1 0 0 1-.248 1.392 6.031 6.031 0 0 0-.766 9.21 1 1 0 1 1-1.4 1.43 8.042 8.042 0 0 1 1.021-12.28 1 1 0 0 1 1.393.248ZM20 13a7.932 7.932 0 0 1-2.408 5.715 1 1 0 0 1-1.4-1.43 6.031 6.031 0 0 0-.765-9.21 1 1 0 1 1 1.144-1.64A8.008 8.008 0 0 1 20 13Zm-6 0a2 2 0 1 1-3-1.732V6a1 1 0 0 1 2 0v5.268A2 2 0 0 1 14 13Z"/></svg>
  