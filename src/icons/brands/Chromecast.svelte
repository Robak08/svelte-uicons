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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M21.818 2.182H2.182C.982 2.182 0 3.164 0 4.364v3.273h2.182V4.364h19.636v15.273h-7.636v2.182h7.636c1.2 0 2.182-.982 2.182-2.182V4.364c0-1.2-.982-2.182-2.182-2.182zM0 18.545v3.273h3.273A3.269 3.269 0 0 0 0 18.545zm0-4.363v2.182a5.457 5.457 0 0 1 5.455 5.454h2.182A7.631 7.631 0 0 0 0 14.182zm0-4.364V12c5.422 0 9.818 4.396 9.818 9.818H12c0-6.633-5.378-12-12-12z"/></svg>
  