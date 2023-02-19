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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-cubes {customClass}"><path d="M22.49 12.13 18.5 9.85V5.3c0-1.07-.58-2.07-1.51-2.6l-3.5-2c-.92-.52-2.06-.52-2.98 0l-3.5 2c-.93.53-1.51 1.53-1.51 2.6v4.55l-3.99 2.28C.58 12.66 0 13.66 0 14.73v3.96c0 1.07.58 2.07 1.51 2.6l3.5 2c.46.26.97.39 1.49.39s1.03-.13 1.49-.39L12 21l4.01 2.29c.46.26.97.39 1.49.39s1.03-.13 1.49-.39l3.5-2c.93-.53 1.51-1.53 1.51-2.6v-3.96c0-1.07-.58-2.07-1.51-2.6Zm-4.99 3.43-3.48-1.99 3.48-1.99 3.48 1.99-3.48 1.99Zm-11 0-3.48-1.99 3.48-1.99 3.48 1.99-3.48 1.99Zm4.5-7.7v3.98l-3.5-2V5.86l3.5 2Zm5.5-2v3.98l-3.5 2V7.86l3.5-2Zm-5-3.43c.3-.17.69-.17.99 0l2.99 1.71L12 6.13 8.52 4.14l2.99-1.71Zm-9 17.13c-.31-.18-.5-.51-.5-.87v-3.4l3.5 2v3.98l-3-1.71Zm5 1.71v-3.98l3.5-2v3.98l-3.5 2Zm5.5-2v-3.98l3.5 2v3.98l-3.5-2Zm8.5.29-3 1.71v-3.98l3.5-2v3.4c0 .36-.19.69-.5.87Z"/></svg>
  