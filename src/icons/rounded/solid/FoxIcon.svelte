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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M0 8.008v-6A2 2 0 0 1 .759.435a1.982 1.982 0 0 1 1.7-.383A6.133 6.133 0 0 1 6.6 3.782 21.876 21.876 0 0 1 12 3a21.876 21.876 0 0 1 5.4.782 6.132 6.132 0 0 1 4.144-3.73A2.005 2.005 0 0 1 24 2.006v6a12.216 12.216 0 0 0-4.774 1.1A10.256 10.256 0 0 0 13 19a1 1 0 0 1-2 0 10.259 10.259 0 0 0-6.226-9.9A12.233 12.233 0 0 0 0 8.008ZM20 11a3.778 3.778 0 0 1-3.642 2.989A8.938 8.938 0 0 0 15 19a3 3 0 0 1-6 0 8.938 8.938 0 0 0-1.358-5.011A3.778 3.778 0 0 1 4 11a10.155 10.155 0 0 0-4-.99 10.925 10.925 0 0 0 3.22 7.626l4.657 4.657a5.862 5.862 0 0 0 8.242 0l4.657-4.657A10.925 10.925 0 0 0 24 10.01a10.155 10.155 0 0 0-4 .99Z"/></svg>
  