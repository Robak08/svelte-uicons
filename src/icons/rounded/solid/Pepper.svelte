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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M13 1a1 1 0 0 1 1-1c1.753 0 4.622.689 4.965 5.1a6.04 6.04 0 0 1 2.015.7c.177 4.216-6.121 4.226-5.961.012a5.812 5.812 0 0 1 1.935-.712C16.684 2.35 15.169 2 14 2a1 1 0 0 1-1-1Zm9.782 6.38a4.982 4.982 0 0 1-9.548.052A6.148 6.148 0 0 0 12 11.048C11.981 13.338 10.516 15 8.515 15c-.592 0-3.61-.064-4.515-4a2 2 0 0 0-4 0c-.189 7.487 5.132 12.99 12.225 13A12.248 12.248 0 0 0 24 11.635a6.331 6.331 0 0 0-1.218-4.255ZM12.225 24c-.077 0 .075 0 0 0Z"/></svg>
  