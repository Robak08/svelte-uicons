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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M14 10H5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1Zm-1 8H6v-6h7v6Zm9.88-9.007a2.018 2.018 0 0 0-2.125.191l-1.802 1.352C18.715 7.999 16.598 6 14 6h-.073L9.806 1.879A2.978 2.978 0 0 0 7.685 1H1a1 1 0 1 0 0 2h6.685c.263 0 .521.107.707.293L11.099 6H5c-2.757 0-5 2.243-5 5v8c0 2.757 2.243 5 5 5h9c2.598 0 4.714-1.999 4.953-4.535l1.802 1.352a2.019 2.019 0 0 0 2.124.191A2.018 2.018 0 0 0 24 19.194v-8.387a2.02 2.02 0 0 0-1.12-1.814ZM17 19c0 1.654-1.346 3-3 3H5c-1.654 0-3-1.346-3-3v-8c0-1.654 1.346-3 3-3h9c1.654 0 3 1.346 3 3v8Zm4.954.216L19 17v-3.995l2.999-2.213v.015l-.045 8.41Z"/></svg>
  