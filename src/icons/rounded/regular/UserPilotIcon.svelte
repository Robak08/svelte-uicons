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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M5.208 5.604 6 6v2c0 3.309 2.691 6 6 6s6-2.691 6-6V6l.793-.396a2.184 2.184 0 0 0-.38-4.055L13.698.209a6.994 6.994 0 0 0-3.396 0l-4.715 1.34a2.185 2.185 0 0 0-.38 4.055ZM16 8c0 2.206-1.794 4-4 4s-4-1.794-4-4v-.391c.978.208 2.296.391 4 .391s3.022-.183 4-.391V8ZM9.5 3.5a1 1 0 0 1 1.372-.343L12 3.834l1.128-.677a1 1 0 1 1 1.029 1.715l-1.643.985a1 1 0 0 1-1.029 0l-1.643-.985A1 1 0 0 1 9.499 3.5Zm11.492 19.376a1 1 0 1 1-1.984.248c-.416-3.327-2.78-5.656-6.008-6.056V23a1 1 0 1 1-2 0v-5.932c-3.227.4-5.592 2.729-6.008 6.056a1.01 1.01 0 0 1-1.116.868.999.999 0 0 1-.868-1.116C3.588 18.238 7.285 15 12 15s8.413 3.238 8.992 7.876Z"/></svg>
  