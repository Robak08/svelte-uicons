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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M18.4 7.379a1.128 1.128 0 0 1-.769-.754 8 8 0 1 0-15.1 5.237 1.046 1.046 0 0 1-.308 1.238 5.5 5.5 0 0 0-2.166 5.2A5.622 5.622 0 0 0 5.683 23H11a1 1 0 0 0 1-1 1 1 0 0 0-1-1H5.683a3.614 3.614 0 0 1-3.646-2.981 3.456 3.456 0 0 1 1.376-3.313 3.021 3.021 0 0 0 .987-3.565 6.113 6.113 0 0 1-.073-4.126A5.956 5.956 0 0 1 9.215 3.05 6.109 6.109 0 0 1 9.987 3a5.984 5.984 0 0 1 5.756 4.28 2.977 2.977 0 0 0 2.01 1.99 5.934 5.934 0 0 1 .778 11.09.976.976 0 0 0-.531.888.988.988 0 0 0 1.388.915c4.134-1.987 6.38-7.214 2.88-12.264a6.935 6.935 0 0 0-3.868-2.52Z"/><path d="M18.707 16.707a1 1 0 0 0 0-1.414l-1.586-1.586a3 3 0 0 0-4.242 0l-1.586 1.586a1 1 0 0 0 1.414 1.414L14 15.414V23a1 1 0 0 0 2 0v-7.586l1.293 1.293a1 1 0 0 0 1.414 0Z"/></svg>
  