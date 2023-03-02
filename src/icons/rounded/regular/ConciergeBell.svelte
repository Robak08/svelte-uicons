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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23 21H13v-2h7.343A2.66 2.66 0 0 0 23 16.343V16c0-3.029-1.268-5.955-3.479-8.027A10.89 10.89 0 0 0 13 5.043V3h1a1 1 0 0 0 0-2h-4a1 1 0 0 0 0 2h1v2.044c-5.629.509-10 5.418-10 11.299A2.66 2.66 0 0 0 3.657 19H11v2H1a1 1 0 0 0 0 2h22a1 1 0 0 0 0-2ZM3 16.342c0-4.923 3.689-9.018 8.399-9.323.197-.013.393-.019.588-.02h.028a8.913 8.913 0 0 1 6.138 2.432A8.914 8.914 0 0 1 21 15.999v.343a.658.658 0 0 1-.657.657H3.657A.658.658 0 0 1 3 16.341Z"/></svg>
  