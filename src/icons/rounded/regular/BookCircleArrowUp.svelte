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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M9 22H4c-1.103 0-2-.897-2-2s.897-2 2-2h3a1 1 0 1 0 0-2H6V2h9c1.654 0 3 1.346 3 3v2a1 1 0 0 0 2 0V5c0-2.757-2.243-5-5-5H5C2.243 0 0 2.243 0 5v15c0 2.206 1.794 4 4 4h5a1 1 0 1 0 0-2ZM4 2.172V16a3.98 3.98 0 0 0-2 .537V5c0-1.304.836-2.415 2-2.828ZM17 10c-3.86 0-7 3.141-7 7s3.14 7 7 7 7-3.141 7-7-3.14-7-7-7Zm0 12c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5Zm2.742-6.499a.878.878 0 0 1-.622 1.498h-1.121v2a1 1 0 1 1-2 0v-2h-1.121a.879.879 0 0 1-.622-1.499l1.5-1.5a1.76 1.76 0 0 1 2.485 0l1.5 1.5Z"/></svg>
  