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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M21 5h-.773a8.623 8.623 0 0 0-.427-.581C17.363 1.164 13.486-.451 9.453.106 4.457.793.501 4.946.046 9.982c-.25 2.77.536 5.501 2.215 7.691.477.624.739 1.46.739 2.355v.971c0 1.654 1.346 3 3 3h7c1.654 0 3-1.346 3-3h.494a5.015 5.015 0 0 0 4.957-4.345l.069-.524a1 1 0 1 0-1.982-.262l-.069.523a3.01 3.01 0 0 1-2.975 2.607H15a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-.971c0-1.332-.409-2.601-1.151-3.571a8.992 8.992 0 0 1-1.811-6.296l.016-.162h8.072a4.006 4.006 0 0 0 3.874 3h7c1.654 0 3-1.346 3-3v-2c0-1.654-1.346-3-3-3ZM9.725 2.088c3.032-.42 5.947.656 7.967 2.912H14a4.006 4.006 0 0 0-3.874 3H2.513c1.101-3.097 3.872-5.453 7.211-5.912ZM22 10a1 1 0 0 1-1 1h-7c-1.103 0-2-.897-2-2s.897-2 2-2h7a1 1 0 0 1 1 1v2Z"/></svg>
  