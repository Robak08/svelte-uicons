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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M20 10h-.115A3.1 3.1 0 0 0 17 6H3c-5.451.372-2 8.651-.589 10.912A6.877 6.877 0 0 0 8.216 20h3.567a6.875 6.875 0 0 0 5.742-3H20c4.814-.093 5.759-7.178 0-7Zm-8.217 8H8.216a4.881 4.881 0 0 1-4.131-2.179C3.541 15.3.494 8 3 8h14a.973.973 0 0 1 .729.325 1.028 1.028 0 0 1 .261.8c-.563 4.259-1.622 8.686-6.207 8.875ZM20 15h-1.412a16.82 16.82 0 0 0 .954-3c1.209-.081 2.546.216 2.458 1.143A1.984 1.984 0 0 1 20 15ZM9.025 3V1a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0Zm4 0V1a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0Zm-8 0V1a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0ZM20 23a1 1 0 0 1-1 1H1a1 1 0 0 1 0-2h18a1 1 0 0 1 1 1Z"/></svg>
  