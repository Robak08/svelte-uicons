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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M21.99 10.01V19c0 2.76-2.24 5-5 5H7a5.01 5.01 0 0 1-3.54-1.46C2.52 21.6 2 20.34 2 19v-9c0-2.76 2.24-5 5-5h4v10.43l-3.31-3.15a.996.996 0 0 0-1.41.03c-.38.4-.37 1.03.04 1.41l3.57 3.4c.59.59 1.36.88 2.13.88s1.52-.29 2.1-.86l3.59-3.41c.4-.38.42-1.01.04-1.41a.987.987 0 0 0-1.41-.03l-3.31 3.15V5h4c1.33 0 2.59.52 3.53 1.46.95.94 1.47 2.2 1.47 3.54ZM13 1c0-.55-.45-1-1-1s-1 .45-1 1v4h2V1Z"/></svg>
  