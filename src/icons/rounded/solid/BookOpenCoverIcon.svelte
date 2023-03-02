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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M12 24a5.995 5.995 0 0 1-1.648-.231l-6.726-1.921A5.021 5.021 0 0 1 0 17.04V4a1 1 0 0 1 2 0v13.04c0 1.333.895 2.519 2.176 2.885l6.726 1.921a4.005 4.005 0 0 0 2.198 0l6.725-1.921a3.013 3.013 0 0 0 2.176-2.885V3a1 1 0 0 1 2 0v14.04a5.023 5.023 0 0 1-3.626 4.808l-6.726 1.921a6.005 6.005 0 0 1-1.648.231ZM18.023.155c-.728-.269-1.539-.202-2.26.086l-.877.35a3 3 0 0 0-1.887 2.786v14.496a4.026 4.026 0 0 1-2 0V3.377A3 3 0 0 0 9.112.591L8.234.24c-.721-.288-1.532-.355-2.26-.085a3.004 3.004 0 0 0-1.976 2.822v12.714a3 3 0 0 0 2.175 2.884l4.176 1.194a6.027 6.027 0 0 0 3.296 0l4.176-1.194a2.999 2.999 0 0 0 2.175-2.884V2.977A3.004 3.004 0 0 0 18.019.155Z"/></svg>
  