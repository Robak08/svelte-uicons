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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M20.044 1.02C24.2.761 25.71 9.091 21.5 12.932A6.708 6.708 0 0 1 16.8 15a9.816 9.816 0 0 1-3.8-.7V5.38c2.018-2.246 4.512-4.36 7.044-4.36ZM12 4a2 2 0 0 0 0-4 2 2 0 0 0 0 4Zm4.791 13A11.685 11.685 0 0 1 12 16c-2.1 1.11-7.2 1.783-10.213-1.025a6.606 6.606 0 0 0-.454 5.136 4.021 4.021 0 0 0 2.3 2.573 3.911 3.911 0 0 0 3.355-.132A16.366 16.366 0 0 0 11 19.622V22a1 1 0 0 0 2 0v-2.378a16.366 16.366 0 0 0 4.018 2.93 3.911 3.911 0 0 0 3.355.132 4.021 4.021 0 0 0 2.3-2.573 6.606 6.606 0 0 0-.454-5.136A8.571 8.571 0 0 1 16.791 17Zm-9.585-2A9.842 9.842 0 0 0 11 14.3V5.373C7.52 1.116.239-2.567.006 7.284a8.183 8.183 0 0 0 2.5 5.649A6.819 6.819 0 0 0 7.206 15Z"/></svg>
  