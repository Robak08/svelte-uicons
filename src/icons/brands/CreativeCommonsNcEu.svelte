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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M20.515 3.48C18.192 1.16 15.348 0 11.984 0 8.66 0 5.847 1.16 3.544 3.48 1.181 5.88 0 8.719 0 12c0 3.279 1.181 6.1 3.544 8.459C5.907 22.82 8.72 24 11.984 24c3.304 0 6.168-1.19 8.59-3.57C22.858 18.17 24 15.36 24 12c0-3.36-1.162-6.201-3.485-8.52zm-1.502 15.39c-1.982 1.96-4.315 2.939-6.998 2.939-2.684 0-4.997-.97-6.939-2.91-1.942-1.94-2.913-4.24-2.913-6.899 0-1.125.178-2.189.529-3.191l3.18 1.408h-.23v1.426h1.125c0 .202-.02.402-.02.603v.342H5.642v1.426h1.306c.181 1.065.583 1.928 1.125 2.612 1.125 1.487 2.933 2.29 4.902 2.29 1.286 0 2.451-.381 3.134-.764l-.483-2.23c-.422.221-1.365.522-2.29.522-1.005 0-1.948-.301-2.592-1.024-.301-.341-.522-.804-.662-1.406h4.367l6.206 2.747a9.317 9.317 0 0 1-1.642 2.109zm-7.805-6.283-.026-.02m3.762-.925h.179v-1.426h-3.401l-1.382-.611c.119-.268.26-.507.424-.694.623-.764 1.506-1.085 2.471-1.085.884 0 1.707.261 2.23.482l.563-2.29c-.724-.321-1.788-.602-3.013-.602-1.888 0-3.496.763-4.641 2.049a6.05 6.05 0 0 0-.675.97L3.753 6.689c.382-.574.832-1.124 1.353-1.65 1.883-1.92 4.185-2.88 6.909-2.88 2.723 0 5.036.96 6.939 2.88 1.922 1.9 2.883 4.22 2.883 6.96 0 .903-.103 1.755-.305 2.558l-6.588-2.915z"/></svg>
  