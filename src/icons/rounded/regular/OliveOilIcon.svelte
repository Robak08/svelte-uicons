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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M19.211 12.32c4.205-2.912.264-9.264-4.211-6.77V3a3 3 0 0 0-3-3H8a1 1 0 0 0 0 2h1v6c0 .661-1.212 1.68-2.281 2.579C4.976 12.044 3 13.7 3 16c.089 3.525 3.167 8.02 6.732 8h4.536a5.059 5.059 0 0 0 3.758-1.7c2.48-2.5 4.547-7.019 1.185-9.98ZM17 7a2.009 2.009 0 0 1 .654 3.895A11.634 11.634 0 0 1 15.1 8.354 2.023 2.023 0 0 1 17 7Zm-6 1V2h1a1 1 0 0 1 1 1v5c-.041 1.955 2.447 3.563 4.031 5H6.969C8.554 11.563 11.041 9.955 11 8Zm5.536 12.967A3.061 3.061 0 0 1 14.268 22H9.732c-2.519.07-5.6-4.759-4.474-7h13.484c.892 2.2-.794 4.345-2.206 5.967Z"/></svg>
  