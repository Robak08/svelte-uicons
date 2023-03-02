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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M15 10c0 .55-.45 1-1 1h-2v2c0 .55-.45 1-1 1s-1-.45-1-1v-2H8c-.55 0-1-.45-1-1s.45-1 1-1h2V7c0-.55.45-1 1-1s1 .45 1 1v2h2c.55 0 1 .45 1 1Zm9 3c0 .97-.7 2-2 2h-.33l-.22 1.66A5.012 5.012 0 0 1 16.49 21H16c0 1.65-1.35 3-3 3H6c-1.65 0-3-1.35-3-3v-.97c0-.9-.26-1.73-.74-2.36A10.968 10.968 0 0 1 .05 9.98C.5 4.95 4.46.79 9.45.11c4.04-.56 7.91 1.06 10.35 4.31C21.07 5.99 24 11.58 24 13Zm-2 0c-.12-.9-2.47-5.74-3.78-7.35C16.46 3.31 13.84 2 11 2c-.42 0-.85.03-1.28.09-4.08.56-7.31 3.96-7.69 8.07-.21 2.27.44 4.5 1.81 6.3.74.97 1.15 2.24 1.15 3.57V21c0 .55.45 1 1 1h7c.55 0 1-.45 1-1v-1c0-.55.45-1 1-1h1.49c1.5 0 2.78-1.12 2.97-2.61l.33-2.52c.07-.5.49-.87.99-.87h1.2Z"/></svg>
  