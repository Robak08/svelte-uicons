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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M16 5h-3V2.023c3.2.144 5.668.921 5.694.929a1.001 1.001 0 0 0 .612-1.904C19.173 1.005 15.999 0 12 0S4.827 1.005 4.694 1.048a1 1 0 1 0 .612 1.904c.027-.009 2.482-.786 5.694-.93v2.977H8c-2.757 0-5 2.243-5 5v7a5.01 5.01 0 0 0 3.568 4.791l-.421.687a.999.999 0 1 0 1.705 1.044l.932-1.522h6.431l.932 1.522a.999.999 0 1 0 1.705-1.044l-.421-.687a5.009 5.009 0 0 0 3.568-4.791v-7c0-2.757-2.243-5-5-5Zm-3 9v-3h6v3h-6Zm-8 0v-3h6v3H5Zm3-7h8c1.304 0 2.415.836 2.828 2H5.172A3.004 3.004 0 0 1 8 7Zm8 13H8c-1.654 0-3-1.346-3-3v-1h2v1a1 1 0 1 0 2 0v-1h6v1a1 1 0 1 0 2 0v-1h2v1c0 1.654-1.346 3-3 3Z"/></svg>
  