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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="m23.843 22.248-6.855-11.67a1.131 1.131 0 0 0-1.974 0l-6.855 11.67c-.444.777.105 1.752.987 1.752h13.711c.882 0 1.432-.976.987-1.752ZM16 22a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 1 1-2 0v-3a1 1 0 1 1 2 0v3ZM6.421 21.254l6.867-11.689C13.837 8.607 14.88 8 16 8s2.163.607 2.723 1.584L24 18.566V5c0-2.757-2.243-5-5-5H5C2.243 0 0 2.243 0 5v14c0 2.757 2.243 5 5 5h1.252c-.352-.891-.314-1.901.169-2.746ZM8 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM4 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"/></svg>
  