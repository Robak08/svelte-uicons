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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M20.276 1.724c3.278 4.181 1.7 11.042-3.845 12.129A5.23 5.23 0 0 1 10 9.048a5.009 5.009 0 0 1 4.148-4.975C18.66 3.352 19.487 9.7 15 10a1 1 0 0 1 0-2 1 1 0 0 0 0-2 3.01 3.01 0 1 0 .635 5.96 5.043 5.043 0 0 0 4.334-5.617C19.446.748 12.368-1.267 8.488 2.8A9 9 0 0 0 8 14.588L.3 22.293a1 1 0 0 0 1.414 1.414L9.416 16c9.795 7.33 20.44-6.843 10.86-14.276Z"/></svg>
  