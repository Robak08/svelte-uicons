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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23 4H1c-.55 0-1-.45-1-1s.45-1 1-1h22c.55 0 1 .45 1 1s-.45 1-1 1Zm1 17c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1s.45 1 1 1h22c.55 0 1-.45 1-1Zm-4-8v-2c0-2.21-1.79-4-4-4H8c-2.21 0-4 1.79-4 4v2c0 2.21 1.79 4 4 4h8c2.21 0 4-1.79 4-4Zm-4-4c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2v-2c0-1.1.9-2 2-2h8Z"/></svg>
  