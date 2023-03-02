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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23.351.649a2.188 2.188 0 0 0-2.31-.515l-.216.077A32.72 32.72 0 0 0 7.964 8.036a22.707 22.707 0 0 0-2.471 3.016c-1.4 2-1.666 4.189.054 5.91l.039.038-2.293 2.293a1 1 0 0 0 0 1.414 1 1 0 0 0 1.414 0L7 18.414l.038.039c1.721 1.72 3.915 1.452 5.91.054a22.707 22.707 0 0 0 3.016-2.471 32.72 32.72 0 0 0 7.825-12.862l.077-.216a2.186 2.186 0 0 0-.515-2.309zM11 14a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm3-3a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm3-3a1 1 0 1 1 1-1 1 1 0 0 1-1 1zM2.363 13.038A2.362 2.362 0 0 1 0 10.676a2.413 2.413 0 0 1 .665-1.654 9.776 9.776 0 0 1 6.46-2.944c-.191.182-.386.355-.575.544A24.8 24.8 0 0 0 3.855 9.9a8.2 8.2 0 0 0-1.38 3.133zM11 21.525a8.185 8.185 0 0 0 3.133-1.38 24.739 24.739 0 0 0 3.283-2.695c.19-.189.362-.384.545-.575a9.782 9.782 0 0 1-2.945 6.46 2.41 2.41 0 0 1-1.653.665A2.363 2.363 0 0 1 11 21.637z"/></svg>
  