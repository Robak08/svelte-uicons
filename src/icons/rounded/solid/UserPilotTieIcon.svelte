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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M13.698.225a6.994 6.994 0 0 0-3.396 0l-4.715 1.34a2.185 2.185 0 0 0-.38 4.055L6 6.016s2 1 6 1 6-1 6-1l.793-.396a2.185 2.185 0 0 0-.38-4.055L13.698.225ZM11.486 5.37l-1.643-.985a1 1 0 0 1 1.029-1.715L12 3.347l1.128-.677a1 1 0 1 1 1.029 1.715l-1.643.985a1 1 0 0 1-1.029 0Zm6.506 2.79C17.906 11.394 15.255 14 12 14s-5.906-2.606-5.992-5.84c1.064.36 3.046.856 5.992.856s4.928-.496 5.992-.856Zm3 14.716A1 1 0 0 1 19.999 24h-5.615c-.333 0-.405-.382-.405-.382L12.499 18l1.72-2.736c3.617.845 6.287 3.734 6.772 7.612ZM9.538 24H4a1 1 0 0 1-.993-1.124c.485-3.878 3.155-6.767 6.772-7.612L11.499 18l-1.557 5.618S9.87 24 9.537 24Z"/></svg>
  