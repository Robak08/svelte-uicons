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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M14 7V4c0-1.65 1.35-3 3-3h3c1.65 0 3 1.35 3 3v3c0 1.65-1.35 3-3 3h-3c-1.65 0-3-1.35-3-3Zm-3.69 11.28L7 21.43V1c0-.55-.45-1-1-1S5 .45 5 1v20.43l-3.31-3.15a.996.996 0 1 0-1.38 1.44l3.57 3.4c.57.57 1.32.88 2.12.88s1.55-.31 2.1-.86l3.59-3.41c.4-.38.42-1.01.03-1.41a.987.987 0 0 0-1.41-.03Zm12.89 1.31-2.69-4.39c-.4-.74-1.17-1.2-2.01-1.2s-1.61.46-1.98 1.15l-2.74 4.48c-.39.71-.37 1.56.05 2.26s1.15 1.12 1.96 1.12h5.43c.81 0 1.55-.42 1.96-1.12s.43-1.54.02-2.3Z"/></svg>
  