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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 465.822 465.822"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="m5.988 289.981 88.875 88.875c24.992 24.984 65.504 24.984 90.496 0l274.475-274.475c8.185-8.475 7.95-21.98-.525-30.165-8.267-7.985-21.374-7.985-29.641 0L155.194 348.691c-8.331 8.328-21.835 8.328-30.165 0l-88.875-88.875c-8.475-8.185-21.98-7.95-30.165.525-7.985 8.267-7.985 21.373-.001 29.64z"/></svg>
  