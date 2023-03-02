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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M13.698.209a6.994 6.994 0 0 0-3.396 0l-4.715 1.34a2.185 2.185 0 0 0-.38 4.055L6 6s2 1 6 1 6-1 6-1l.793-.396a2.185 2.185 0 0 0-.38-4.055L13.698.209ZM11.486 5.36l-1.643-.985a1 1 0 0 1 1.029-1.715L12 3.337l1.128-.677a1 1 0 1 1 1.029 1.715l-1.643.985a1 1 0 0 1-1.029 0Zm6.507 2.784C17.916 11.386 15.26 14 12 14s-5.915-2.615-5.993-5.856C7.071 8.504 9.053 9 12 9s4.929-.496 5.993-.856Zm-6.935 15.91h-7a1 1 0 0 1-.993-1.124c.538-4.304 3.763-7.398 7.992-7.822v8.946Zm9.992-1.124a1 1 0 0 1-.993 1.124h-7v-8.946c4.229.424 7.454 3.518 7.992 7.822Z"/></svg>
  