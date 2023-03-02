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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M9 6H4V4.5C4 2.019 6.019 0 8.5 0h7C17.981 0 20 2.019 20 4.5V6h-5a1 1 0 1 0 0 2 1 1 0 1 1 0 2H9a1 1 0 0 1 0-2 1 1 0 1 0 0-2Zm15 3a1 1 0 0 1-1 1h-1.176c.111.314.176.649.176 1v8c0 2.757-2.243 5-5 5H7c-2.757 0-5-2.243-5-5v-8c0-.351.065-.686.176-1H1a1 1 0 1 1 0-2h5.184A2.966 2.966 0 0 0 6 9c0 1.654 1.346 3 3 3h6c1.654 0 3-1.346 3-3 0-.352-.072-.686-.184-1H23a1 1 0 0 1 1 1Zm-13.5 6.5a1.5 1.5 0 1 0 3.001-.001 1.5 1.5 0 0 0-3.001.001Zm-4.5 0a1.5 1.5 0 1 0 3.001-.001A1.5 1.5 0 0 0 6 15.5ZM17 20a1 1 0 0 0-1-1H8a1 1 0 1 0 0 2h8a1 1 0 0 0 1-1Zm1-4.5a1.5 1.5 0 1 0-3.001.001A1.5 1.5 0 0 0 18 15.5Z"/></svg>
  