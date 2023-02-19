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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-user-pilot-tie {customClass}"><path d="M5.208 5.62 6 6.016V8c0 3.309 2.691 6 6 6s6-2.691 6-6V6.016l.793-.396a2.184 2.184 0 0 0-.38-4.055L13.698.225a6.994 6.994 0 0 0-3.396 0l-4.715 1.34a2.185 2.185 0 0 0-.38 4.055ZM16 8c0 2.206-1.794 4-4 4s-4-1.794-4-4v-.375c.978.208 2.296.391 4 .391s3.022-.183 4-.391V8ZM9.5 3.5a1 1 0 0 1 1.372-.343L12 3.834l1.128-.677a1 1 0 1 1 1.029 1.715l-1.643.985a1 1 0 0 1-1.029 0l-1.643-.985A1 1 0 0 1 9.499 3.5Zm11.492 19.376a1 1 0 1 1-1.984.248c-.385-3.079-2.439-5.302-5.3-5.935L12.501 19l1.397 3.794A.833.833 0 0 1 13.152 24h-2.303a.833.833 0 0 1-.746-1.206L11.5 19l-1.207-1.811c-2.861.633-4.916 2.856-5.301 5.935a.999.999 0 1 1-1.984-.248C3.587 18.238 7.285 15 12 15s8.413 3.238 8.992 7.876Z"/></svg>
  