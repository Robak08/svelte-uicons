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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-acorn {customClass}"><path d="M17 2h-4V1c0-.55-.45-1-1-1s-1 .45-1 1v1H7C3.69 2 1 4.69 1 8c0 1.1.9 2 2 2v4.41c0 4.7 4.14 7.65 6.61 8.98.75.41 1.57.61 2.39.61s1.64-.2 2.39-.61c2.47-1.34 6.61-4.28 6.61-8.98V10c1.1 0 2-.9 2-2 0-3.31-2.69-6-6-6Zm2 12.41c0 3.67-3.48 6.1-5.56 7.23-.9.49-1.98.49-2.88 0C8.48 20.52 5 18.08 5 14.41V10h14v4.41ZM3 8c0-2.21 1.79-4 4-4h10c2.21 0 4 1.79 4 4H3Z"/></svg>
  