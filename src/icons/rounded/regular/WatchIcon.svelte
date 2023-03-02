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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M22 12a9.991 9.991 0 0 0-4-7.995V1a1 1 0 0 0-2 0v1.836C14.774 2.299 13.422 2 12 2s-2.774.299-4 .836V1a1 1 0 0 0-2 0v3.005C3.573 5.831 2 8.735 2 12s1.573 6.169 4 7.995V23a1 1 0 1 0 2 0v-1.836c1.226.537 2.578.836 4 .836s2.774-.299 4-.836V23a1 1 0 1 0 2 0v-3.005A9.991 9.991 0 0 0 22 12ZM4 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8-8-3.589-8-8Zm10.707 1.293a.999.999 0 1 1-1.414 1.414l-2-2A1 1 0 0 1 11 12V8a1 1 0 0 1 2 0v3.586l1.707 1.707Z"/></svg>
  