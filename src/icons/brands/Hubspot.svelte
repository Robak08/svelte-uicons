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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M18.164 7.931V5.085a2.195 2.195 0 0 0 1.266-1.978V3.04A2.199 2.199 0 0 0 17.237.847h-.067a2.199 2.199 0 0 0-2.193 2.193v.067a2.194 2.194 0 0 0 1.266 1.978v2.852a6.22 6.22 0 0 0-2.957 1.301L5.458 3.142a2.497 2.497 0 1 0-1.169 1.521l7.696 5.991a6.237 6.237 0 0 0 .096 7.032l-2.342 2.342a2.013 2.013 0 0 0-.581-.095 2.033 2.033 0 1 0 2.033 2.034 2.013 2.013 0 0 0-.095-.581l2.317-2.317a6.247 6.247 0 1 0 4.746-11.137m-.959 9.376a3.206 3.206 0 1 1 .008.001"/></svg>
  