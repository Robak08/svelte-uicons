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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M19.557 19c-.357 0-.714-.08-1.048-.239L5.664 12.442A6.029 6.029 0 0 1 2.278 7.67l-.267-2.495a2.022 2.022 0 0 1 .465-1.517 1.817 1.817 0 0 1 1.285-.655A1.93 1.93 0 0 1 5.67 4.211l1.26 3.223 13.577 6.815a2.504 2.504 0 0 1 1.283 3.291 2.422 2.422 0 0 1-1.383 1.307 2.436 2.436 0 0 1-.851.154ZM24 23a1 1 0 0 0-1-1H1a1 1 0 1 0 0 2h22a1 1 0 0 0 1-1Zm-7.386-12.943-1.201-6.529a2.496 2.496 0 0 0-1.498-2.069l-.793-.338a1.503 1.503 0 0 0-1.419.13c-.421.28-.672.75-.67 1.253v4.751l5.581 2.801Z"/></svg>
  