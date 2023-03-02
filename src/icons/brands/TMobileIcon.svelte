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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M2.187 15.921 7.041 15.921 7.041 11.066 2.187 11.066 2.187 15.921z"/><path d="M13.871 1.145c3.955.07 6.313 2.706 6.66 7.526l1.284-.208L21.57 0H2.426l-.241 8.463 1.282.208c.348-4.82 2.671-7.457 6.66-7.526v17.723c0 3.225-.556 3.746-4.023 3.781V24h11.791v-1.352c-3.468-.034-4.024-.556-4.024-3.781V1.145z"/><path d="M16.918 15.921 21.772 15.921 21.772 11.066 16.918 11.066 16.918 15.921z"/></svg>
  